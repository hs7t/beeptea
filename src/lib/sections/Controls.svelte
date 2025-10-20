<script lang="ts">
    import { appState } from "../../shared.svelte";
    import FromToNumberInput from "../components/inputs/FromToNumberInput.svelte"
    import Labeled from "../components/Labeled.svelte"
</script>

<section class="area controls-area">
    {#each Object.entries(appState.tuneOptions.ranges) as [key, range]}
        <Labeled labelText={key} labeledID={`${key}-range-input`}>
            <FromToNumberInput 
                id={`${key}-range-input`} 
                bind:from={
                    appState.tuneOptions.ranges[key as keyof typeof appState.tuneOptions.ranges].start
                } 
                bind:to={
                    appState.tuneOptions.ranges[key as keyof typeof appState.tuneOptions.ranges].end
                }
            ></FromToNumberInput>
        </Labeled>
    {/each}
</section>