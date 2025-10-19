import type { MorseFrequencyRanges } from './logic/audio'
import { defaultMorseRanges } from './logic/audio'

export let appState = $state({
    currentInputString: 'Hello, world!',
    tuneOptions: {
        ranges: defaultMorseRanges as MorseFrequencyRanges,
    },
})
