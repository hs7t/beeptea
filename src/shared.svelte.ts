import type {
    MorseFrequencyRanges,
    MorseFrequencyRangeSubdivisions,
    Tune,
} from './logic/audio'
import {
    defaultMorseFrequencyRangeSubdivisions,
    defaultMorseRanges,
} from './logic/audio'
import { encodeString } from './logic/morse'

export let appState = $state({
    userInput: {
        currentString: 'Hello, world!',
    },
    tune: [] as Tune,
    tuneOptions: {
        tone: {
            ranges: defaultMorseRanges as MorseFrequencyRanges,
            rangeSubdivisions:
                defaultMorseFrequencyRangeSubdivisions as MorseFrequencyRangeSubdivisions,
        },
    },
})

appState.tune = encodeString(appState.userInput.currentString)