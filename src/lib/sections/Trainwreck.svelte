<script lang="ts">
    import {downloadTestSound, playSynthFrequency} from '../../logic/audio'
</script>

<section>
    <button onclick={() => playSynthFrequency(500, "8n")}>play sound</button>
    <button onclick={downloadTestSound}>download sound</button>
</section>