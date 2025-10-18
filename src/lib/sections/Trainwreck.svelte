<script lang="ts">
    import {downloadTestSound, playTestSound} from '../../logic/audio'
</script>

<section>
    <button onclick={playTestSound}>play sound</button>
    <button onclick={downloadTestSound}>download sound</button>
</section>