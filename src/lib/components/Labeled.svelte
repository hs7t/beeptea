<script lang="ts">
    let { children, labelText, labeledID } = $props()
</script>

<div class="labeled">
    <label for={labeledID}>{labelText}</label>
    {@render children?.()}
</div>