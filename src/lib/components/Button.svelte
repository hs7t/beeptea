<script>
    let {
        children = undefined,
        action,
        disabled = $bindable(false),
        id = 'button-r',
        primary = false,
    } = $props()
</script>

<button
    onclick={action}
    {disabled}
    {id}
    class={primary ? 'primary' : 'secondary'}
>
    {@render children?.()}
</button>

<style>
    button {
        background-color: var(--b-color-overlay-background);
        border: var(--b-border-secondary);
        border-radius: var(--b-radius-small);

        transition: all;

        display: inline-flex;
    }

    button:hover {
        background-color: #e1e1e1;
        transition: all 100ms;
    }

    button:active {
        transform: translateY(1pt);
    }
</style>