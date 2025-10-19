<script lang="ts">
    import { encodeString } from '../../logic/morse'
    import { appState } from '../../shared.svelte'
    let encodedString = $derived(encodeString(appState.currentInputString))
</script>

<section class="area encoding-area">
    <textarea bind:value={appState.currentInputString}></textarea>
    <div>
        <p>{encodedString}</p>
    </div>
</section>