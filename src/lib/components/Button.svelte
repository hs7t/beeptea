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
