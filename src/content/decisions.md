<h2 id="example" data-index-label="Knowledge and context">Knowledge beyond a conversation</h2>

**Choice.** The Knowledge Backbone retains prepared source text and a searchable Qdrant index outside model context. Retrieval MCP searches and reads the passages needed for a task. For example, an Atlas release briefing can draw on retained release notes without attaching the entire document collection to every request.

**Why.** Useful knowledge outlives a conversation and can exceed a model's context window. Retained knowledge grows independently while each request uses bounded context.

**Tradeoff.** Preparation, indexing and relevance checks add work, and retrieval can miss useful evidence. A larger knowledge store alone does not establish answer quality.

<h2 id="coordination-and-tools" data-index-label="Coordination and tools">One coordinator, shared tool access</h2>

**Choice.** One AI Coordinator plans tasks, delegates focused work to specialist subagents, selects model routes and synthesizes results. Deep Agents/LangGraph and PostgreSQL checkpoints support the shared task lifecycle in the Coordination process. Browser HTTP/AG-UI and MCP clients reach the same coordinator. The MCP Gateway (LiteLLM Proxy) provides tool access; the embedded MCP Server (FastMCP) exposes `ask_nis(question, thread_id=None)` with a plain answer and conversation UUID.

**Why.** Shared coordination keeps task state and conversation handling consistent across clients. Retrieval MCP owns query encoding and source/index access, so clients do not need storage details. Task orchestration and inference selection remain separate decisions.

**Tradeoff.** Shared coordination requires explicit checkpoint ownership, failure handling and budgets. Tool boundaries add service hops; they do not establish a latency or cost advantage. This is a private single-user design, with topic separation rather than shared enterprise memory.

See [Architecture](../architecture/#system-map) for the component boundaries.

<h2 id="approach-and-tradeoffs" data-index-label="Request bounds">Execution and request bounds</h2>

**Choice.** A turn allows three retrieval calls including initial Grounding, four logical model calls, bounded provider retries, and one no-tool word-length repair within that model allowance. Source text is reference material rather than executable instructions. Simple, general, reasoning and specialized model routes select inference for each step; Ollama and Fireworks are backends, while DeepSeek is a model family.

**Why.** Explicit limits bound tool and model work. One coordinator owns execution and the conversation lifecycle without an additional outer agent loop.

**Tradeoff.** A finite allowance limits retrieval and correction, so incomplete evidence and failures must remain explicit. Route selection does not itself establish provider parity, savings or answer quality. [Validation](../validation/) records checks and their limits.

<h2 id="boundaries-and-recovery" data-index-label="Knowledge updates">Knowledge updates</h2>

**Choice.** Conversion, deterministic preparation, embedding, and import/verification are four operator-triggered jobs outside conversations. Shared BGE encodes queries and documents. Preparation preserves meaning without generated per-source summaries or rewrites. Prepared text and its matching Qdrant collection form one release.

**Why.** Separate ingestion keeps long-running writes out of the answer path and makes source identity and activation explicit. Additions include retained knowledge; rebuilds use the complete desired source set.

**Tradeoff.** Updates require an operator and a complete release. The procedure is backup-first, then prepare, import, verify, activate, and check answers. Failed acceptance leaves the update incomplete for investigation. Local releases and generation-pinned GCS releases are supported boundaries; the deployment record owns the active installation. A literal Retrieval release pin needs an explicit deployment change.

See the [ingestion walkthrough](../walkthroughs/?flow=ingestion&step=backup) and [Reproduce](../reproduce/) for source checks.

<h2 id="evaluation-and-approval" data-index-label="Review and approval">Role-based review and owner approval</h2>

**Choice.** The coordinator has separate routes to Harbor Hub and Hugging Face. Prepared Harbor tasks and datasets form the NIS Judge Registry. Versioned personas, rubrics, criteria, datasets and examples define CTO, AI Architect, Hiring Manager, Senior Engineer, Domain Expert and Synthetic Owner reviews.

**Why.** Role-specific feedback gives the coordinator evidence for revision. The Synthetic Owner scores progress and recommends acceptance or rejection. Below the threshold, revision and review repeat. At the threshold, the Real Owner reviews the artifact and can approve it or request another revision. These are two distinct feedback loops; human approval is final.

**Tradeoff.** Synthetic scores require calibration and can disagree with the owner, while human review adds latency. Sanitized lessons update future briefs and judge definitions, without including private traces or automatically training model weights. Retrieval relevance and artifact quality remain separate measures.

<h2 id="reference">Reference</h2>

[Architecture decisions](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/f9cea261f0b33217028fe31e39ff88b5a10c3d4a/docs/Decisions.md) · [Artifact evaluation and revision](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/f9cea261f0b33217028fe31e39ff88b5a10c3d4a/docs/workflows/artifact-review/README.md)
