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
    recorder: getRecorder() as Recorder | undefined,
    get tune() {
        return getTune()
    },
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

const tune = $derived(
    getTuneForMorse(
        encodeString(appState.userInput.currentString),
        appState.tuneOptions.tone.ranges,
        appState.tuneOptions.tone.rangeSubdivisions
    )
)

function getTune() {
    return tune ?? undefined
}