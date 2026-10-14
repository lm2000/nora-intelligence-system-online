<h2 id="prepare-for-the-actual-conversation" data-index-label="Purpose">Prepare for the actual conversation</h2>

For candidates preparing a technical or leadership interview, the starting point is the next conversation: its format, expectations, and the experience worth discussing. This preparation method uses an illustrative example from Nora SuperIntelligence Lab’s interview-preparation material.

<h2 id="workflow" data-index-label="Workflow">Workflow</h2>

1. **Frame the stage.** Capture the role, interview format, questions to resolve, and missing context.
2. **Build the brief.** Connect requirements to actual experience, relevant research, and a small set of practice questions.
3. **Rehearse.** Practice the expected format and identify where an answer needs clearer reasoning or a better example.
4. **Debrief.** Update the brief with feedback and one concrete preparation action for the next conversation.

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

<h2 id="candidate-ownership" data-index-label="Human review">Candidate review</h2>

The candidate checks the experience story, decides what to emphasize, and answers in their own voice. Research supports preparation; only their actual work supports personal achievement claims.

<h2 id="connection-to-the-lab" data-index-label="Related work">Related work</h2>

Explore the [knowledge-assistant architecture](../../architecture/) or its [technical validation](../../validation/).
