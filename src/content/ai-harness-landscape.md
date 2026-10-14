<h2 id="the-research-question" data-index-label="Question">The research question</h2>

When a company says it has an AI product, the interesting part is rarely the model alone. What turns model inference into something a compliance officer, lawyer, or care coordinator can use is the **harness**: the software and process wrapped around the model—the task framing, knowledge sources, tools, persistent state, human review, and measurement.

My question: **what can we learn about building useful AI products by comparing the harness shapes visible in public descriptions of seven domain-focused AI products and platforms?**

<h2 id="method" data-index-label="Method">Method</h2>

This brief comparison uses a repeatable method:

1. Used publicly accessible vendor product pages.
2. Wrote one one-line summary per product, capped at 40 words, paraphrasing only what the vendor states, with a direct link.
3. Defined comparison dimensions as questions for a deeper review.
4. Kept vendor descriptions separate from architectural interpretation. The product notes below pair public capabilities with questions to investigate; they do not constitute a complete evidence matrix or product test.

<h2 id="seven-public-examples" data-index-label="Products">Seven public examples</h2>

| Product | What the vendor publicly describes | Source |
|---|---|---|
| Iridius | Compliance-by-design AI for regulated enterprises, framed around executing compliance work rather than just advising on it. | [iridius.ai](https://iridius.ai/) |
| Harvey | Legal platform combining agents, document analysis in Vault, research, and shared workspaces for professional work. | [harvey.ai](https://www.harvey.ai/) |
| Anterior | Clinical AI for health plans: prior authorization and related health plan workflows, with cited reasoning and a decision ledger. | [anterior.com](https://www.anterior.com/) |
| Arya Health | Non-clinical administration for care organizations—scheduling, intake, compliance, payroll—updating systems of record (EMR/ATS/HRIS) in near-real time. | [aryahealth.ai](https://www.aryahealth.ai/) |
| Counsel Health | Medical AI chat with optional handoff to a real physician. | [counselhealth.com](https://www.counselhealth.com/) |
| Brellium | Clinical chart review pre-bill: audits documentation against payor and quality rules, surfaces compliance risks and coding gaps. | [brellium.com](https://www.brellium.com/) |
| Arbiter | Care orchestration platform covering outreach, scheduling, and coordination, with handoff to human staff when needed. | [arbiter.ai](https://arbiter.ai/) |

<h2 id="product-notes" data-index-label="Product notes">What each product makes worth investigating</h2>

The summaries above identify the task. These notes examine a surrounding capability and the next question it raises. Public descriptions are attributed to the vendor; the questions are my interpretation.

<details class="research-note">
  <summary>Iridius · From policy to executable work</summary>
  <p><a href="https://iridius.ai/">Iridius describes</a> regulatory standards becoming machine-readable logic, orchestration across systems, and evidence generated during execution.</p>
  <p><strong>Investigate:</strong> How are rule changes versioned and validated? Which parts of a deployment can repeat across customers, and which require domain-specific configuration?</p>
</details>
<details class="research-note">
  <summary>Harvey · Documents and collaborative legal work</summary>
  <p><a href="https://www.harvey.ai/">Harvey describes</a> Vault for organizing and analyzing documents, agents for legal work, and Spaces for collaboration across organizations.</p>
  <p><strong>Investigate:</strong> How does an assignment become a reviewable deliverable? Which sources support it, how are access boundaries maintained, and what review remains with the professional?</p>
</details>
<details class="research-note">
  <summary>Anterior · Organizational knowledge and decision records</summary>
  <p><a href="https://www.anterior.com/">Anterior describes</a> version-controlled organizational policy knowledge, supporting evidence for outcomes, an event ledger, and escalation to a qualified person when criteria are not clearly met.</p>
  <p><strong>Investigate:</strong> How are policy interpretations maintained, and can the organization reconstruct an outcome after a rule or record changes?</p>
</details>
<details class="research-note">
  <summary>Arya Health · Connecting administrative work to records</summary>
  <p><a href="https://www.aryahealth.ai/">Arya describes</a> administrative automation that communicates with and updates EMR, ATS, and HRIS systems.</p>
  <p><strong>Investigate:</strong> How much customer-specific integration is required? How are partial updates, duplicates, reconciliation, and exceptions handled?</p>
</details>
<details class="research-note">
  <summary>Counsel Health · A conversation with a clinician handoff</summary>
  <p><a href="https://www.counselhealth.com/">Counsel describes</a> medical AI conversation, optional patient-portal connection, and adding a real doctor to a conversation.</p>
  <p><strong>Investigate:</strong> What context reaches the clinician, who owns follow-up, and how does the combined software-and-care service manage capacity?</p>
</details>
<details class="research-note">
  <summary>Brellium · Findings that reach a reviewer</summary>
  <p><a href="https://www.brellium.com/">Brellium describes</a> pre-billing review of clinical notes, specific issue flags and resolution steps, and integration with an existing EHR.</p>
  <p><strong>Investigate:</strong> Can reviewers trace a finding to the note and rule, correct it, and verify that the correction reached the relevant workflow?</p>
</details>
<details class="research-note">
  <summary>Arbiter · Care coordination beyond a reminder</summary>
  <p><a href="https://www.arbiter.ai/">Arbiter describes</a> voice and messaging outreach, answers grounded in plan and provider documentation, and human handoff with conversation context.</p>
  <p><strong>Investigate:</strong> What counts as a completed coordination task, who handles an unresolved case, and how is the outcome verified across channels?</p>
</details>

<h2 id="comparison-dimensions" data-index-label="Dimensions">Comparison dimensions</h2>

Rather than scoring products, I ask the same concrete questions of each:

| Dimension | Concrete question |
|---|---|
| Task & output | What is the unit of work (a draft, a decision, a scheduled visit, a flagged chart) and what artifact is produced? |
| Knowledge | Does the system rely on the model's training, uploaded documents, curated sources, or the customer's own records? |
| Tools | Can it act—write to systems of record, call calendars, file claims—or only read and suggest? |
| Durable state & recovery | What persists between sessions (history, tables, ledgers), and how is a mistaken or interrupted run corrected? |
| Human review | Where do humans sit: reviewing every output, sampling, exception-based, or taking over on request? |
| Evaluation | How does the vendor describe checking quality before and after deployment? |
| Integration & adoption | Which existing systems and habits must it live inside (EHR, Slack, case queues), and who is the daily user? |
| Economics | Who pays, per what unit (seat, case, chart, visit), and what cost does it replace? Where pricing or operating costs are unavailable, leave them unknown. |

<h2 id="architectural-lessons" data-index-label="Lessons">Architectural lessons</h2>

These are my current readings of the public material:

1. **Define the complete unit of work.** These examples highlight intake, drafting or decisions, checks, actions, and records. The model contributes to that workflow. A useful comparison asks where the product starts and what counts as completion.
2. **Knowledge plumbing is a first-class design choice.** Products differ most in whether grounding comes from customer documents (Harvey Vault, Brellium charts), curated sources, or connected records. The retrieval path shapes what a system can safely say.
3. **Treat write access as a design boundary.** A suggested answer and a recorded action carry different consequences. When a system changes records, the comparison should examine authorization, review, retries, and recovery separately.
4. **Human handoff is designed in.** Counsel's physician handoff and Arbiter's staff handoff encode escalation as part of the normal path, which appears central to how these products present trustworthiness.

<h2 id="deployment-and-value" data-index-label="Adoption & value">Deployment, adoption, and value</h2>

The broader landscape material separates **technical capability** from **market scope**. A model provider, orchestration framework, runtime, and vertical application occupy different roles. A product can span several capabilities; its market category does not tell us its internal topology.

This set concentrates on legal and healthcare applications, with Iridius framed as a regulated-workflow execution platform. It adds concrete questions about integration, domain context, review responsibilities, and the work needed to make a system useful inside an organization.

### Deployment is part of the product

Record access, workflow mapping, exception handling, and ownership can dominate the effort to introduce an AI product. Ask what the customer must change, who configures the workflow, how it is maintained, and what happens when a connected system is unavailable. A repeatable demo and a repeatable deployment are different achievements.

### Faster work creates several kinds of value

Reduced preparation effort may become more capacity, a better service, or a lower price. To understand who benefits, examine the completed work product, review burden, integration and operating cost, pricing unit, and the customer’s alternatives. A time-saving claim alone does not show retained profit or a better outcome.

### Retained context needs maintenance

Stored documents, records, and conversations make context available. A deeper review asks how knowledge is captured, corrected, refreshed, shared, and restricted between people. Retaining a conversation does not by itself establish organizational learning.

For a practical way to turn these questions into a first pilot, see [AI and data readiness](../ai-data-readiness/).

<h2 id="connection-to-nora" data-index-label="Lab connection">Connection to Nora SuperIntelligence Lab</h2>

The same questions apply to Nora SuperIntelligence Lab’s knowledge assistant:

- **Task & output:** A question becomes a plain answer, with a conversation UUID for follow-up.
- **Knowledge:** Retrieval uses operator-prepared documents; updating those documents is a separate workflow.
- **State & recovery:** PostgreSQL retains conversation checkpoints. Restart and restoration checks are recorded with their limits.
- **Evaluation:** Synthetic checks and bounded real-model checks answer different questions; neither supplies a general reliability score.

Explore the [architecture](../../architecture/) for the system boundaries and [validation](../../validation/) for evidence. This applies the framework to the project without treating the seven vendor summaries as equivalent implementations.

<h2 id="limits" data-index-label="Limits">Limits</h2>

Public descriptions show what vendors choose to publish and may lag the shipped product. I have not used these systems, so I can describe shapes, not confirm behavior. Seven examples spanning legal, payer, provider, and patient contexts illustrate the space without representing it. The comparison is a vocabulary for asking better questions, not a verdict on any product.