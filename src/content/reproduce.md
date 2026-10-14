<h2 id="example">Prerequisites</h2>

To run the harness source, use Python 3.12, Node.js 22.22 or newer, and pnpm 12.8.1. The separate website build uses Node 24.

<h2 id="approach-and-tradeoffs">Run the source checks</h2>

Clone the public harness repository and check out the pinned commit, then run the commands below from the repository root:

```bash
git clone https://github.com/lm2000/nora-ai-knowledge-agent-harness-public.git
cd nora-ai-knowledge-agent-harness-public
git checkout 10bd370c711afabdfc7b23b516911c31ff58bcb4
```

From the repository root, create a Conda environment, install the locked Python dependencies, trust the mise configuration, install the frozen UI lockfile, and run validation:

```bash
conda create -n nora-ai python=3.12 pip
conda run -n nora-ai python -m pip install -c requirements.lock -e '.[server,gcs,dev]'
mise trust
pnpm --dir ui install --frozen-lockfile
make validate
```

These checks use synthetic documents and model doubles. They do not establish current production quality or live GCS cutover.

<h2 id="boundaries-and-recovery">Expected results and limits</h2>

The expected result is that `make validate` completes without errors.

These development checks do not exercise real GCS bucket creation, credentials, or upload; local verification uses a `FakeGCSClient` double. Optional Docling conversion and additional client identities remain unverified. Follow the setup guide for the application and real retrieval smoke test.

For the dated evidence behind these checks, see [Validation](../validation/).

<h2 id="reference">Reference</h2>

[Run the source](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/10bd370c711afabdfc7b23b516911c31ff58bcb4/README.md#run-the-source)
