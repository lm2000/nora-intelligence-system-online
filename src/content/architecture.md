## Purpose

The knowledge assistant (NIS) presented by Nora SuperIntelligence Lab separates conversation handling from knowledge retrieval and document preparation. A user asks one question through a single assistant; a shared retrieval service finds prepared passages; an agent produces a plain answer and retains the conversation state in PostgreSQL.

## Example

If a user asks, "Prepare a brief for the Atlas project handover," the assistant establishes the context, retrieves relevant decisions and notes, and explains supported points and gaps. Exported documents are dated snapshots, so a saved calendar item alone cannot establish a current meeting. The assistant answers using the accepted one-assistant request path. Browser AG-UI and the embedded FastMCP tool reach the same Coordination operation. LiteLLM supplies the shared MCP gateway, while direct FastMCP remains available. Model selection, OSS Deep Agents/LangGraph, and PostgreSQL checkpoints stay inside NIS.

## Approach and Tradeoffs

UI, Coordination, gateway, Retrieval, shared BGE, Qdrant, and PostgreSQL have separate service boundaries. Conversion, preparation, embedding, and import are temporary operator-triggered jobs that do not run inside conversations. Deep Agents is the harness, LangChain supplies model/tool abstractions, and LangGraph supplies execution and state machinery. These libraries run together inside Coordination, which does not wrap the Deep Agent in a second custom agent loop. The gateway adds a process and network hop, so no measured cost or latency saving is claimed.

## Boundaries and Recovery

The implementation uses the official LangGraph PostgreSQL checkpointer and stable thread identifiers. Browser history and checkpoints are different stores. Checkpoint persistence does not by itself demonstrate clean-target restoration, crash behavior, or exactly-once effects. Knowledge updates require assembly with the retained corpus before import. A failed acceptance check leaves the update incomplete for investigation. The ordinary operator procedure starts with backups, then prepares, imports, verifies, activates, and checks answers.

## Reference

[Architecture Concept](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/10bd370c711afabdfc7b23b516911c31ff58bcb4/architecture/Architecture%20Concept.md)