<script>
    import { tuneToNotation } from "../../logic/audio"
    import { appState } from "../../shared.svelte"

    let notation = $derived(tuneToNotation(appState.tune))
</script>
<div>
    <p>{notation}</p>
    <textarea></textarea>
</div>