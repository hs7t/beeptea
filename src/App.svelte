<script lang="ts">
  import Controls from "./lib/sections/Controls.svelte"
  import Encoding from "./lib/sections/Encoding.svelte";
  import Player from "./lib/sections/Player.svelte"
</script>

<main>
    <Encoding />
    <Controls />
    <Player />
</main>

<style>
    main {
        width: 80dvw;
        padding-top: 10dvh;
        padding-bottom: 10dvh;
        margin: auto;

        display: flex;
        flex-direction: column;

        gap: 1rem;
    }

    :global(section) {
        border: var(--b-border-sectional);
        border-radius: var(--b-radius-large);
        padding: 1rem;
    }
</style>