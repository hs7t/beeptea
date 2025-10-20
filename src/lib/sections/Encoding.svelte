<script lang="ts">
    import { encodeString } from '../../logic/morse'
    import { appState } from '../../shared.svelte'
</script>

<section class="area encoding-area">
    <textarea bind:value={appState.userInput.currentString}></textarea>
    <div>
        <p>{encodeString(appState.userInput.currentString)}</p>
    </div>
</section>