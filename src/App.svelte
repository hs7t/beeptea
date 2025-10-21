<script lang="ts">
    import Controls from './lib/sections/Controls.svelte'
    import Encoding from './lib/sections/Encoding.svelte'
    import Player from './lib/sections/Player.svelte'
</script>

<main>
    <Encoding />
    <Controls />
    <Player />
</main>

<footer>
</footer>

<style>
    :global(#app) {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        width: 80dvw;
        padding-top: 10dvh;
        padding-bottom: 10dvh;
        margin: auto;
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        gap: 1rem;
    }

    :global(section) {
        background-color: var(--b-color-section-background);

        display: flex;
        flex-direction: column;

        border: var(--b-border-sectional);
        border-radius: var(--b-radius-large);

        padding: 1rem;
        flex-grow: 1;
        max-width: 100%;

        gap: 1em;
    }

    footer {
        opacity: 80%;
    }
</style>
