---
title: "From role runtimes to one direct service"
description: "Why one AI Coordinator remained, how the gateway route differs from the direct target, and what each store owns."
slug: "evolution"
diagram: "case-evolution"
diagramAlt: "The used gateway path and the accepted direct target"
---

The route changed shape twice. This chapter follows those decisions; [Decisions](../../decisions/) explains the accepted coordinator boundaries.

## One AI Coordinator accepted
A decision converged the work on one AI Coordinator instead of parallel role runtimes, cutting duplicated wiring before any cleanup started.

## Role interfaces removed, history retained
Obsolete role, runtime, and interface layers came out of the code path. Legacy role conversations stayed in storage as-is: no migration, and no exposure of their contents. Existing conversations continue in place — the PostgreSQL checkpoints never had to move.

## Two real designs, both on record
**USED baseline:** client → LiteLLM MCP → embedded FastMCP Coordination → selected provider.
**ACCEPTED direct target:** Coordination speaking Responses, Completions, HTTP, AG-UI, and MCP → LangChain direct adapter → provider.

Deep Agents and LangGraph remain the execution foundation across both. The direct route removes a gateway hop and a framework dependency; NIS takes ownership of a protocol subset in return — streaming, tool calling, continuations, and authentication. The gateway path was used; the direct path is an accepted source candidate. These are documented alternatives, not a completed cutover or a controlled performance comparison.

## Why not a second orchestrator
CrewAI is excluded from the target. The documented design keeps one execution-state owner; the inspected evidence does not establish a CrewAI trial. The exclusion is recorded without claiming CrewAI was benchmarked or proven worse.

<h2 id="four-providers-became-three" data-index-label="Provider scope">Four providers became three</h2>

Provider scope was narrowed by an explicit owner decision. The record does not establish a comparative provider benchmark.

<details class="historical-record" data-history-anchor="four-providers-became-three">
<summary>Historical provider-scope decision</summary>

The original platform candidate listed four providers. Michael's decision removed Hermes, leaving three targets — Ollama Cloud, Fireworks, and DeepSeek — and active provider support has been removed. The platform setup guide now describes the three-provider scope.

</details>

## What the data actually is
Ingestion runs as four separate jobs with no per-source LLM rewriting. Three stores hold three different meanings: the corpus, BGE embeddings in Qdrant over prepared text aligned to each release; conversation checkpoints in PostgreSQL; and explicit saved memory, written with provenance and confirmed by Michael, deliberately kept out of the corpus. Qdrant is a vector index, not a knowledge graph.

<h2 id="where-the-candidate-stands" data-index-label="Evidence boundary">Keep source inspection, client checks and rollout separate</h2>

Inspecting source, accepting a client and deploying a route establish different things. The direct route transfers streaming, tool-calling, continuation and authentication responsibilities into the service; its source record alone does not establish a completed cutover.

<details class="historical-record" data-history-anchor="where-the-candidate-stands">
<summary>Historical candidate and client-check status</summary>

The direct-platform source candidate was inspected locally — explicit memory, tools, dashboard — but never deployed, and publication is pending, so its module paths appear only as code references. Nora is the first functional client. OpenClaw is the second client, with its direct sanity check still pending. Codex is excluded from current functional acceptance, though it historically worked as an MCP/RAG client, not a prompt-only one. The remaining implementation work and Nora/OpenClaw sanity checks belong to the main refactoring task; its latency comparison comes afterward.

</details>
