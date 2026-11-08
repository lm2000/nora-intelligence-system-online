---
title: Why I built the Nora Harness
opening: >-
  When I return to a project after a few weeks, I want to know what I decided, what evidence I used, and what still needs work. I also want to choose which models handle the work, control what data they receive, and see whether a revision addresses the feedback. I found tools that solved parts of that problem. I built Nora to bring those pieces together in a system I could operate and improve myself.
---

<section class="section workflow-section" id="private-knowledge-backbone" aria-labelledby="knowledge-heading">
<div class="shell">
<div class="section-heading section-heading--split">
<div>
<p class="section-label">Knowledge</p>
<h2 id="knowledge-heading">Private Knowledge Backbone</h2>
</div>
<p>I wanted my notes, research, and project decisions to be useful across conversations.</p>
</div>
<div class="motivation-prose">

Nora prepares documents separately, uses BGE to embed excerpts, and indexes those embeddings in Qdrant. When I ask a question, retrieval supplies relevant passages from the prepared text. I decide which sources to make available, and the corpus can grow independently of the model’s context window. [See how retrieval uses the corpus](../architecture/#knowledge-backbone).

</div>
</div>
</section>

<section class="section workflow-section" id="conversation-continuity" aria-labelledby="continuity-heading">
<div class="shell">
<div class="section-heading section-heading--split">
<div>
<p class="section-label">Conversations</p>
<h2 id="continuity-heading">Conversation continuity</h2>
</div>
<p>When I come back to a project, I need the original evidence and the thread where I worked through it.</p>
</div>
<div class="motivation-prose">

The Knowledge Backbone holds the source material. PostgreSQL checkpoints let me pick up the conversation. Versioned corpus releases let me update the knowledge independently of the conversation history.

</div>
</div>
</section>

<section class="section workflow-section" id="workflow-composition" aria-labelledby="composition-heading">
<div class="shell">
<div class="section-heading section-heading--split">
<div>
<p class="section-label">Composition</p>
<h2 id="composition-heading">Workflow composition</h2>
</div>
<p>I wanted to break complex work into steps with clear jobs and handoffs.</p>
</div>
<div class="motivation-prose">

One step can extract facts with their sources, another can draft a brief, and a third can review its claims. Each needs a clear input and handoff.

Composition defines the steps; model routing chooses which model handles each one. The broader design would let these steps use different models through backends such as Fireworks AI or Ollama. The implemented path is bounded question answering; this briefing workflow remains proposed.

</div>
</div>
</section>

<section class="section workflow-section" id="model-routing-for-quality-cost-and-latency" aria-labelledby="routing-heading">
<div class="shell">
<div class="section-heading section-heading--split">
<div>
<p class="section-label">Routing</p>
<h2 id="routing-heading">Model routing for quality, cost, and latency</h2>
</div>
<p>I want to compare models on the same tasks and learn where a quality gain is worth the extra cost or time.</p>
</div>
<div class="motivation-prose">

One model might extract a migration date reliably; another might catch a brief calling the migration complete when the notes only say it is scheduled. Comparing them on the same tasks, sources, and scoring criteria would help me decide where each belongs.

The current question-answering path uses a **request-level heuristic selector**. Rules infer capability and minimum quality requirements, then rank candidates using configured quality, cost, and latency assumptions. If none meets those requirements, it can rank the remaining viable candidates instead. Measured performance guiding model selection for individual steps is part of the broader design.

[RouteLLM](https://arxiv.org/abs/2406.18665) explores using preference data to guide quality and cost tradeoffs. It informs this direction as a research reference; it is not installed in Nora.

</div>

<figure class="briefing-diagram" id="design-diagrams" aria-labelledby="briefing-diagram-caption">
  <figcaption id="briefing-diagram-caption">Proposed design. Define the briefing steps, then compare models on the same review task to inform later choices.</figcaption>
  <div class="briefing-canvas">
    <div class="briefing-flow">
      <div class="briefing-lane-label">Compose the workflow</div>
      <strong id="briefing-composition">From project notes to a reviewed brief</strong>
      <ol role="list" aria-labelledby="briefing-composition">
        <li><b>Extract facts</b><span>Project notes → facts with sources</span><svg class="briefing-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h17m-6-6 6 6-6 6" /></svg></li>
        <li><b>Draft the brief</b><span>Facts with sources → draft</span><svg class="briefing-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h17m-6-6 6 6-6 6" /></svg></li>
        <li><b>Review claims</b><span>Draft and evidence → findings</span></li>
      </ol>
    </div>
    <div class="briefing-feedback" aria-labelledby="briefing-comparison">
      <div class="briefing-feedback-bridge">Review findings inform the next comparison</div>
      <div class="briefing-lane-label">Improve the review step</div>
      <strong id="briefing-comparison">Compare models on the same evidence</strong>
      <p>Recurring unsupported claims become test cases. Hold the drafts, sources and rubric fixed.</p>
      <dl class="briefing-criteria"><div><dt>Quality</dt><dd>Catch unsupported claims without flagging supported ones</dd></div><div><dt>Cost</dt><dd>Compare inference cost for the same review task</dd></div><div><dt>Latency</dt><dd>Measure the time needed to return useful findings</dd></div></dl>
      <p class="briefing-return"><strong>For later briefs:</strong> use the results to choose the model for <b>Review claims</b>, then check whether it improves the next review.</p>
    </div>
  </div>
</figure>

</div>
</section>

<section class="section workflow-section" id="one-coordination-layer" aria-labelledby="coordination-heading">
<div class="shell">
<div class="section-heading section-heading--split">
<div>
<p class="section-label">Coordination</p>
<h2 id="coordination-heading">One Coordination Layer</h2>
</div>
<p>I wanted the same behavior whether I ask from a browser or an MCP client.</p>
</div>
<div class="motivation-prose">

Browser and MCP clients reach the same question-answering graph. It retrieves evidence, selects inference, applies bounded output checks, and saves conversation state. The checks cover empty or truncated output and requested word limits. These checks do not establish factual correctness.

The broader design extends the AI Coordinator to delegate jobs to specialists and combine their results. [Follow the implemented question-answering path](../architecture/#request-path).

</div>
</div>
</section>

<section class="section workflow-section" id="evaluation-and-revision" aria-labelledby="evaluation-heading">
<div class="shell">
<div class="section-heading section-heading--split">
<div>
<p class="section-label">Evaluation</p>
<h2 id="evaluation-heading">Evaluation and revision</h2>
</div>
<p>I wanted review findings to carry into the next draft, with the brief, sources, and revision decisions available for inspection.</p>
</div>
<div class="motivation-prose">

The broader design gives Harbor Hub evaluation tasks and Hugging Face judge models separate routes. Review findings would inform the next draft; the Synthetic Owner would recommend acceptance or revision, and I would make the final decision. [Explore the artifact-review design](../workflows/#artifact-review).

The [MT-Bench and Chatbot Arena paper](https://arxiv.org/abs/2306.05685) informs how I would account for judge biases and check findings against the evidence and rubric.

</div>
</div>
</section>

<section class="section workflow-section" id="learning-from-failures" aria-labelledby="learning-heading">
<div class="shell">
<div class="section-heading section-heading--split">
<div>
<p class="section-label">Learning</p>
<h2 id="learning-heading">Learning loops across the harness</h2>
</div>
<p>I want feedback to improve the system as well as the draft, with evidence that each change helped.</p>
</div>
<div class="motivation-prose">

- **Knowledge and retrieval.** A missed source can lead me to update the corpus, document preparation, or retrieval, then check the same question again.
- **Model selection.** I would compare models on the same drafts to see which catches unsupported claims without flagging supported ones, then weigh quality, cost, and latency before changing a routing rule.
- **Workflows and regression cases.** A recurring failure can lead to a clearer prompt or handoff and become a regression case.
- **Evaluation and revision.** A disagreement with a judge can expose a vague criterion and lead to a better rubric. Accepted findings would carry into the next draft.

I would make these changes explicitly, version the component being changed, and hold the other relevant inputs fixed to test whether the change helped. These loops do not automatically retrain model weights.

<nav class="motivation-next" aria-label="Continue exploring Nora">
  <a class="motivation-next-primary" href="../architecture/">Explore the architecture <span aria-hidden="true">→</span></a>
  <div class="motivation-next-secondary">
    <a href="../reproduce/#atlas-replay">Reproduce the offline Atlas example</a>
    <a href="../case-study/">Read the historical build story</a>
  </div>
</nav>

</div>
</div>
</section>
