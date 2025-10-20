<script lang="ts">
    import { playAndRecord, tuneMorseToNotation } from '../../logic/audio'
    import { appState, toggleRecorder } from '../../shared.svelte'
    import Button from '../components/Button.svelte'
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
        <Button action={() => playAndRecord(appState.tune, appState.recorder)}>Play</Button>
        <Button action={() => toggleRecorder()}>{recordingEnabled ? 'Enable' : 'Disable'} recorder</Button>
    </div>
</section>