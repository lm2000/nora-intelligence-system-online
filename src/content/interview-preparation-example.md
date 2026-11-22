<h2 id="example-preparation-pack" data-index-label="Worked example">A brief that improves after review</h2>

**Fictional task:** prepare for a system-design round about order-event processing.

> **First draft:** “Use an idempotent consumer and commit the offset after processing.”
>
> **Senior Engineer finding:** This names a pattern but leaves the failure behavior unexplained. What happens if the process stops after committing the result but before committing the offset?
>
> **Revised brief:** Persist the event’s idempotency key and result atomically in the same transaction, then commit the offset. If the event is replayed, the stored key prevents a second application of the change. External side effects require their own idempotency or outbox design.
>
> **Next drill:** Explain that sequence in two minutes, including the transaction boundary and what changes when the side effect is external.

The candidate must still choose an actual experience example and explain their own contribution. The fictional exercise supplies a practice problem, not personal achievement evidence.

