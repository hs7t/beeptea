<script>
    import { tuneMorseToNotation } from '../../logic/audio'
    import { appState } from '../../shared.svelte'

    let notation = $derived(
        tuneMorseToNotation(
            appState.tune,
            appState.tuneOptions.tone.ranges,
            appState.tuneOptions.tone.rangeSubdivisions
        )
    )
</script>

<div>
    <p>{notation}</p>
    <textarea></textarea>
</div>
