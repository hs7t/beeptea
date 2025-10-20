<script lang="ts">
    import { encodeString } from '../../logic/morse'
    import { appState } from '../../shared.svelte'
</script>

<section class="area encoding-area">
    <input type="text" bind:value={appState.userInput.currentString} id="stringInput">
    <div>
        <p>{encodeString(appState.userInput.currentString)}</p>
    </div>
</section>

<style>
    #stringInput {
        width: 100%;
    }
</style>