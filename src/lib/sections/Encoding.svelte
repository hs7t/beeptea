<script lang="ts">
    import { encodeString } from '../../logic/morse'
    import { appState } from '../../shared.svelte'

    import TextVisualizer from '../components/TextVisualizer.svelte'
</script>

<section class="area encoding-area">
    <h2>Encoding</h2>

    <div class="input-preview">
        <input
            type="text"
            bind:value={appState.userInput.currentString}
            id="stringInput"
        />
        <TextVisualizer text={encodeString(appState.userInput.currentString)} />
    </div>
</section>

<style>
    #stringInput {
        width: 100%;
    }

    .input-preview {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
</style>
