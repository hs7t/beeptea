<script lang="ts">
    let { children, labelText, inputID } = $props()
</script>

<div class="labeled">
    <label for={inputID}>{labelText}</label>
    {@render children?.()}
</div>