<h2 id="example">Isolated container checks</h2>

The September 14, 2026 checks exercise the shared source locally and in an isolated ARM Linux Compose project. Synthetic fixtures contain no private corpus material. An isolated container trial built both application images and started five default services on Linux aarch64 under Colima. Containers used Python 3.12, Node.js 22.22, the pinned PostgreSQL/Qdrant images, and Ollama Cloud `gpt-oss:20b`. The trial verified preparation, server import, and correct Atlas release answers. PostgreSQL and Coordination restart preserved all existing message IDs exactly. A custom-format dump restored into a separate PostgreSQL instance matched the same four messages exactly.

Checkpoint persistence does not by itself demonstrate clean-target restoration, crash behavior, or exactly-once effects.

<h2 id="approach-and-tradeoffs">Synthetic test coverage</h2>

Python contract tests cover deterministic preparation, exclusions, document hashes, generation-pinned GCS reads through a double, incompatible imports, Qdrant round trips, atomic request accounting, and routing failures. The real Deep Agents/LangGraph and AG-UI adapters run with a deterministic model double and an in-memory checkpointer. The real MCP server handles initialization, tool discovery, search/read, authentication, and invalid requests. The separate real-BGE smoke test downloads the pinned public model, encodes three fictional documents, and imports an embedded Qdrant index. Hit@1, Hit@5, and MRR@5 are 1.0 for three labeled questions. The UI has server-boundary tests, a TypeScript check, and a production build without a credential file.

These checks use synthetic documents and model doubles.

<h2 id="boundaries-and-recovery">Known limits and bounded follow-up</h2>

Representative answer quality, correction behavior, other CPU/host targets, resource and failure limits, real GCS access, optional Docling conversion, and additional client identities remain unverified. The latest local repair and heading-whitespace correction passed two fresh preparation questions and one follow-up in an isolated Ollama Cloud `gpt-oss:20b` check on 2026-10-13. The correction was subsequently deployed on the private `glm-5.3-flash` route; two fresh gateway questions and a follow-up passed. This bounded result does not establish general reliability. Enterprise shared memory, Kubernetes/SSO, commercial scale, and measured customer AI latency are unimplemented and unverified. Tailscale private communication is selected but not established by this pass.

<h2 id="reference">Reference</h2>

[Source and Container Validation](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/10bd370c711afabdfc7b23b516911c31ff58bcb4/evaluation/VALIDATION.md)
