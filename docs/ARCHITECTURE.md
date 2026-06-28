# Mintok Architecture

Client Application
        │
        ▼
   Mintok SDK
        │
        ▼
  FastAPI Gateway
        │
        ▼
Optimization Engine
        │
        ▼
 Provider Adapter
        │
        ▼
 OpenAI / Claude / Gemini
        │
        ▼
    AI Response
        │
        ▼
 Analytics Engine
        │
        ▼
 PostgreSQL + Redis
        │
        ▼
 Next.js Dashboard

 ## Core Components

### SDK
- Developer integration
- Sends AI requests
- Receives optimized responses

### Gateway
- Authentication
- Request validation
- Token counting
- Calls optimizer

### Optimization Engine
- Prompt analysis
- Token budget optimization
- Smart token pruning
- Compression pipeline

### Provider Adapter
- Claude
- OpenAI
- Gemini
- Groq

### Analytics
- Token usage
- Cost estimation
- Savings
- Benchmarks

### Dashboard
- Projects
- Analytics
- API Keys
- Benchmarks
- Billing