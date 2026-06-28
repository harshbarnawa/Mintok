from fastapi import FastAPI

from services.gateway.app.api.v1.api import router

app = FastAPI(
    title="Mintok Gateway",
    version="1.0.0"
)

app.include_router(router)