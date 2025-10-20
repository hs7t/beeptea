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

appState.tune = getTuneForMorse(appState.userInput.currentString)