import type { Recorder } from 'tone'
import type {
    MorseFrequencyRanges,
    MorseFrequencyRangeSubdivisions,
    Tune,
} from './logic/audio'
import {
    defaultMorseFrequencyRangeSubdivisions,
    defaultMorseRanges,
    getRecorder,
    getTuneForMorse,
} from './logic/audio'
import { encodeString } from './logic/morse'

export let appState = $state({
    userInput: {
        currentString: 'Hello, world!',
    },
    tune: [] as Tune,
    recorder: getRecorder() as Recorder | undefined,
    tuneOptions: {
        tone: {
            ranges: defaultMorseRanges as MorseFrequencyRanges,
            rangeSubdivisions:
                defaultMorseFrequencyRangeSubdivisions as MorseFrequencyRangeSubdivisions,
        },
    },
})

export const toggleRecorder = () => {
    if (appState.recorder != undefined) {
        appState.recorder = undefined
    } else {
        appState.recorder = getRecorder()
    }
}

export let refreshTune = () => {
    appState.tune = getTuneForMorse(
        encodeString(appState.userInput.currentString),
        appState.tuneOptions.tone.ranges,
        appState.tuneOptions.tone.rangeSubdivisions
    )
}

refreshTune()