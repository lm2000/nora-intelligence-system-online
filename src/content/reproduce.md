<h2 id="atlas-replay" data-index-label="Atlas replay">Run the Atlas review replay</h2>

Replay two saved reviews of a fictional Atlas briefing and see how an accepted finding carries into the next version. Use Python 3.12 with pip and Git. The example uses bundled fixtures and makes zero model calls.

Clone the public harness repository and check out the pinned commit. Run these commands from the directory where you want the checkout:

```bash
git clone https://github.com/lm2000/nora-ai-knowledge-agent-harness-public.git
cd nora-ai-knowledge-agent-harness-public
git checkout 1f44e9accce179f1b9a812489fff0c61410b871b
```

From the pinned checkout, install the base package in a virtual environment and run the replay with a new output directory:

```bash
python3.12 -m venv .venv
source .venv/bin/activate
python -m pip install -c requirements.lock -e .
nora review-example --output .private/atlas-review-cycle
```

The command reports `synthetic_cycle_complete` and writes `summary.json` in the output directory. Expect `atlas-v1` → `atlas-v2`, zero model calls, and a delivery decision of `requires_owner_review`. Choose a fresh output directory for each replay.

Read the revised briefing in `.private/atlas-review-cycle/revision/artifact.json` (the `text` field).

<h2 id="example" data-index-label="Setup">Prerequisites</h2>

Use Python 3.12, Node.js 22.22 or newer, pnpm 12.8.1, Conda and Make. Development validation needs no inference credential or private corpus.

<h2 id="approach-and-tradeoffs" data-index-label="Commands">Run the source checks</h2>

Use the pinned checkout from the [Atlas replay setup](#atlas-replay).

From the repository root, create and activate the Conda environment, install the locked dependencies, and run validation:

```bash
conda create -n nora-ai python=3.12 pip
conda run -n nora-ai python -m pip install -c requirements.lock -e '.[server,gcs,dev]'
conda activate nora-ai
python -c 'import sys; print(sys.executable)'
pnpm --dir ui install --frozen-lockfile
make validate
```

The printed Python path should be inside the `nora-ai` Conda environment. Keep that environment active for Python commands; use pnpm for Node and UI packages. Run `conda deactivate` when finished.

<h2 id="boundaries-and-recovery" data-index-label="Expected result">Expected results and limits</h2>

`make validate` runs Python tests, lint and formatting, UI tests, TypeScript, the production UI build, shell syntax, documentation links, diagram inventory and the source-release check. The expected result is completion without errors. [Validation](../validation/#local-source-checks) records the observed suite counts and qualifications.

For an optional real-BGE retrieval check, keep the Conda environment active and run from the repository root:

```bash
python -m pip install -c requirements.lock -e '.[embeddings]'
nora cache-model
python scripts/synthetic_smoke.py --model-path .runtime/models/bge
```

The model directory must be new. Downloading the pinned public model requires internet access; the smoke test then uses the local cache. It checks three fictional documents through a temporary Qdrant index and loopback MCP server, cleans up temporary state, and does not call an answer model or start PostgreSQL or Docker.

These checks do not deploy the application or establish representative answer quality. For application startup, optional conversion and browser acceptance, follow the [setup guide](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/1f44e9accce179f1b9a812489fff0c61410b871b/docs/setup/README.md).

<h2 id="reference">Reference</h2>

[Development setup](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/1f44e9accce179f1b9a812489fff0c61410b871b/docs/setup/README.md#install-for-development) · [Validation record](https://github.com/lm2000/nora-ai-knowledge-agent-harness-public/blob/1f44e9accce179f1b9a812489fff0c61410b871b/docs/evaluation/VALIDATION.md)
