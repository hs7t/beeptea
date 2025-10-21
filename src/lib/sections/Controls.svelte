<script lang="ts">
    import { appState } from '../../shared.svelte'
    import FromToNumberInput from '../components/inputs/FromToNumberInput.svelte'
    import Fieldset from '../components/Fieldset.svelte'
    import Details from '../components/Details.svelte'
</script>

<section class="area controls-area">
    <h2>Options</h2>
    <Details summary="Frequency ranges">
        {#each Object.entries(appState.tuneOptions.tone.ranges) as [key, range]}
            <Fieldset labelText={`${key}`}>
                <FromToNumberInput
                    id={`${key}-range-input`}
                    bind:from={
                        appState.tuneOptions.tone.ranges[
                            key as keyof typeof appState.tuneOptions.tone.ranges
                        ].start
                    }
                    bind:to={
                        appState.tuneOptions.tone.ranges[
                            key as keyof typeof appState.tuneOptions.tone.ranges
                        ].end
                    }
                ></FromToNumberInput>
                <div>
                    <label for={key + "subdivision-input"}>divide by:</label>
                    <input
                        id={key + "subdivision-input"}
                        type="number"
                        bind:value={
                            appState.tuneOptions.tone.rangeSubdivisions[
                                key as keyof typeof appState.tuneOptions.tone.rangeSubdivisions
                            ]
                        }
                    />
                </div>
            </Fieldset>
        {/each}
    </Details>
</section>
