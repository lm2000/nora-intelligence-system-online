<h2 id="validation-evidence">Recorded validation evidence</h2>

The table keeps the environment, observed result, and qualification together.

<div class="validation-table-wrap" role="region" aria-labelledby="validation-evidence-caption" tabindex="0">
<table class="validation-table">
  <caption id="validation-evidence-caption">Recorded checks and their limits</caption>
  <thead>
    <tr>
      <th scope="col">Check</th>
      <th scope="col">Environment and scope</th>
      <th scope="col">Observed result</th>
      <th scope="col">Limits and source</th>
    </tr>
  </thead>
  <tbody>
    <tr id="isolated-container-checks">
      <th scope="row">Isolated container checks</th>
      <td>Shared source in an isolated ARM Linux Compose project under Colima; synthetic fixtures; Python 3.12, Node.js 22.22, pinned PostgreSQL/Qdrant images, and Ollama Cloud <code>gpt-oss:20b</code>.</td>
      <td>Preparation, server import, and correct Atlas release answers passed. PostgreSQL and Coordination restart preserved existing message IDs; a custom-format dump restored the same four messages.</td>
      <td>Checkpoint persistence does not establish clean-target restoration, crash behavior, or exactly-once effects. <a href="https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/10bd370c711afabdfc7b23b516911c31ff58bcb4/evaluation/VALIDATION.md">Pinned validation source</a></td>
    </tr>
    <tr id="synthetic-retrieval-checks">
      <th scope="row">Contract and retrieval fixture checks</th>
      <td>Python contract suite, deterministic model double, in-memory checkpointer, real MCP server, and a separate real-BGE smoke test over three fictional documents.</td>
      <td>Preparation, exclusions, hashes, GCS reads through a double, imports, Qdrant round trips, request accounting, routing failures, MCP boundaries, and invalid requests were covered. Hit@1, Hit@5, and MRR@5 were 1.0 for three labeled questions.</td>
      <td>These checks use synthetic documents and model doubles; the metrics are not a production reliability score. <a href="https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/10bd370c711afabdfc7b23b516911c31ff58bcb4/evaluation/VALIDATION.md">Pinned validation source</a></td>
    </tr>
    <tr id="bounded-real-model-follow-up">
      <th scope="row">Bounded real-model follow-up</th>
      <td>Isolated Ollama Cloud <code>gpt-oss:20b</code> check, followed by a private <code>glm-5.3-flash</code> route check.</td>
      <td>Two fresh preparation questions and one follow-up passed in isolation; two fresh gateway questions and one follow-up passed after the private correction deployment.</td>
      <td>This bounded sample does not establish general reliability. Representative answer quality, correction behavior, other hosts, resource and failure limits, and additional client identities remain unverified. See <a href="#boundaries-and-recovery">known limits below</a>.</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="boundaries-and-recovery">Known limits and bounded follow-up</h2>

Representative answer quality, correction behavior, other CPU/host targets, resource and failure limits, real GCS access, optional Docling conversion, and additional client identities remain unverified. The latest local repair and heading-whitespace correction passed two fresh preparation questions and one follow-up in an isolated Ollama Cloud `gpt-oss:20b` check. The correction was subsequently deployed on the private `glm-5.3-flash` route; two fresh gateway questions and a follow-up passed. This bounded result does not establish general reliability. Enterprise shared memory, Kubernetes/SSO, commercial scale, and measured customer AI latency are unimplemented and unverified. Tailscale private communication is selected but not established by this pass.

<h2 id="reference">Reference</h2>

[Source and Container Validation](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/10bd370c711afabdfc7b23b516911c31ff58bcb4/evaluation/VALIDATION.md)
