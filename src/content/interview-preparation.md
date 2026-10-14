<h2 id="prepare-for-the-actual-conversation" data-index-label="Purpose">Prepare for the actual conversation</h2>

For candidates preparing a technical or leadership interview, the starting point is the next conversation: its format, expectations, and the experience worth discussing. The method connects opportunity research, an evidence bank, stage preparation, rehearsal, and feedback in one evolving preparation record.

<h2 id="preparation-inputs" data-index-label="Inputs">One opportunity, connected context</h2>

Keep the context small enough to use before a conversation, with links to the deeper material:

- **Opportunity:** Role description, company context, interview stage, people involved, and questions still unanswered.
- **Experience:** Relevant projects, the candidate’s own contribution, supporting evidence, and the limits of each example.
- **Previous conversations:** What was discussed, what the interviewer emphasized, and commitments or follow-up questions.
- **Practice record:** The latest rehearsal, feedback, and one improvement to carry into the next attempt.

<h2 id="workflow" data-index-label="Workflow">Workflow</h2>

1. **Frame the stage.** Capture the role, interview format, questions to resolve, and missing context. A recruiter conversation, a coding exercise, and a leadership round need different preparation.
2. **Build the brief.** Connect requirements to actual experience, relevant research, and a small set of practice questions. Keep a concise stage brief, an experience bank, and a rehearsal plan together.
3. **Rehearse.** Practice the expected format and identify where an answer needs clearer reasoning or a better example.
4. **Debrief.** Record the questions asked, useful feedback, gaps, and follow-ups. Update the next brief and retain the useful learning across opportunities.

<h2 id="stage-formats" data-index-label="Stage formats">Prepare for the format</h2>

<dl class="shortlist-example">
  <dt>Recruiter or hiring-manager conversation</dt>
  <dd>Prepare a short introduction, a clear reason for the role, two relevant examples, and questions about expectations. The output is a conversation brief.</dd>
  <dt>Coding or system design</dt>
  <dd>Practice requirements, reasoning, implementation or architecture, tests, failures, and tradeoffs. The output is a worked exercise plus a targeted drill for the weakest explanation.</dd>
  <dt>Behavioral or leadership round</dt>
  <dd>Choose a small set of actual situations covering decisions, conflict, delivery, and learning. The output is an evidence-backed story bank with prompts rather than a memorized script.</dd>
</dl>

<h2 id="example-preparation-pack" data-index-label="Example">Example preparation pack</h2>

**Illustrative stage brief: a platform-engineering system-design round.** The role and scenario are fictional.

> **Stage goal:** Design an order-event processing service and explain its tradeoffs.
>
> **Experience prompt:** Choose a real example of diagnosing or recovering a distributed service. Identify your contribution and the evidence you can discuss.
>
> **Design outline:** Producer → durable event log → idempotent consumer → state store. State the ordering and delivery assumptions.
>
> **Practice questions:** What happens after processing an event but before committing its offset? How would you detect backpressure and recover from duplicate delivery?
>
> **Rehearsal plan:** Spend five minutes framing requirements, ten on the design, and ten on failures and tradeoffs.
>
> **Questions for the interviewer:** Which consistency guarantees matter? Who operates the service? What volume and latency assumptions should guide the design?
>
> **Debrief prompt:** Record the weakest explanation, the feedback received, and the next practice task.

### Carry feedback into the next brief

A fictional rehearsal exposes one gap in the same system-design example:

> **Before:** The brief names an idempotent consumer but does not explain the failure sequence.
>
> **Feedback:** What happens if processing succeeds and the service stops before committing its offset?
>
> **Next brief:** Add a timeline: process the event, persist the result, then commit the offset. Explain how replay is handled and where an idempotency key is checked.
>
> **Next practice task:** Rehearse the failure and recovery in two minutes, stating the assumptions that make the design safe.

The feedback becomes a specific revision and practice task, rather than another disconnected note.

<h2 id="candidate-ownership" data-index-label="Human review">Candidate review</h2>

The candidate checks the experience story, decides what to emphasize, and answers in their own voice. Research supports preparation; only their actual work supports personal achievement claims. The preparation system organizes context and suggests drills. The candidate chooses the story, revises the brief, and leads every employer conversation.

<h2 id="connection-to-the-lab" data-index-label="Related work">Related work</h2>

For the same brief-to-feedback pattern in a business setting, see [client research and agency workflow](../client-research/). Explore the [knowledge-assistant architecture](../../architecture/) or its [technical validation](../../validation/).
