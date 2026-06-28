# Mintok Database Schema

## Users

- id
- username
- email
- password_hash
- auth_provider
- avatar
- created_at

---

## Projects

- id
- user_id
- name
- api_key
- provider
- created_at

---

## Requests

- id
- project_id
- prompt
- optimized_prompt
- input_tokens
- optimized_tokens
- output_tokens
- saved_tokens
- latency
- created_at

---

## Analytics

- id
- project_id
- total_requests
- total_input_tokens
- total_output_tokens
- total_saved_tokens
- total_cost
- total_saved_cost
- average_boost

---

## Benchmarks

- id
- request_id
- quality_score
- optimization_score
- latency
- benchmark_version

---

## Billing

- id
- user_id
- plan
- status
- amount
- next_billing_date

---

## API Keys

- id
- project_id
- mintok_key
- status
- created_at

## Optimization Logs

- id
- request_id
- stage
- tokens_before
- tokens_after
- improvement
- execution_time