<h2 id="example" data-index-label="Setup">Prerequisites</h2>

Use Python 3.12, Node.js 22.22 or newer, and pnpm 12.8.1. Conda and mise must also be installed.

<h2 id="approach-and-tradeoffs" data-index-label="Commands">Run the source checks</h2>

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

<h2 id="boundaries-and-recovery" data-index-label="Expected result">Expected results and limits</h2>

The expected result is that `make validate` completes without errors.

For application setup and a real retrieval smoke test, follow the [setup guide](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/10bd370c711afabdfc7b23b516911c31ff58bcb4/setup/README.md). See [Validation](../validation/) for the recorded evidence and limits, including unverified GCS access and optional conversion.

<h2 id="reference">Reference</h2>

[Run the source](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/10bd370c711afabdfc7b23b516911c31ff58bcb4/README.md#run-the-source)
