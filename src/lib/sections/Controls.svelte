<script lang="ts">
    import { appState } from "../../shared.svelte";
    import FromToNumberInput from "../components/inputs/FromToNumberInput.svelte"
    import Fieldset from "../components/Fieldset.svelte"
    import Details from "../components/Details.svelte"
</script>

<section class="area controls-area">
    <h2>Options</h2>
    <Details summary="Frequency ranges">
        {#each Object.entries(appState.tuneOptions.ranges) as [key, range]}
            <Fieldset labelText={`${key}`}>
                <FromToNumberInput 
                    id={`${key}-range-input`} 
                    bind:from={
                        appState.tuneOptions.ranges[key as keyof typeof appState.tuneOptions.ranges].start
                    } 
                    bind:to={
                        appState.tuneOptions.ranges[key as keyof typeof appState.tuneOptions.ranges].end
                    }
                ></FromToNumberInput>
            </Fieldset>
        {/each}
    </Details>
</section>