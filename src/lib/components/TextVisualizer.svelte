<script>
    let { text } = $props()
</script>

<div class="text-visualizer">
    <p>{text}</p>
</div>

<style>
    .text-visualizer {
        overflow-y: scroll;

        display: flex;
        align-items: center;
    }

    .text-visualizer p {
        text-align: center;
    }

    .text-visualizer::-webkit-scrollbar {
        display: none;
    }
</style>
