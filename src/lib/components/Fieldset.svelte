<script lang="ts">
    let { children, labelText } = $props()
</script>

<fieldset>
    <legend>{labelText}</legend>
    {@render children?.()}
</fieldset>

<style>
    fieldset {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }
</style>
