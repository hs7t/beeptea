<script>
    let {children, summary = "Details"} = $props()
</script>

<details>
    <summary>{summary}</summary>
    {@render children?.()}
</details>