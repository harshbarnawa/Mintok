from fastapi import APIRouter
from services.gateway.app.routes import health
from services.gateway.app.routes import auth

router = APIRouter()

router.include_router(
    health.router,
    prefix="/health",
    tags=["Health"]
)
router.include_router(auth.router)