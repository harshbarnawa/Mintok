# Mintok API Design

## Authentication

POST /auth/register

POST /auth/login

POST /auth/google

POST /auth/logout

GET /auth/me

---

## Projects

GET /projects

POST /projects

PATCH /projects/:id

DELETE /projects/:id

---

## API Keys

GET /apikeys

POST /apikeys

DELETE /apikeys/:id

---

## Optimization

POST /optimize

POST /chat

POST /analyze

---

## Analytics

GET /analytics/overview

GET /analytics/project/:id

GET /analytics/history

GET /analytics/benchmarks

---

## Billing

GET /billing

POST /billing/subscribe

POST /billing/webhook

---

## Health

GET /health

GET /version

# Response Format

Success

{
    "success": true,
    "data": {}
}

Error

{
    "success": false,
    "message": "",
    "error": ""
}

Client

↓

SDK

↓

Gateway

↓

Optimizer

↓

Provider

↓

Analytics

↓

Response