<script lang="ts">
    import { playAndRecord, tuneMorseToNotation } from '../../logic/audio'
    import { appState, toggleRecorder } from '../../shared.svelte'
    import Button from '../components/Button.svelte'
    import NotationVisualizer from '../components/NotationVisualizer.svelte'
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
    <h2>Play</h2>

    <NotationVisualizer {notation}></NotationVisualizer>
    <div>
        <Button action={() => playAndRecord(appState.tune, appState.recorder)} primary>Play</Button>
        <Button action={() => toggleRecorder()}>{recordingEnabled ? 'Disable' : 'Enable'} recorder</Button>
    </div>
</section>