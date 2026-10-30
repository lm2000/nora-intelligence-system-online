<h2 id="prepare-for-the-actual-conversation" data-index-label="Purpose">Prepare for the next conversation, retain what you learn</h2>

A candidate has several opportunities, changing role descriptions and feedback scattered across messages and notes. The useful output is a stage brief: what this conversation tests, which experience supports the candidate’s position, what to practice and what remains unknown.

The example below follows a fictional platform-engineering opportunity. It illustrates a system design, not a claimed hiring outcome or a deployed integration.

<h2 id="preparation-inputs" data-index-label="Inputs and state">Keep sources, opportunity state and drafts separate</h2>

- **Knowledge:** Versioned role descriptions, company research, the experience bank and prior interview feedback. Retrieval brings relevant passages into a bounded model request; source links stay attached to the draft.
- **Opportunity record:** One stable ID with company, role, stage, contacts, next action and links to messages. Match source message IDs first; ask for review when company or role information conflicts rather than silently merging opportunities.
- **Artifact record:** The stage brief, source versions, rubric version, judge findings and owner decision. Preserve earlier drafts so a revision is inspectable.

The opportunity tracker owns business status. Conversation checkpoints support continuity; they do not replace the tracker or prove that an application was submitted.

<h2 id="workflow" data-index-label="Execution">One opportunity through the system</h2>

1. **Capture the change.** A new interview invitation updates the matched opportunity. Preserve the original message and flag uncertain stage or scheduling information.
2. **Assemble evidence.** The AI Coordinator retrieves the role requirements, relevant experience and unresolved feedback. Missing evidence becomes a question, not an invented project or qualification.
3. **Draft the brief.** Produce the stage goal, two relevant experience prompts, a technical exercise, interviewer questions and a next action. Tailored application material follows the same source-and-review pattern.
4. **Evaluate and revise.** Role judges return specific findings. The Synthetic Owner scores the frozen version; qualifying work goes to the candidate for final review.
5. **Use and debrief.** The candidate conducts the conversation. Record actual feedback separately from synthetic feedback and update the next brief or practice task.

<h2 id="career-automation" data-index-label="Integration and recovery">Automate the connections, keep actions explicit</h2>

Email and calendar adapters read invitations and commitments; a tracker stores opportunity state; the document store retains sources and artifacts. Tool results return to the coordinator before it proposes a state change. A source change invalidates dependent draft assumptions and sends the affected brief back through review.

**Failure handling:** retry reads safely; deduplicate repeated intake events by source ID. If a write times out, reconcile the destination before retrying. Record whether an action is proposed, approved, confirmed or unresolved. A drafted message is not a sent message, and an unconfirmed calendar write is not a scheduled interview.

**Trade-off:** separate records and versioning add bookkeeping, but make stale evidence, mistaken matches and interrupted actions recoverable. Use a small relevant evidence set rather than copying the entire history into every prompt.

<h2 id="example-preparation-pack" data-index-label="Worked example">A brief that improves after review</h2>

**Fictional task:** prepare for a system-design round about order-event processing.

> **First draft:** “Use an idempotent consumer and commit the offset after processing.”
>
> **Senior Engineer finding:** This names a pattern but leaves the failure behavior unexplained. What happens if the process stops after committing the result but before committing the offset?
>
> **Revised brief:** Persist the event’s idempotency key and result atomically in the same transaction, then commit the offset. If the event is replayed, the stored key prevents a second application of the change. External side effects require their own idempotency or outbox design.
>
> **Next drill:** Explain that sequence in two minutes, including the transaction boundary and what changes when the side effect is external.

The candidate must still choose an actual experience example and explain their own contribution. The fictional exercise supplies a practice problem, not personal achievement evidence.

<h2 id="career-evaluation" data-index-label="Evaluation">Evaluate the brief against the task</h2>

Use prepared role perspectives: **Hiring Manager** for role fit, **Senior Engineer** for technical reasoning and **Domain Expert** for source use. The Synthetic Owner applies the candidate’s preferences and aggregates findings. Shared model blind spots remain possible; disagreement should stay visible.

<table class="evaluation-table">
  <caption>Illustrative review of the brief above: 0 = missing or wrong, 1 = partial, 2 = adequate.</caption>
  <thead><tr><th scope="col">Criterion</th><th scope="col">Before</th><th scope="col">After</th></tr></thead>
  <tbody>
    <tr><th scope="row">Source support and explicit assumptions</th><td>2</td><td>2</td></tr>
    <tr><th scope="row">Fit to the interview stage</th><td>2</td><td>2</td></tr>
    <tr><th scope="row">Failure sequence and trade-offs</th><td>0</td><td>2</td></tr>
    <tr><th scope="row">Clear explanation and actionable practice</th><td>1</td><td>2</td></tr>
  </tbody>
</table>

**Pilot acceptance rule:** recommend owner review at 7/8 or higher, with no zero criterion and no unresolved blocker. Unsupported experience claims, a wrong technical explanation or missing mandatory stage requirements block acceptance regardless of total score. These example scores illustrate the rubric; they are not measured model results or calibrated hiring predictions.

**Bound the loop:** allow at most three automatic revisions. Stop after two consecutive revisions without score improvement, or sooner if a blocker requires information from the candidate. Escalate with the draft and unresolved findings; do not call it accepted. Owner-requested changes return through evaluation as a new version.

Compare initial and revised briefs on the same frozen tasks and source versions. Record required-point coverage, unsupported claims, remaining technical errors, owner correction time and revision count. Reserve unseen opportunities for a held-out check; an offer or rejection alone is not an evaluation of the preparation system.

<h2 id="continuous-learning" data-index-label="Learning">Carry a demonstrated improvement forward</h2>

Turn a recurring weakness into a concrete exercise, retain the attempt and feedback, then retry against the same criteria. For the example, build a small replay lab and keep the failure timeline with the next brief. Closing an opportunity should not discard its reusable practice artifacts. Lessons update briefs, role definitions and retrieval material; they do not automatically train model weights.

<h2 id="stage-formats" data-index-label="Other stages">Apply the same design across the career cycle</h2>

<details class="case-extension">
  <summary>Applications, outreach and other interview formats</summary>
  <p><strong>Applications:</strong> map role requirements to the experience bank, review the resume and cover letter, then retain the approved and submitted versions separately.</p>
  <p><strong>Outreach:</strong> prepare a relevant message and next action from the opportunity history; the candidate approves the recipient and content before sending.</p>
  <p><strong>Recruiter conversations:</strong> a short introduction, reasons for the role and questions about expectations. <strong>Coding:</strong> a worked exercise with tests. <strong>Leadership:</strong> actual situations, decisions, contribution and outcomes, in the candidate’s own voice.</p>
  <p><strong>Decisions and learning:</strong> compare opportunities with the candidate’s goals, retain unanswered questions, and turn repeated gaps into study and practice.</p>
</details>

<h2 id="candidate-ownership" data-index-label="Human review">The candidate owns the decision</h2>

The candidate approves the brief, corrects its emphasis and decides how to use it. Approval of a document does not authorize an application, message or calendar action. The general [judge registry and two review loops](../../workflows/#judge-registry) define the shared mechanism; this page owns the career-specific rubric.

<h2 id="connection-to-the-lab" data-index-label="Related work">Related work</h2>

See [client research and reviewed pitches](../client-research/) for the same architecture applied to an account brief, the [Harness architecture](../../architecture/) for component responsibilities, and [Validation](../../validation/) for the project’s actual evidence.
