<script>
    let { from = $bindable(), to = $bindable() } = $props()
</script>

<div>
    from <input type="number" bind:value={from}>
    to <input type="number" bind:value={to}>
</div>