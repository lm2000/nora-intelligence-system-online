---
title: "Building with AI, checking the result"
description: "Human direction, bounded AI work, independent critique and the limits of the available evidence."
slug: "learning"
---

Michael set the goals, scope, and architecture decisions for NIS. AI assisted with research, bounded source changes, and critique; Michael reviewed the results and decided what counted as evidence. The public Harness source and dated validation show what a reader can inspect. The October 16 direct NIS API candidate remains an undeployed design record.

## Ownership

This account describes Michael's direction and acceptance of the work, not a claim that he handwrote every line. AI contributed substantial implementation and review work.

## Sequence

Work started from an HLD and a plan, not from code. The records then show bounded work items, dated decisions, source changes and check receipts. This was an incremental side project, not a formal sprint program.

## State across chats

Chat sessions do not automatically share reliable state, so NIS `Plan.md` is the single current owner of plan state. The current work separates documentation and implementation chats with explicit file ownership; the implementation owner retains shared contracts and final integration. When context had to move, the handoff was a file naming scope, verified state, and the next action — not a memory of a conversation. This makes the next action recoverable without treating chat history as the project ledger.

## Artifacts and their limits

A dashboard source candidate shows component design and checks against acceptance freshness, polling visible at 60 seconds and stale at 120 seconds. It is not proof the dashboard was accepted. Linear was used for Career Job Search tracking; it never became an established NIS ledger. A meta-coordinator title describes intent; it is not evidence of a working autonomous service.

## Qualitative reviews

Two reviews are preserved as records. The Fireworks architecture record documents Nemotron 3 Ultra on NVFP4: a technical HLD and contracts. The Kimi K3 Fast record documents boundaries and contradictions. Both reviews hit output caps; token counts were recorded, but billed dollars were unavailable. Both were reconciled against Michael's requirements — requirement checks, not benchmark or winner claims.

## Checking results

On October 6, an uncalibrated cloud judge scored 8 development cases; the final result was 4 pass, 4 fail, after correcting 4 false positives — the reviewer needed correction as well as the answers it assessed. On October 13, a 79-word repair was falsely rejected because of narrow no-break spaces in a heading. The fix was to normalize whitespace, check an exact fixture, and add negative checks for missing and misspelled headings. A separate six-case isolated check followed; it does not prove general reliability. On October 16 (historical receipts), 315 Python tests plus 11 subtests ran with 2 legacy LiteLLM skips, seven UI tests plus typecheck and build passed, and 3 provider synthetic checks covering stream, functions, facts, and model API passed. These receipts establish the tested source snapshot; they do not establish deployment or broad answer quality.

## Planned work

A simple future sanity exercise runs Nora first and OpenClaw second; Codex is excluded from functional acceptance. For the main task, latency is planned but not yet run: 3 runs each with the same short prompt across OpenClaw→NIS, OpenClaw→native Codex, and native Codex direct, measuring time-to-visible and total where measurable, and logging model, length, and startup. Until those runs happen, latency figures and any cost comparison stay labeled as open; cost is unknown and there is no savings claim.

## Claim-evidence map

| Claim | Evidence | Limit |
|---|---|---|
| Plan state survives chat boundaries | Dated project plan and handoff records | Single owner by convention, not enforcement |
| Project status is tracked | `src/nora/project_status.py` | Snapshot only, undeployed |
| Agent behavior is defined | `src/nora/agent.py` | Source exists; functional acceptance not run |
| Three target providers and historical local checks | Historical synthetic probe receipts | Tests and synthetic probes are source-specific, not comparative benchmarks |
| Explicit memory and tools | `src/nora/platform_state.py`, `src/nora/integrations.py` | Candidate implementation; pending client sanity and integration gaps |
| Evaluation approach documented | [Validation](../../validation/) | Describes checks; does not prove generality |

## Source availability

Architecture, Decisions, Validation and Reproduce use a [pinned public Harness snapshot](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/tree/10bd370c711afabdfc7b23b516911c31ff58bcb4). This design story also draws on an October 16 local source candidate and private evidence register. Candidate module names are code references, not links to a published implementation. The private register is not reproduced here.

## Further reading

The method borrows from public writing, as inspiration, not NIS evidence: AWS on the [ADR process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html), Anthropic on [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents), and Simon Willison's March 11, 2025 post on [using LLMs for code](https://simonwillison.net/2025/Mar/11/using-llms-for-code/).

The remaining scope is a small sanity check, not a production-readiness program. Historical checks are retained with their limits; future cleanup needs its own simple readback.

The primary [LangGraph persistence reference](https://docs.langchain.com/oss/python/langgraph/persistence) explains checkpoints; NIS implementation claims come from its own code and receipts. Anthropic’s article and Willison’s account are historical editorial examples, not evidence of NIS outcomes.
