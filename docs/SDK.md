# Mintok SDK

## Installation

npm install @mintok/sdk

---

## Initialize

const mintok = new Mintok({
    apiKey: "mk_xxxxxxxxx"
});

---

## Chat

await mintok.chat({
    provider: "claude",
    prompt: "...",
});

---

## Optimize

await mintok.optimize({
    prompt: "...",
});

---

## Analyze

await mintok.analyze({
    prompt: "...",
});

---

## Stream

await mintok.stream({
    provider: "claude",
    prompt: "...",
});

---

## Analytics

await mintok.analytics();

---

## Projects

await mintok.projects();

---

## Version

mintok.version();

# SDK Structure

sdk-ts/

client.ts

chat.ts

optimize.ts

analyze.ts

analytics.ts

projects.ts

stream.ts

types.ts

config.ts

utils.ts

- Authenticate requests

- Send request to Gateway

- Handle streaming

- Handle retries

- Return response

- Never perform optimization locally

## Design Principle

The SDK should be extremely lightweight.

All optimization, analytics, routing, token calculation, and AI processing happen on the Mintok Cloud.