<script>
    let { id, from = $bindable(), to = $bindable() } = $props()
</script>

<div {id}>
    <label for={id + "from"}>from</label>
    <input id={id + "from"} type="number" bind:value={from} max={to} />

    <label for={id + "to"}>to</label>
    <input id={id + "from"} type="number" bind:value={to} min={from} />
</div>
