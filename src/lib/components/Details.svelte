<script>
    let { children, summary = 'Details' } = $props()
</script>

<details>
    <summary>{summary}</summary>
    {@render children?.()}
</details>

<style>
    details {
        border: var(--b-border-secondary);
        border-radius: 4px;
        padding: 0.5em 0.5em 0;
        transition: all 100ms;
    }

    summary {
        margin: -0.5em -0.5em 0;
        padding: 0.5em;
        user-select: none;
        cursor: pointer;
        transition: all 50ms;
    }

    summary:hover {
        font-weight: 600;
    }

    details:not([open]) {
        height: auto;
        transition: all 100ms;
    }

    details[open] {
        padding: 0.5em;
    }

    details[open] summary {
        border-bottom: var(--b-border-secondary);
        margin-bottom: 0.5em;
        font-weight: 600;
    }
</style>
