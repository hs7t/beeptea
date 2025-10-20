import type {
    MorseFrequencyRanges,
    MorseFrequencyRangeSubdivisions,
    Tune,
} from './logic/audio'
import {
    defaultMorseFrequencyRangeSubdivisions,
    defaultMorseRanges,
    getTuneForMorse,
} from './logic/audio'
import { encodeString } from './logic/morse'

export let appState = $state({
    userInput: {
        currentString: 'Hello, world!',
    },
    get tune(): Tune {
        return getTuneForMorse(encodeString(appState.userInput.currentString))
    },
    tuneOptions: {
        tone: {
            ranges: defaultMorseRanges as MorseFrequencyRanges,
            rangeSubdivisions:
                defaultMorseFrequencyRangeSubdivisions as MorseFrequencyRangeSubdivisions,
        },
    },
})
