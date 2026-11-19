---
title: "Building with AI, checking the result"
description: "Human direction, bounded AI work, independent critique and the limits of the available evidence."
slug: "learning"
---

The engineering lessons are to keep one recoverable work record, reconcile AI critique against requirements, and test the checker as well as the output. The records here show how those practices were applied and where the evidence stops.

<h2 id="ownership" data-index-label="Ownership">Keep human direction and acceptance explicit</h2>

Michael set the goals, scope, and architecture decisions for the AI agent harness. AI assisted with research, bounded source changes, and critique; Michael reviewed the results and decided what counted as evidence. The public harness source and recorded validation show what a reader can inspect. The direct API candidate remains an undeployed design record.

This account describes Michael's direction and acceptance of the work, not a claim that he handwrote every line. AI contributed substantial implementation and review work.

<h2 id="sequence" data-index-label="Work sequence">Start from design and bounded changes</h2>

Work started from an HLD and a plan, not from code. The records then show bounded work items, dated decisions, source changes and check receipts. This was an incremental side project, not a formal sprint program.

<h2 id="state-across-chats" data-index-label="Recoverable state">Make the next action recoverable across chats</h2>

A handoff needs explicit scope, verified state and a next action. One plan owner and clear file ownership make that state recoverable without relying on a conversation’s memory.

<details class="historical-record" data-history-anchor="state-across-chats">
<summary>Historical plan and handoff record</summary>

Chat sessions do not automatically share reliable state, so NIS `Plan.md` is the single current owner of plan state. The current work separates documentation and implementation chats with explicit file ownership; the implementation owner retains shared contracts and final integration. When context had to move, the handoff was a file naming scope, verified state, and the next action — not a memory of a conversation. This makes the next action recoverable without treating chat history as the project ledger.

</details>

<h2 id="artifacts-and-their-limits" data-index-label="Acceptance boundary">Separate status reporting from acceptance</h2>

A source inspection, a passing check and human acceptance are separate observations. A dashboard must retain those distinctions rather than turn them into one green status.

<details class="historical-record" data-history-anchor="artifacts-and-their-limits">
<summary>Historical dashboard and tracking-tool notes</summary>

A dashboard source candidate shows component design and checks against acceptance freshness, polling visible at 60 seconds and stale at 120 seconds. It is not proof the dashboard was accepted. Linear was used for Career Job Search tracking; it never became an established NIS ledger. A meta-coordinator title describes intent; it is not evidence of a working autonomous service.

</details>

<h2 id="qualitative-reviews" data-index-label="Review lessons">Reconcile critique against the requirements</h2>

Independent critiques are inputs to an engineering decision. Reconcile their findings against the requirements, and retain output limits and unknown costs rather than presenting a model ranking.

<details class="historical-record" data-history-anchor="qualitative-reviews">
<summary>Historical review models and output limits</summary>

Two reviews are preserved as records. The Fireworks architecture record documents Nemotron 3 Ultra on NVFP4: a technical HLD and contracts. The Kimi K3 Fast record documents boundaries and contradictions. Both reviews hit output caps; token counts were recorded, but billed dollars were unavailable. Both were reconciled against Michael's requirements — requirement checks, not benchmark or winner claims.

</details>

<h2 id="checking-results" data-index-label="Checker failures">Test the checker as well as the answer</h2>

In one development check, an uncalibrated cloud judge scored 8 cases; the final result was 4 pass, 4 fail, after correcting 4 false positives — the reviewer needed correction as well as the answers it assessed.

A later 79-word repair was falsely rejected because of narrow no-break spaces in a heading. The fix was to normalize whitespace, check an exact fixture, and add negative checks for missing and misspelled headings. A separate six-case isolated check followed; it does not prove general reliability.

<details class="historical-record" data-history-anchor="checking-results">
<summary>Historical test-suite receipts</summary>

Historical receipts show 315 Python tests plus 11 subtests with 2 legacy LiteLLM skips, seven UI tests plus typecheck and build, and 3 provider synthetic checks covering stream, functions, facts, and model API. These receipts establish the tested source snapshot; they do not establish deployment or broad answer quality.

</details>

<h2 id="planned-work" data-index-label="Unfinished checks">Keep unfinished checks separate from results</h2>

The record leaves latency and cost comparisons open. A proposed check is not a measured result or evidence of production readiness.

<details class="historical-record" data-history-anchor="planned-work">
<summary>Unfinished checks recorded in this snapshot</summary>

A simple future sanity exercise runs Nora first and OpenClaw second; Codex is excluded from functional acceptance. For the main task, latency is planned but not yet run: 3 runs each with the same short prompt across OpenClaw→NIS, OpenClaw→native Codex, and native Codex direct, measuring time-to-visible and total where measurable, and logging model, length, and startup. Until those runs happen, latency figures and any cost comparison stay labeled as open; cost is unknown and there is no savings claim.



The remaining scope is a small sanity check, not a production-readiness program. Historical checks are retained with their limits; future cleanup needs its own simple readback.

</details>

<h2 id="claim-evidence-map" data-index-label="Claim evidence">Connect each claim to evidence and its limit</h2>

Use the recorded source or receipt together with its qualification. Candidate modules and synthetic checks establish narrower claims than deployment or general reliability.

<details class="historical-record" data-history-anchor="claim-evidence-map">
<summary>Historical claim-evidence map</summary>

| Claim | Evidence | Limit |
|---|---|---|
| Plan state survives chat boundaries | Dated project plan and handoff records | Single owner by convention, not enforcement |
| Project status is tracked | `src/nora/project_status.py` | Snapshot only, undeployed |
| Agent behavior is defined | `src/nora/agent.py` | Source exists; functional acceptance not run |
| Three target providers and historical local checks | Historical synthetic probe receipts | Tests and synthetic probes are source-specific, not comparative benchmarks |
| Explicit memory and tools | `src/nora/platform_state.py`, `src/nora/integrations.py` | Candidate implementation; pending client sanity and integration gaps |
| Evaluation approach documented | [Validation](../../validation/) | Describes checks; does not prove generality |

</details>

<h2 id="source-availability" data-index-label="Source scope">Distinguish historical references from the maintained source</h2>

The module references in this chapter belong to its historical candidate. See [Architecture](../../architecture/), [Decisions](../../decisions/), [Reproduce](../../reproduce/) and [Validation](../../validation/) for the maintained public-source boundaries and check records.

<details class="historical-record" data-history-anchor="source-availability">
<summary>Historical source reference and private-register boundary</summary>

The current Architecture, Decisions and Reproduce pages use the [updated public harness snapshot](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/tree/7ea9e4915f4e1ad446aeaf077ccbbbfc1aa2d053); Validation retains separate pins for historical checks. This historical design story draws on an earlier local source candidate and private evidence register. Candidate module names are code references, not links to a published implementation. The private register is not reproduced here.

</details>

<h2 id="further-reading" data-index-label="Further reading">Further reading</h2>


The method borrows from public writing, as inspiration, not project evidence: AWS on the [ADR process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html), Anthropic on [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents), and Simon Willison on [using LLMs for code](https://simonwillison.net/2025/Mar/11/using-llms-for-code/).

The primary [LangGraph persistence reference](https://docs.langchain.com/oss/python/langgraph/persistence) explains checkpoints; NIS implementation claims come from its own code and receipts. Anthropic’s article and Willison’s account are historical editorial examples, not evidence of NIS outcomes.
