## Prepare for the actual conversation

An engineering leadership interview needs different preparation from a coding round. This workflow starts with the role and the next stage, then connects company research, relevant experience, practice, and feedback. The candidate owns the facts and the conversation.

The workflow adapts Nora SuperIntelligence Lab’s existing interview-preparation material. The example below illustrates the preparation method; it does not claim a hiring outcome or a deployed interview product.

## Workflow

1. **Frame the opportunity.** Capture the job requirements, company context, interview format, and questions the candidate needs to resolve. Identify missing information before creating a preparation pack.
2. **Build the stage brief.** Match requirements to the candidate’s actual experience. Prepare relevant stories, technical questions, source links, and topics to investigate. Keep supported experience separate from areas still being learned.
3. **Rehearse the format.** Practice a coding problem, system-design discussion, or behavioral answer suited to the stage. Review clarity, technical reasoning, and what needs a better example.
4. **Debrief and carry forward.** Record questions asked, useful feedback, unresolved topics, and the next preparation action. Keep the updated brief alongside the earlier material.

## Example preparation pack

**Illustrative scenario: a platform-engineering system-design round.** No employer or candidate records are included.

> **Goal:** Explain a reliable event-processing design and its tradeoffs.
>
> **Preparation:** Choose one relevant experience story, sketch the data flow, and rehearse failure recovery, observability, and cost questions.
>
> **Practice question:** What happens when a consumer restarts after processing an event but before committing its offset?
>
> **Review action:** Make the delivery guarantees explicit and distinguish assumptions from decisions.

A useful pack contains a concise stage brief, a small set of supported experience stories, practice questions, a rehearsal plan, and a debrief with the next action. It should be easy to revise when the interview format changes.

## Candidate ownership

The candidate checks the experience stories, chooses what to emphasize, and answers in their own voice. Research, rehearsal feedback, and the stage brief support the candidate’s judgment.

## Connection to the lab

The method raises the same design questions as the lab’s knowledge assistant: which material grounds an answer, how context is retained, and what a person should review. See the [architecture](../../architecture/) for the current assistant’s service boundaries and [Validation](../../validation/) for its recorded technical checks.
