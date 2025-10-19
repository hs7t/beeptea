<script>
    let { id, from = $bindable(), to = $bindable() } = $props()
</script>

<div {id}>
    from <input type="number" bind:value={from}>
    to <input type="number" bind:value={to}>
</div>