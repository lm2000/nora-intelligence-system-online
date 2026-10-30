<h2 id="choose-one-useful-workflow" data-index-label="Purpose">Choose one useful workflow before building</h2>

For a team with several AI ideas, the first decision is which problem deserves a pilot and whether the available data can support it. This assessment method adapts the AI and data consulting material into a practical workflow: compare opportunities, inspect the data and architecture, choose a baseline, and define a first test.

<h2 id="assessment-inputs" data-index-label="Inputs">Start with the work and its owner</h2>

Gather a description of the current process, its users, the decision or work product to improve, representative data samples, existing systems, access boundaries, and an accountable owner. Ask the people doing the work where time is spent, where errors occur, and what would make an output useful.

<h2 id="assessment-workflow" data-index-label="Workflow">From discovery to a build decision</h2>

1. **Discover.** Map the current task with business, operations, and engineering stakeholders. Identify the user, the handoffs, and what completion means.
2. **Compare.** Review candidate use cases for value, data readiness, integration effort, review needs, and time to a useful test.
3. **Inspect.** Check representative samples, source quality, permissions, freshness, pipeline gaps, and operational constraints. In healthcare settings, include the handling of sensitive records and the appropriate domain reviewers.
4. **Define the pilot.** Choose one workflow, an agreed baseline, a small evaluation set, and a success criterion before implementation.
5. **Read out.** Produce a decision brief with the recommendation, unresolved gaps, build order, and the responsibilities needed to proceed.

<h2 id="example-readiness-decision" data-index-label="Example">An illustrative readiness decision</h2>

A fictional operations team is comparing three ideas. These decisions illustrate the method, not an assessment of a real organization.

<dl class="shortlist-example">
  <dt>Internal policy question answering · Pilot first</dt>
  <dd>Approved documents and a clear reviewer are available. Start with a small set of recurring questions and compare answer quality and review effort against the existing process.</dd>
  <dt>Operational demand forecasting · Prepare the data</dt>
  <dd>Historical records have inconsistent identifiers and missing outcomes. Resolve the data gaps and define the prediction target before comparing models.</dd>
  <dt>Autonomous record updates · Defer</dt>
  <dd>Ownership, permissions, and recovery behavior are unclear. Establish the action boundary and correction path before a system writes to operational records.</dd>
</dl>

### The selected pilot brief

> **User and task:** An operations colleague needs the answer to a recurring policy question.
>
> **Inputs:** A bounded set of approved documents and representative questions, with their expected supporting passages.
>
> **Work product:** A draft answer that a reviewer can compare with the source material.
>
> **Baseline:** Record the current search time, review effort, and common errors before building.
>
> **Test:** Compare the pilot with the baseline on the same questions; include ambiguous questions and missing information.
>
> **Decision:** Continue, revise, or stop based on usefulness, review burden, and the cost of running the workflow.

<h2 id="readiness-deliverables" data-index-label="Outputs">A decision brief the team can act on</h2>

The assessment produces a ranked opportunity list with reasons, a data and architecture gap review, review and access responsibilities, the pilot evaluation plan, and a roadmap in build order. Record effort and cost assumptions alongside the recommendation. If a use case is not ready, name the prerequisite that changes that decision.

The sequence can progress from assessment to a measured proof of concept, then to a production build with deployment, monitoring, recovery, and ownership. Each stage answers a different question; a successful demonstration alone does not establish an operable system.

<h2 id="decision-ownership" data-index-label="Human review">The team owns the decision</h2>

Business and domain owners decide which problem matters. Engineering establishes what can be integrated and operated. Reviewers judge whether the resulting work product is usable. Together they decide whether to invest, revise the scope, or leave the idea aside.

<h2 id="related-work" data-index-label="Related work">Related work</h2>

See the [AI coordinator walkthrough](../../walkthroughs/?flow=request&step=current-question) for a bounded question-answering example, [AI Harness Landscape](../ai-harness-landscape/) for product-comparison questions, or [client research and agency workflow](../client-research/) for a shortlist-to-decision method.
