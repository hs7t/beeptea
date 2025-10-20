<script lang="ts">
  import Controls from "./lib/sections/Controls.svelte"
    import Editing from "./lib/sections/Editing.svelte"
  import Encoding from "./lib/sections/Encoding.svelte";
  import Player from "./lib/sections/Player.svelte"
</script>

<main>
    <Encoding />
    <Controls />
    <Player />
    <Editing />
</main>

<style>
    main {
        width: 80dvw;
        padding-top: 10dvh;
        padding-bottom: 10dvh;
        margin: auto;

        display: flex;
        flex-direction: column;
    }

</style>