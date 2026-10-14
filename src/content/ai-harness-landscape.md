## The research question

When a company says it has an AI product, the interesting part is rarely the model alone. What turns model inference into something a compliance officer, lawyer, or care coordinator can use is the **harness**: the software and process wrapped around the model—the task framing, knowledge sources, tools, persistent state, human review, and measurement.

My question: **what can we learn about building useful AI products by comparing the harness shapes visible in public descriptions of seven vertical AI products?**

## Method

This brief comparison uses a repeatable method:

1. Used publicly accessible vendor product pages.
2. Wrote one one-line summary per product, capped at 40 words, paraphrasing only what the vendor states, with a direct link.
3. Defined comparison dimensions as questions for a deeper review.
4. Kept vendor descriptions separate from architectural interpretation. This draft includes summaries and a comparison framework; it does not fill out a complete evidence matrix for each company.

## Seven public examples

| Product | What the vendor publicly describes | Source |
|---|---|---|
| Iridius | Compliance-by-design AI for regulated enterprises, framed around executing compliance work rather than just advising on it. | [iridius.ai](https://iridius.ai/) |
| Harvey | Legal platform: Assistant for ask/analyze/draft, Vault for large-scale document review, Workflow Agents, History, curatable Library; answers link back to sources. | [help.harvey.ai](https://help.harvey.ai/articles/getting-started-with-harvey) |
| Anterior | Clinical AI for health plans: prior authorization and related health plan workflows, with cited reasoning and a decision ledger. | [anterior.com](https://www.anterior.com/) |
| Arya Health | Non-clinical administration for care organizations—scheduling, intake, compliance, payroll—updating systems of record (EMR/ATS/HRIS) in near-real time. | [aryahealth.ai](https://www.aryahealth.ai/) |
| Counsel Health | Medical AI chat with optional handoff to a real physician. | [counselhealth.com](https://www.counselhealth.com/) |
| Brellium | Clinical chart review pre-bill: audits documentation against payor and quality rules, surfaces compliance risks and coding gaps. | [brellium.com](https://www.brellium.com/) |
| Arbiter | Care orchestration platform covering outreach, scheduling, and coordination, with handoff to human staff when needed. | [arbiter.ai](https://arbiter.ai/) |

## Comparison dimensions

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

## Architectural lessons

These are my current readings of the public material:

1. **Define the complete unit of work.** These examples highlight intake, drafting or decisions, checks, actions, and records. The model contributes to that workflow. A useful comparison asks where the product starts and what counts as completion.
2. **Knowledge plumbing is a first-class design choice.** Products differ most in whether grounding comes from customer documents (Harvey Vault, Brellium charts), curated sources, or connected records. The retrieval path shapes what a system can safely say.
3. **Treat write access as a design boundary.** A suggested answer and a recorded action carry different consequences. When a system changes records, the comparison should examine authorization, review, retries, and recovery separately.
4. **Human handoff is designed in.** Counsel's physician handoff and Arbiter's staff handoff encode escalation as part of the normal path, which appears central to how these products present trustworthiness.

<h2 id="connection-to-nora">Connection to Nora SuperIntelligence Lab</h2>

At Nora SuperIntelligence Lab, I am building a single-assistant knowledge project. Its current architecture is public: [architecture](https://nora-intelligence-system.com/architecture/) and [validation](https://nora-intelligence-system.com/validation/). In brief, the system coordinates one assistant through open-source Deep Agents and LangGraph, **retrieval runs as a separate MCP server** over operator-prepared documents using shared BGE embeddings and Qdrant, and conversation state persists as **PostgreSQL checkpoints**. Document preparation is **manual and operator-triggered**, kept separate from conversations so provenance stays explicit.

Mapping the dimensions table onto the lab’s knowledge assistant is a useful exercise: even a small, single-assistant project answers the same harness questions—task framing, knowledge, tools, durable state, human review, evaluation, integration—as the larger products above.

## Limits

Public descriptions show what vendors choose to publish and may lag the shipped product. I have not used these systems, so I can describe shapes, not confirm behavior. Seven examples spanning legal, payer, provider, and patient contexts illustrate the space without representing it. The comparison is a vocabulary for asking better questions, not a verdict on any product.