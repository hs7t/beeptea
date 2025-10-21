<script>
    let {
        children = undefined,
        action,
        disabled = $bindable(false),
        id = 'button-r',
        primary = false,
        style = '',
    } = $props()
</script>

<button
    onclick={action}
    {disabled}
    {id}
    class={primary ? 'primary' : 'secondary'}
    {style}
>
    {@render children?.()}
</button>

<style>
    button {
        background-color: var(--b-color-overlay-background);
        border: var(--b-border-secondary);
        border-radius: var(--b-radius-small);

        padding: 0.6ch;

        transition: all;

        display: inline-flex;
    }

    button.primary {
        background-color: var(--b-color-accent-1);
        color: var(--b-color-accent-1-contrast);
        border: none;
    }

    button:hover {
        background-color: #e1e1e1;
        transition: all 100ms;
    }

    button.primary:hover {
        background-color: var(--b-color-accent-2);
    }

    button:active {
        transform: translateY(1pt);
    }
</style>
