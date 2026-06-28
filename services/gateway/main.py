from fastapi import FastAPI
from dotenv import load_dotenv
from starlette.middleware.sessions import SessionMiddleware
import os

load_dotenv()

from services.gateway.app.api.v1.api import router

app = FastAPI(
    title="Mintok Gateway",
    version="1.0.0"
)
app.add_middleware(
    SessionMiddleware,
    secret_key=os.getenv("JWT_SECRET", "mintok-secret"),
)
app.include_router(router)