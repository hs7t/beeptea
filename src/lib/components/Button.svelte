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
    }
</style>