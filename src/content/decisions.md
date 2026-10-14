<h2 id="example">Assistant and conversation contract</h2>

One NIS assistant handles separate topic conversations. Research, knowledge questions, and interview analysis are tasks for that assistant, not separately selectable runtimes. The accepted default client path is `client → LiteLLM MCP Gateway → embedded FastMCP → NIS runtime`; direct clients use the same FastMCP server. The tool contract remains `ask_nis(question, thread_id=None)`, returning a plain answer and its conversation UUID, and the client continues a conversation with that returned UUID.

<h2 id="approach-and-tradeoffs">Execution and request bounds</h2>

NIS retains OSS Deep Agents/LangGraph, automatic model selection, and PostgreSQL checkpoints. Ollama Cloud and Fireworks.ai supply answer inference; optional local Ollama remains supported. Hermes is excluded from harness application inference.

The accepted request bounds are three retrieval calls including initial Grounding, four logical model calls, bounded provider retries, and one no-tool word-length repair within that model allowance. Source text remains reference material rather than executable instructions.

This is a private single-user system. One Coordination process owns execution and conversation lifecycle; there is no additional custom outer coordinator.

<h2 id="boundaries-and-recovery">Knowledge updates</h2>

Knowledge updates are explicitly operator-triggered and independent of conversations. Four temporary jobs perform conversion, deterministic preparation, embedding, and import. Shared BGE serves both query and document encoding. No per-source LLM summaries or meaning rewrites are generated.

Additions require assembly with the retained corpus before import, and a full rebuild requires the complete desired source set. The ordinary operator procedure starts with PostgreSQL and Qdrant backups plus a matching prepared-document copy, then prepares, imports, verifies, activates, and checks answers. A failed acceptance check leaves the update incomplete for investigation; no routine rollback branch is required. Prepared documents currently use the local retained-release deployment; a dedicated GCS bucket remains a future cutover.

<h2 id="reference">Reference</h2>

[Architecture Decisions](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/10bd370c711afabdfc7b23b516911c31ff58bcb4/Decisions.md)
