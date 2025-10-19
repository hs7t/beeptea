<script lang="ts">
    import { downloadMorseTune, playSynthFrequency } from '../../logic/audio'
    import { encodeString } from '../../logic/morse';
    import { appState } from '../../shared.svelte'
</script>

<section>
    <button onclick={() => playSynthFrequency(500, "8n")}>play sound</button>
    <button onclick={() => downloadMorseTune(encodeString(appState.currentInputString))}>download sound</button>
</section>