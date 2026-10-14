## Purpose

Reproduce the Nora SuperIntelligence Lab knowledge-agent harness checks using pinned public source and a working setup interface.

## Example

To run the source, use Python 3.12, Node.js 22.22 or newer, and pnpm 12.8.1. From the repository root, create a Conda environment, install the locked Python dependencies, trust the mise configuration, install the frozen UI lockfile, and run validation. These checks use synthetic documents and model doubles. They do not establish current production quality or live GCS cutover.

```bash
conda create -n nora-ai python=3.12 pip
conda run -n nora-ai python -m pip install -c requirements.lock -e '.[server,gcs,dev]'
mise trust
pnpm --dir ui install --frozen-lockfile
make validate
```

## Approach and Tradeoffs

The public tests and synthetic smoke script are the reproduction entrypoints. Python contract tests cover deterministic preparation, document hashes, Qdrant round trips, and routing failures. The real Deep Agents/LangGraph and AG-UI adapters run with a deterministic model double and an in-memory checkpointer. The real MCP server handles initialization, tool discovery, search/read, and authentication. The separate real-BGE smoke test downloads the pinned public model and verifies loopback HTTP encoding. The UI has server-boundary tests, a TypeScript check, and a production build without a credential file. Documentation links, anchors, diagram inventory, HTML/GIF pairs, and source-release paths are checked.

## Boundaries and Recovery

These development checks do not exercise real GCS bucket creation, credentials, or upload; local verification uses a `FakeGCSClient` double. Optional Docling conversion and additional client identities remain unverified. Follow the setup guide for the application and real retrieval smoke test. The site itself runs on Node 24. There is no portable host installer fiction.

## Reference

[Run the source](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/10bd370c711afabdfc7b23b516911c31ff58bcb4/README.md#run-the-source)