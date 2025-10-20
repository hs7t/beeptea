import type { MorseFrequencyRanges, MorseFrequencyRangeSubdivisions } from './logic/audio'
import { defaultMorseFrequencyRangeSubdivisions, defaultMorseRanges } from './logic/audio'

export let appState = $state({
    currentInputString: 'Hello, world!',
    tune: [],
    tuneOptions: {
        tone: {
            ranges: defaultMorseRanges as MorseFrequencyRanges,
            rangeSubdivisions:
                defaultMorseFrequencyRangeSubdivisions as MorseFrequencyRangeSubdivisions,
        },
    },
})
