<script lang="ts">
    let { input, labelText, inputID } = $props()
</script>

<div class="labeled">
    <label for={inputID}>{labelText}</label>
    {@render input?.()}
</div>