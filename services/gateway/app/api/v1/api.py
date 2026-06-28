from fastapi import APIRouter
from services.gateway.app.routes import health

router = APIRouter()

router.include_router(
    health.router,
    prefix="/health",
    tags=["Health"]
)