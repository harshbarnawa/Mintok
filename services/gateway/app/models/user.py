from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from services.gateway.app.database.base import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)

    username: Mapped[str] = mapped_column(String(50), unique=True)

    email: Mapped[str] = mapped_column(String(255), unique=True)

    hashed_password: Mapped[str] = mapped_column(String(255))