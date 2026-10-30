The latest published-source checks and earlier runtime experiments are separate evidence. Each record links its source snapshot; a passing source suite does not establish a live deployment or general answer reliability.

<h2 id="validation-evidence" data-index-label="Evidence">Recorded validation evidence</h2>

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
    <tr id="local-source-checks">
      <th scope="row">Published source checks</th>
      <td><span class="evidence-label">Scope</span>The public snapshot checked locally and independently in GitHub Actions. Ingestion regression checks cover filename collisions, failed conversions, extraction completeness and the host tokenizer handoff.</td>
      <td><span class="evidence-label">Result</span>332 Python tests passed, 8 skipped, and 11 subtests passed. Five UI server-boundary tests, TypeScript, the production UI build, lint/format and shell checks passed. Documentation checks covered 53 documents, 572 links and 16 diagram pairs; the 203-file release check and Python package build also passed.</td>
      <td><span class="evidence-label">Limits and source</span>Three dependency deprecation warnings remain. The host ingestion check uses a tokenizer double, simulated HTTP embedding responses and an in-memory index. It does not establish live ingestion or answer quality. <a href="https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/actions/runs/41003452322">Public snapshot CI results</a> · <a href="https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/7ea9e4915f4e1ad446aeaf077ccbbbfc1aa2d053/docs/evaluation/VALIDATION.md">Ingestion repair and source-tree evidence</a></td>
    </tr>
    <tr id="isolated-container-checks">
      <th scope="row">Isolated container checks</th>
      <td><span class="evidence-label">Scope</span>Shared source in an isolated ARM Linux Compose project under Colima; synthetic fixtures; Python 3.12, Node.js 22.22, pinned PostgreSQL/Qdrant images, and Ollama Cloud <code>gpt-oss:20b</code>.</td>
      <td><span class="evidence-label">Result</span>Preparation, server import, and correct Atlas release answers passed. PostgreSQL and Coordination restart preserved existing message IDs; a custom-format dump restored the same four messages.</td>
      <td><span class="evidence-label">Limits and source</span>Checkpoint persistence does not establish clean-target restoration, crash behavior, or exactly-once effects. <a href="https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/10bd370c711afabdfc7b23b516911c31ff58bcb4/evaluation/VALIDATION.md">Pinned validation source</a></td>
    </tr>
    <tr id="synthetic-retrieval-checks">
      <th scope="row">Contract and retrieval fixture checks</th>
      <td><span class="evidence-label">Scope</span>Python contract suite, deterministic model double, in-memory checkpointer, real MCP server, and a separate real-BGE smoke test over three fictional documents.</td>
      <td><span class="evidence-label">Result</span>Preparation, exclusions, hashes, GCS reads through a double, imports, Qdrant round trips, request accounting, routing failures, MCP boundaries, and invalid requests were covered. Hit@1, Hit@5, and MRR@5 were 1.0 for three labeled questions.</td>
      <td><span class="evidence-label">Limits and source</span>These checks use synthetic documents and model doubles; the metrics are not a production reliability score. <a href="https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/10bd370c711afabdfc7b23b516911c31ff58bcb4/evaluation/VALIDATION.md">Pinned validation source</a></td>
    </tr>
    <tr id="bounded-real-model-follow-up">
      <th scope="row">Earlier bounded real-model follow-up</th>
      <td><span class="evidence-label">Scope</span>Isolated Ollama Cloud <code>gpt-oss:20b</code> check, followed by a private <code>glm-5.3-flash</code> route check.</td>
      <td><span class="evidence-label">Result</span>Two fresh preparation questions and one follow-up passed in isolation; two fresh gateway questions and one follow-up passed after the private correction deployment.</td>
      <td><span class="evidence-label">Limits and source</span>This bounded sample does not establish general reliability. Representative answer quality, correction behavior, other hosts, resource and failure limits, and additional client identities remain unverified by this sample. <a href="https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/7ea9e4915f4e1ad446aeaf077ccbbbfc1aa2d053/docs/setup/private-deployment/STATUS.md">Recorded deployment evidence</a> · <a href="#boundaries-and-recovery">Known limits</a>.</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="boundaries-and-recovery" data-index-label="Limits">Known limits and bounded follow-up</h2>

The source checks do not establish representative retrieval or answer quality, calibrated judge scores, live Harbor Hub or Hugging Face review, full clean-target recovery, or acceptance on other hosts. Enterprise shared memory, Kubernetes/SSO, commercial scale, and measured customer AI latency are outside this evidence. The earlier container and model checks retain their own narrower scope; consult the [deployment record](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/7ea9e4915f4e1ad446aeaf077ccbbbfc1aa2d053/docs/setup/private-deployment/STATUS.md) for recorded installation outcomes.

Earlier preparation-answer experiments exposed missing facts, failed repairs and HTTP 503 responses even when local fixture checks passed. The [historical investigation](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/7ea9e4915f4e1ad446aeaf077ccbbbfc1aa2d053/docs/evaluation/VALIDATION.md) retains those failures alongside later bounded checks; they do not estimate production accuracy.

The [successful GitHub Actions run](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/actions/runs/41003452322) checks public commit `7ea9e49`. Its 332-test count describes the public snapshot; the linked maintainer record separately reports 333 tests in the private source checkout. Neither result extends the runtime or answer-quality evidence above.

<h2 id="reference">Reference</h2>

[Current source and container validation](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/7ea9e4915f4e1ad446aeaf077ccbbbfc1aa2d053/docs/evaluation/VALIDATION.md) · [Reproduce the source checks](../reproduce/)
