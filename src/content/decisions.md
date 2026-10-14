<h2 id="example" data-index-label="Conversation">Assistant and conversation contract</h2>

**Choice.** One NIS assistant handles separate topic conversations through `ask_nis(question, thread_id=None)`. The response contains a plain answer and its conversation UUID; follow-ups reuse that UUID. Research, knowledge questions, and interview analysis are tasks for the same assistant.

**Why.** A shared operation keeps conversation handling consistent across clients. [Architecture](../architecture/#system-map) shows the default MCP gateway entrance, direct FastMCP access, and the Browser UI path.

**Tradeoff.** This is a private single-user system. Topic separation is not a multi-user collaboration or shared enterprise-memory model.

<h2 id="approach-and-tradeoffs" data-index-label="Request bounds">Execution and request bounds</h2>

**Choice.** OSS Deep Agents/LangGraph, the incumbent model selector, and PostgreSQL checkpoints remain inside one Coordination process. Ollama Cloud and Fireworks.ai supply inference; optional local Ollama is supported. Hermes is excluded from harness application inference.

A turn allows three retrieval calls including initial Grounding, four logical model calls, bounded provider retries, and one no-tool word-length repair within that model allowance. Source text is reference material rather than executable instructions.

**Why.** Explicit call limits bound tool and model work. One owner for execution and conversation lifecycle avoids an additional custom outer coordinator.

**Tradeoff.** A finite allowance constrains how much retrieval and correction can happen in a turn. These bounds do not establish answer quality; [Validation](../validation/) records the checks and remaining limits.

<h2 id="boundaries-and-recovery" data-index-label="Knowledge updates">Knowledge updates</h2>

**Choice.** Conversion, deterministic preparation, embedding, and import are four operator-triggered jobs outside conversations. Shared BGE encodes queries and documents. Preparation preserves meaning; it does not generate per-source LLM summaries or rewrites.

**Why.** Keeping preparation separate makes the document set and its source identity explicit. Additions assemble new material with the retained corpus; rebuilds use the complete desired source set.

**Tradeoff.** Updates need an operator and a complete release. The ordinary procedure is backup-first, then prepare, import, verify, activate, and check answers. Failed acceptance leaves the update incomplete for investigation; no routine rollback branch is required. Prepared documents currently use the local retained-release deployment, with a dedicated GCS bucket as a future cutover.

See the [ingestion walkthrough](../walkthroughs/?flow=ingestion&step=backup) for the sequence and [Reproduce](../reproduce/) for source checks.

<h2 id="reference">Reference</h2>

[Architecture Decisions](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/10bd370c711afabdfc7b23b516911c31ff58bcb4/Decisions.md)
