<script lang="ts">
    import { appState } from "../../shared.svelte";
</script>

<section class="area controls-area">
    {#each Object.entries(appState.tuneOptions.ranges) as [key, range]}
        {key}
    {/each}
</section>