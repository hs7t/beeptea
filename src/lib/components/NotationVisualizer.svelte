<script>
    let { notation } = $props()
</script>

<div class="notation-visualizer">
    <p>{notation}</p>
</div>

<style>
    .notation-visualizer {
        overflow-x: scroll;
        display: flex;
        align-items: center;
        border-radius: var(--b-radius-small);

        padding: 0.2rem;
        background-color: var(--b-color-overlay-background);
    }

    .notation-visualizer p {
        text-align: center;
        white-space: nowrap;
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
