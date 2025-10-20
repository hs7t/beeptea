<script lang="ts">
    import { playAndRecord } from '../../logic/audio'
    import { appState, toggleRecorder } from '../../shared.svelte'

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
    <button onclick={() => toggleRecorder()}>Toggle recording (enabled: {recordingEnabled})</button>
    <button onclick={() => playAndRecord(appState.tune, appState.recorder)}>Play</button>
</section>