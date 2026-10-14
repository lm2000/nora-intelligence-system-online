## Purpose

This page owns the current accepted design for the knowledge assistant presented by Nora SuperIntelligence Lab. Dated deployment evidence lives in validation records; superseded choices remain in Git history.

## Example

A client asks about the Atlas release and continues with the returned conversation UUID. One NIS assistant handles separate topic conversations. Research, knowledge questions, and interview analysis are tasks for that assistant, not separately selectable runtimes. The default client path is `client → LiteLLM MCP Gateway → embedded FastMCP → NIS runtime`. Direct clients use the same FastMCP server. The tool contract remains `ask_nis(question, thread_id=None)`, returning a plain answer and its UUID.

## Approach and Tradeoffs

NIS retains OSS Deep Agents/LangGraph, automatic model selection, and PostgreSQL checkpoints. Ollama Cloud and Fireworks.ai supply answer inference; optional local Ollama remains supported. Hermes is excluded from harness application inference. The accepted request bounds are three retrieval calls including initial Grounding, four logical model calls, bounded provider retries, and one no-tool word-length repair within that model allowance. Source text remains reference material rather than executable instructions. Knowledge updates are explicitly operator-triggered and independent of conversations. Four temporary jobs perform conversion, deterministic preparation, embedding, and import. Shared BGE serves both query and document encoding. No per-source LLM summaries or meaning rewrites are generated.

## Boundaries and Recovery

This is a private single-user system. One Coordination process owns execution and conversation lifecycle; there is no additional custom outer coordinator. Additions require assembly with the retained corpus before import. A full rebuild requires the complete desired source set. The ordinary operator procedure starts with PostgreSQL and Qdrant backups plus a matching prepared-document copy, then prepares, imports, verifies, activates, and checks answers. A failed acceptance check leaves the update incomplete for investigation. No routine rollback branch is required. Prepared documents currently use the local retained-release deployment; a dedicated GCS bucket remains a future cutover.

## Reference

[Architecture Decisions](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/10bd370c711afabdfc7b23b516911c31ff58bcb4/Decisions.md)