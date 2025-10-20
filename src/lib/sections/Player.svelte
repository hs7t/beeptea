<script lang="ts">
    import { playAndRecord, tuneMorseToNotation } from '../../logic/audio'
    import { appState, toggleRecorder } from '../../shared.svelte'
    import TextVisualizer from '../components/TextVisualizer.svelte'

    let notation = $derived(
        tuneMorseToNotation(
            appState.tune,
            appState.tuneOptions.tone.ranges,
            appState.tuneOptions.tone.rangeSubdivisions
        )
    )

    let recordingEnabled = $state(false)

    $effect(() => {
        if (appState.recorder != undefined) {
            recordingEnabled = true
        } else {
            recordingEnabled = false
        }
    })
</script>

<section>
    <TextVisualizer text={notation}></TextVisualizer>
    <div>
        <button onclick={() => toggleRecorder()}>Toggle recording (enabled: {recordingEnabled})</button>
        <button onclick={() => playAndRecord(appState.tune, appState.recorder)}>Play</button>
    </div>
</section>