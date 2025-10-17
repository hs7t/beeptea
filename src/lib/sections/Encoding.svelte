<script lang="ts">
    import { encodeString, decodeString } from '../../logic/morse'
    let encoderTextInput = $state("")
    let encodedInput = $derived(encodeString(encoderTextInput))
</script>

<section class="area encoding-area">
    <textarea bind:value={encoderTextInput}></textarea>
    <div>
        <p>{encodedInput}</p>
    </div>
</section>