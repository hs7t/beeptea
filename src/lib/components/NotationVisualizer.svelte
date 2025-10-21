<script>
    let { notation } = $props()

    let blocks = $derived(notation.split(" "))
</script>

<div class="notation-visualizer">
    {#each blocks as block}
        <span class="block">{block}</span>
    {/each}
</div>

<style>
    .notation-visualizer {
        overflow-x: scroll;
        display: flex;
        align-items: center;
        border-radius: var(--b-radius-small);

        padding: 0.2rem;
        gap: 1ch;
        background-color: var(--b-color-overlay-background);
    }

    .notation-visualizer .block {
        border: solid 0.1ch #d3d3d3;
        background-color: #ffffff;
        border-radius: 3pt;
        padding: 0.5ch;
        text-align: center;
        white-space: nowrap;
        transition: all 400ms;
        user-select: none;
    }

    .notation-visualizer .block:hover {
        transform: rotate(4deg);
    }

    .notation-visualizer .block:active {
        transform: scale(1.06) rotate(0);
    }

    .notation-visualizer::-webkit-scrollbar {
        width: 0.6rem;
    }

    .notation-visualizer::-webkit-scrollbar-track {
        background: #e3e3e3;
        border-radius: 10pt;
    }
    
    .notation-visualizer::-webkit-scrollbar-thumb {
        background: #b3b3b3;
        border-radius: 10pt;
    }
</style>
