<script lang="ts">
    import { encodeString } from '../../logic/morse'
    import { appState } from '../../shared.svelte'
    import TextVisualizer from '../components/TextVisualizer.svelte'
</script>

<section class="area encoding-area">
    <input type="text" bind:value={appState.userInput.currentString} id="stringInput">
    <TextVisualizer text={encodeString(appState.userInput.currentString)} />
</section>

<style>
    #stringInput {
        width: 100%;
    }
</style>