<script lang="ts">
    import { playAndRecord } from '../../logic/audio'
    import { appState } from '../../shared.svelte'
</script>

<section>
    <button onclick={() => playAndRecord(appState.tune, appState.recorder)}>Play</button>
</section>