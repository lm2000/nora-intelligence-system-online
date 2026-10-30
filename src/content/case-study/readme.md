---
title: "How the AI agent harness was designed"
description: "The problem, service boundaries and tradeoffs behind a reusable AI agent harness."
slug: ""
diagram: "case-system"
diagramAlt: "Clients, execution, knowledge and tools in the accepted direct NIS target"
---

Michael Lvov's independent engineering project, presented as a design record.

## Purpose, shown by one ask

Take a question like: "Two migration options for a fictional service called Atlas — which fits how we decide things like this?" A model without the relevant sources cannot ground that answer in prior decisions. NIS provides a reusable knowledge and execution backbone across supported clients and eligible models.

## Why not paste the corpus into every chat

Repeatedly pasting a large corpus into chats makes source identity and updates harder to maintain and spends bounded context on text most requests never touch. External retrieval over prepared text — BGE embeddings in Qdrant, aligned to each text release — solves this for independent clients. Codex can also use MCP, tools and external retrieval. The point is to reuse a knowledge service across supported clients, rather than tie knowledge to a single conversation.

## Constraints that shape everything

One owner; a side-project budget in hours and money; conversation data and history kept intact with the legacy role chats never migrated or exposed; a conversational or voice interface that can be chosen separately from inference; tasks kept bounded. There is no enterprise recovery or rollback program here, and none is claimed.

## What success means

A supported, grounded answer, follow-up continuity across turns, and correct tool behavior. Latency and cost are known only when measured; until the planned runs happen, this study states status, not benchmark results.

The build story continues in [architecture evolution](./evolution/); [tools and routing](./choices/) records components, providers, routing bounds, and integration approvals; [AI-assisted work and evidence](./learning/) maps claims to evidence; [market research and resume development](./career/) shows a second application of the same evidence discipline.
