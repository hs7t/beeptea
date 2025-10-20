<script lang="ts">
    import { playAndRecord } from '../../logic/audio'
    import { appState } from '../../shared.svelte'
</script>

<section>
    <button onclick={() => playAndRecord(appState.tune)}>download sound</button>
</section>