<script>
    let { id, from = $bindable(), to = $bindable() } = $props()
</script>

<div {id}>
    from <input type="number" bind:value={from} max={to}>
    to <input type="number" bind:value={to} min={from}>
</div>