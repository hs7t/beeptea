<script>
    let { text } = $props()
</script>

<div class="tune-visualizer">
    <p>{text}</p>
</div>

<style>
    .tune-visualizer {
        overflow-x: scroll;
        display: flex;
        align-items: center;
        border-radius: var(--b-radius-small);

        padding: 0.2rem;
        background-color: var(--b-color-overlay-background);
    }

    .tune-visualizer p {
        text-align: center;
        white-space: nowrap;
    }

    .tune-visualizer::-webkit-scrollbar {
        width: 0.6rem;
    }

    .tune-visualizer::-webkit-scrollbar-track {
        background: #e3e3e3;
        border-radius: 10pt;
    }
    
    .tune-visualizer::-webkit-scrollbar-thumb {
        background: #b3b3b3;
        border-radius: 10pt;
    }
</style>
