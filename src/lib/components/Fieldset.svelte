<script lang="ts">
    let { children, labelText } = $props()
</script>

<div class="labeled">
    <fieldset>
        <legend >{labelText}</legend>
        {@render children?.()}
    </fieldset>
</div>