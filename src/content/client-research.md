<h2 id="start-with-a-reason-to-engage" data-index-label="Purpose">Choose the conversation before drafting the pitch</h2>

An agency needs to decide which accounts deserve attention and what would make a first conversation useful. The output is a reviewed account package: a selection decision, sourced brief, value hypothesis, draft message and next action.

This illustrative design starts with ten candidates and selects three for deeper research. The account examples and review scores are fictional; they do not represent a client engagement or measured buyer demand.

<h2 id="pilot-inputs" data-index-label="Inputs">Define the account and the evidence</h2>

Start with the agency’s target market, service strengths, capacity and approved examples of its work. Add public company observations, buyer context and permitted CRM history. Store each observation with its source, retrieval time and the claim it supports. A news item can support an expansion claim; it cannot establish buying intent.

Match an account using its stable CRM ID or verified company domain. Keep uncertain matches separate for review. Persist the account ID, source versions, shortlist decision, artifact versions, judge findings and approved next action.

<h2 id="workflow" data-index-label="Execution">From ten accounts to three reviewed packages</h2>

1. **Frame the search.** The strategist sets criteria and exclusions. The AI Coordinator assembles candidate accounts and delegates bounded research.
2. **Choose where to focus.** Retrieve observations and compare account fit. Return a reasoned recommendation; the strategist selects three accounts or changes the criteria.
3. **Draft from evidence.** Prepare buyer questions, a value hypothesis and a proposed first step. Attach source references and label unresolved assumptions.
4. **Evaluate and revise.** Role judges challenge the package. The Synthetic Owner scores it; qualifying work goes to the strategist for approval or requested changes.
5. **Learn from the conversation.** After separately approved outreach, record actual feedback and objections. Use them to revise the account brief and future selection criteria.

<h2 id="selection-scorecard" data-index-label="Selection">Select accounts before scoring the pitch</h2>

Account selection and artifact quality answer different questions. Select **research further**, **hold** or **pass** using account fit, reason to act, buyer context, relevant agency proof and unresolved questions. A polished pitch cannot rescue an account with no credible fit.

<dl class="shortlist-example">
  <dt>Retailer A · Research further</dt><dd>Storefront expansion suggests a measurement conversation. Verify the signal and identify who owns acquisition and repeat-purchase reporting.</dd>
  <dt>Manufacturer B · Hold</dt><dd>A new sales region is relevant, but the need for marketing support is unknown. Resolve that question before drafting a pitch.</dd>
  <dt>Software company C · Pass</dt><dd>A product announcement alone does not connect the account to the agency’s service strengths. Leave it out of this round.</dd>
</dl>

<h2 id="example-account-brief" data-index-label="Worked example">Replace a broad promise with a testable first step</h2>

**Synthetic scenario:** Retailer A is expanding its online storefront. The observation is invented for this example; a real brief would link it to a source.

> **First draft:** “We can improve your growth by optimizing acquisition.”
>
> **Finance-perspective finding:** The draft promises an outcome without showing how campaign effects would be separated from customer-mix changes.
>
> **Revised pitch:** “How are you connecting acquisition spend with repeat purchases? We could start by mapping the measurement approach and identifying one gap to investigate.”
>
> **Brief update:** Record repeat-purchase measurement as a hypothesis, leave the reporting stack unknown, and add a discovery question about data ownership.

<h2 id="pitch-package" data-index-label="Deliverable">Keep the reasoning with the message</h2>

The package contains the selection reason, sourced account brief, likely buyer roles, approved agency proof, value hypothesis, message draft and discovery questions. Freeze these with the source and rubric versions before evaluation. Keep approval attached to that exact version; subsequent edits require review again.

<h2 id="agency-testing-and-learning" data-index-label="Evaluation">Challenge the package before the strategist sees it</h2>

A **Domain Expert** checks evidence and fit. Synthetic marketing, finance and operations perspectives challenge relevance, economic assumptions and feasibility. Each finding names the passage, criterion and proposed correction. These are prepared reviewer roles, not customer interviews. The Synthetic Owner aggregates the findings without hiding disagreements.

<table class="evaluation-table">
  <caption>Illustrative review of the pitch above: 0 = missing or wrong, 1 = partial, 2 = adequate.</caption>
  <thead><tr><th scope="col">Criterion</th><th scope="col">Before</th><th scope="col">After</th></tr></thead>
  <tbody>
    <tr><th scope="row">Evidence and explicit assumptions</th><td>0</td><td>2</td></tr>
    <tr><th scope="row">Account and service fit</th><td>1</td><td>2</td></tr>
    <tr><th scope="row">Useful, bounded first step</th><td>0</td><td>2</td></tr>
    <tr><th scope="row">Clear language and buyer relevance</th><td>1</td><td>2</td></tr>
  </tbody>
</table>

**Pilot acceptance rule:** recommend strategist review at 7/8 or higher, with no zero criterion and no unresolved blocker. Unsupported claims, a mismatched account, invented agency proof or commitments outside the agency’s scope block acceptance regardless of score. This is a starting rubric to compare with strategist judgments, not a measured conversion predictor.

**Bound the loop:** at most three automatic revisions; stop after two consecutive revisions without score improvement. Missing evidence or conflicting account identity requires escalation. Preserve the unresolved findings rather than generating more confident copy. Strategist-requested changes return through evaluation as a new version.

Evaluate initial and revised packages on the same frozen accounts. Track source coverage for factual claims, unsupported promises, reviewer corrections, review time and revision count. Keep unseen accounts for a held-out check. Record actual buyer responses separately from simulated reactions; response rate alone does not establish research quality.

<h2 id="agency-automation" data-index-label="Integration and recovery">Make updates recoverable</h2>

Read adapters collect approved CRM context, public research and documents. Retrieval selects relevant evidence; model backends produce research summaries and drafts; evaluation routes return findings. The CRM owns account status, while the artifact store owns versioned packages and approval records. Conversation checkpoints alone do not prove a CRM update or sent message.

Deduplicate repeated events by source ID. A changed or withdrawn source triggers re-review of dependent claims. If research fails, mark the evidence missing and hold the recommendation. If a CRM write or send times out, reconcile the destination before retrying; preserve an unresolved state when the outcome cannot be established.

**Trade-off:** focused research on three accounts limits breadth but makes evidence and review manageable. Simulated reviewers provide fast criticism, but can share model biases and cannot validate buyer demand. Source versioning and explicit approvals add work while making corrections traceable.

<h2 id="after-the-pitch" data-index-label="Delivery extension">Extend into delivery when the acquisition workflow is useful</h2>

<details class="case-extension">
  <summary>Campaign delivery and retained account learning</summary>
  <p>A later extension can combine approved analytics exports, tracking checks and competitor observations into a strategic brief, creative brief, media plan, client presentation, performance report and decision journal.</p>
  <p>For example: “Test repeat-purchase measurement before increasing spend. Reason: the acquisition report omits returning customers. Owner: account strategist. Next review: compare the joined records.” Retain assumptions and actual outcomes with the decision.</p>
  <p>This extends the reviewed-account pattern; it does not imply deployed campaign automation. The strategist owns campaign direction, client commitments and changes to spend.</p>
</details>

<h2 id="agency-ownership" data-index-label="Human review">The strategist approves the work and the action</h2>

The strategist verifies the account signal, challenges the hypothesis and approves the package. Sending outreach or modifying a CRM record needs approval of the specific action. The shared [judge registry and owner-review loops](../../workflows/#judge-registry) explain the mechanism; this page owns the account and pitch criteria.

<h2 id="connection-to-the-lab" data-index-label="Related work">Related work</h2>

Use [AI and data readiness](../ai-data-readiness/) to assess integration prerequisites. Compare the [career preparation workflow](../interview-preparation/) or inspect the [Harness architecture](../../architecture/) and its [validation evidence](../../validation/).
