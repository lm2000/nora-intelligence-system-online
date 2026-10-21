---
title: "Choosing tools and routing models"
description: "The responsibilities, alternatives and limits behind the component and provider choices."
slug: "choices"
diagram: "case-request"
diagramAlt: "Requirements, eligible models, configured scoring and a supported answer"
---

The [Decisions](../../decisions/) page explains the accepted assistant boundaries. This chapter records additional design options as of October 16, 2026.

## Components

| Component | Responsibility and tradeoff | Evidence | Status |
| --- | --- | --- | --- |
| Deep Agents / LangGraph / LangChain | Agent harness, durable execution and model/tool abstractions inside one Coordination service. Retained instead of adding another orchestrator; protocol compatibility becomes NIS work. | `src/nora/agent.py`, `src/nora/execution.py` | Retained; direct APIs are a candidate |
| MCP / FastMCP | Shared tool interfaces; embedded FastMCP exposes the assistant operation while Retrieval has search/read. Protocol support still needs client checks. | `src/nora/coordination.py`, `src/nora/mcp_client.py` | Retained |
| Composio | App access through explicit connected accounts; NIS owns schemas, allowlists and write approvals. This is integration, not model inference. | `src/nora/integrations.py` | Candidate; Gmail synthetic read passed |
| BGE / Qdrant / prepared text | Shared query/document encoder, rebuildable vector index and source reads. Keeping index and text aligned requires release management. | `src/nora/retrieval.py`, [ingestion](../../walkthroughs/?flow=ingestion) | Retained |
| PostgreSQL | Checkpoints and separately confirmed memories/platform records; continuity needs explicit thread ownership. | `src/nora/coordination.py`, `src/nora/platform_state.py` | Checkpoints retained; explicit memory is a candidate addition |
| Next.js / CopilotKit / AG-UI | Nora browser UI and the first client, wired to the AG-UI transport | [Architecture](../../architecture/) | Current |
| Dashboard | Shows source review, local checks, live evidence and freshness separately. A green check does not grant user acceptance. | `src/nora/project_status.py` | Candidate, not deployed |
| LangSmith | Optional metadata-only export; hosted tracing adds a privacy and service decision. Local records remain authoritative. | `src/nora/observability.py` | Optional candidate path; hosted activation not established |
| Harbor Hub | [Task/dataset catalog](https://hub.harborframework.com/) for the Harbor evaluation framework, not inference or the NIS runtime. | [AI and evidence](../learning/), [Validation](../../validation/) | Considered; no NIS run established |
| Codex | Can use MCP and external retrieval. Historical gateway evidence and a separate synthetic direct-API protocol probe establish different scopes. | [Validation](../../validation/), [AI and evidence](../learning/) | Excluded from current functional acceptance |
| OpenClaw | Second client; historical bounded MCP passes | [Decisions](../../decisions/) | Direct sanity pending |
| Wave | Remote terminal/SSH operation; no verified NIS inference-client integration in this source set. | Operator evidence summarized in this case study | Operational tool |
| Obsidian | Knowledge and documentation workspace; no verified direct model-API client in this source set. | Source-workspace evidence summarized in this case study | Workspace |
| Hermes | Removed from the candidate set by Michael's decision | [Architecture evolution](../evolution/) | Removed from active provider support; historical decision retained |
| LiteLLM | Model gateway of the used baseline route | [Architecture](../../architecture/) | Still deployed, outside target |

## Target providers

| Provider | Status | Synthetic probe receipt |
| --- | --- | --- |
| Ollama Cloud | Target | gpt-oss:20b passed facts, text streaming, function calls, and Responses plus Completions |
| Fireworks | Target | kimi-k3 passed the same probe set |
| DeepSeek | Target | deepseek-flash passed the same probe set; the adapter pins nonthinking mode as an adapter constraint, not a DeepSeek limitation |

These are live synthetic checks of compatibility, not benchmarks — the per-call probe timings do not establish a controlled latency comparison, and billed comparison costs remain unknown. [AI and evidence](../learning/) summarizes the historical receipts. They apply to the tested snapshot; the latest scope governs future checks.

## Routing: a filter, bounds, and one fallback
Example: a request to reason through an architecture trade-off raises the quality bar, so the selector's strict capability and tool filter runs first, and only surviving models are scored on assumed cost and latency — never the reverse. If nothing qualifies, routing fails explicitly; there is no silent downgrade to a weaker default. An ordinary request uses one model. Explicit independent verification can use at most two branches. Retrieval is bounded at three calls, including automatic grounding and any memory lookup; model calls at 4, including synthesis and repair across continuations. Fallback fires at most once, only before visible output, never after. These are bounds on work per request, not proof of answer quality. Receipts: `src/nora/selector.py`, `src/nora/model_api.py`.

## Tools: keep execution ownership explicit
Client-supplied functions return to the client for execution. Internal NIS tools execute inside NIS. Inside NIS, an allowlist governs Composio and MCP access, each tool bound to a validated argument schema and an explicit account or endpoint. Writes never fire automatically: they produce a proposal that waits for approval, and uncertain actions are not silently replayed. Live receipts so far: a Gmail read passed; Dropbox authorization is expired; an independent Superhuman MCP path is unverified.

## Cost pressure, honestly bounded
Cost motivation here is Michael-reported: native provider allowances are the pressure behind trimming layers. It is not a platform-setup story about configuring a subscription, and a subscription allowance is never treated as API billing. The actual billed comparison cost between direct routes and the gateway is unknown. This project claims no savings — only allowance pressure as one motivation for provider flexibility.

## What is proven and what is not
The source candidate can be inspected in: `src/nora/agent.py`, `src/nora/selector.py`, `src/nora/model_api.py`, `src/nora/integrations.py`, `src/nora/platform_state.py`, and `src/nora/providers.py`. The direct-platform candidate is unpublished and undeployed, so its rows stay labeled as targets. GCP remains the documented hosting environment; nothing here claims a move away from it. Until the planned measurement runs, the tables above state status, not superiority.


Primary technical references: [Deep Agents](https://docs.langchain.com/oss/python/deepagents/overview), [MCP](https://modelcontextprotocol.io/docs/getting-started/intro), and [DeepSeek thinking-mode behavior](https://api-docs.deepseek.com/guides/thinking_mode/). These explain upstream interfaces; the NIS source and receipts establish what this project actually used.
