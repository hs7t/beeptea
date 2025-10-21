<script lang="ts">
    import { playAndRecord, tuneMorseToNotation } from '../../logic/audio'
    import { appState, toggleRecorder } from '../../shared.svelte'
    import Button from '../components/Button.svelte'
    import NotationVisualizer from '../components/NotationVisualizer.svelte'

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
    
    const copyNotation = () => {
        navigator.clipboard.writeText(notation)
    } 
</script>

<section>
    <h2>Play</h2>

    <div class="recorder-visualizer">
        <NotationVisualizer {notation}></NotationVisualizer>
        <div>
            <Button action={() => playAndRecord(appState.tune, appState.recorder)} primary>Play</Button>
            <Button action={() => toggleRecorder()}>{recordingEnabled ? 'Disable' : 'Enable'} recorder</Button>
            <Button action={() => copyNotation()}>Copy notation</Button>
        </div>
    </div>
</section>

<style>
    .recorder-visualizer {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
</style>