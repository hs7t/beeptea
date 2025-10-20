<script>
    let { text } = $props()
</script>

<div class="text-visualizer">
    <p>{text}</p>
</div>

<style>
    .text-visualizer {
        overflow-x: scroll;
        display: flex;
        align-items: center;
        border-radius: var(--b-radius-small);
        border: var(--b-border-secondary);

        padding: 0.8rem;
        background-color: var(--b-color-overlay-background);
    }

    .text-visualizer p {
        text-align: center;
        white-space: nowrap;
    }

    .text-visualizer::-webkit-scrollbar {
        width: 0.2rem;
    }

    .text-visualizer::-webkit-scrollbar-track {
        background: #dcdcdc;
        border-radius: 10pt;
    }
    
    .text-visualizer::-webkit-scrollbar-thumb {
        background: #b3b3b3;
        border-radius: 10pt;
    }
</style>
