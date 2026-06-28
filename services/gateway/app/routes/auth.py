from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import os
from services.gateway.app.database.session import get_db
from services.gateway.app.schemas.user import RegisterUser
from services.gateway.app.crud.user import (
    get_user_by_email,
    get_user_by_username,
    create_user,
)
from services.gateway.app.auth.hash import hash_password
from services.gateway.app.schemas.user import LoginUser
from services.gateway.app.auth.hash import verify_password
from services.gateway.app.auth.jwt import create_access_token
from services.gateway.app.auth.dependency import get_current_user
from services.gateway.app.crud.user import get_user_by_id
from fastapi import Request
from services.gateway.app.auth.google import oauth
from fastapi.responses import RedirectResponse
from services.gateway.app.crud.user import create_google_user


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post("/register")
def register(user: RegisterUser, db: Session = Depends(get_db)):

    if get_user_by_email(db, user.email):
        raise HTTPException(status_code=400, detail="Email already exists")

    if get_user_by_username(db, user.username):
        raise HTTPException(status_code=400, detail="Username already exists")

    new_user = create_user(
        db=db,
        username=user.username,
        email=user.email,
        hashed_password=hash_password(user.password),
    )

    return {
        "message": "User created successfully",
        "id": new_user.id,
        "username": new_user.username,
    }
@router.post("/login")
def login(user: LoginUser, db: Session = Depends(get_db)):

    db_user = get_user_by_email(db, user.email)

    if not db_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    if not verify_password(
        user.password,
        db_user.hashed_password,
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    token = create_access_token(
        {
            "sub": db_user.email,
            "id": db_user.id,
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer",
    }
@router.get("/google")
async def google_login(request: Request):
    return await oauth.google.authorize_redirect(
        request,
        os.getenv("GOOGLE_REDIRECT_URI"),
    )


@router.get("/google/callback")
async def google_callback(
    request: Request,
    db: Session = Depends(get_db),
):
    token = await oauth.google.authorize_access_token(request)

    info = token["userinfo"]

    user = get_user_by_email(db, info["email"])

    if not user:
        user = create_google_user(
            db,
            email=info["email"],
            username=info["given_name"],
        )

    jwt_token = create_access_token(
        {
            "sub": user.email,
            "id": user.id,
        }
    )

    return {
        "access_token": jwt_token,
        "user": {
            "id": user.id,
            "username": user.username,
            "email": user.email,
        },
    }

@router.get("/me")
def me(
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db),
):

    user = get_user_by_id(
        db,
        current_user["id"],
    )

    return {
        "id": user.id,
        "username": user.username,
        "email": user.email,
    }