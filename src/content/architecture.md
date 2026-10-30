## Purpose

Nora SuperIntelligence Lab’s AI agent harness separates retained knowledge, task coordination and model inference. The Knowledge Backbone keeps prepared source text and a searchable index outside a model’s finite context window. Retrieval MCP finds and reads evidence for each bounded request.

## Example

For “Prepare an Atlas handover brief,” the AI Coordinator plans the task, retrieves the release plan and decisions, delegates focused work and synthesizes a draft. Role-based feedback guides revision; the Synthetic Owner scores progress and recommends acceptance or further work. A qualifying result goes to the Real Owner, whose approval is final and whose change requests form a second revision loop.

## Approach and Tradeoffs

Browser HTTP/AG-UI and MCP clients reach the same coordinator. The MCP Gateway (LiteLLM Proxy) provides tool access; the MCP Server (FastMCP) exposes `ask_nis`. Deep Agents/LangGraph and PostgreSQL checkpoints support the task lifecycle in Coordination. Orchestration assigns tasks and combines results, while simple, general, reasoning and specialized model routes select inference. Harbor Hub and Hugging Face are separate coordinator-selected evaluation routes.

Retrieval owns query encoding through shared BGE, index access in Qdrant and reads of matching prepared text. Retained knowledge can grow independently of context, but preparation and relevance checks add work and useful evidence can still be missed. Explicit retrieval/model budgets bound execution without guaranteeing answer quality.

## Boundaries and Recovery

Conversion, preparation, embedding and import/verification are four ingestion jobs outside conversations. Additions include retained knowledge; rebuilds use the complete desired source set. Backups precede preparation, followed by verification, activation and answer checks. Prepared text and the index form one release; PostgreSQL keeps conversation checkpoints separately. Checkpoint persistence alone does not establish clean-target restoration, crash behavior or exactly-once effects.

## Reference

[Architecture concept](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/7ea9e4915f4e1ad446aeaf077ccbbbfc1aa2d053/docs/architecture/architecture-concept.md)
