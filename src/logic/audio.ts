import * as Tone from 'tone'
import * as Tools from './tools'
import * as Morse from './morse'
import type { Time } from 'tone/build/esm/core/type/Units'

const synth = new Tone.Synth().toDestination()
const recorder = new Tone.Recorder()

synth.connect(recorder)

type InstrumentPlayerOptions = {
    considerReleaseTime?: boolean | undefined
    startTime?: Time | undefined
}

export const playSynthFrequency = async (
    frequency: number,
    time: string,
    options?: InstrumentPlayerOptions | undefined
) => {
    /**
     * Plays a frequency on the synth.
     * @argument {number} frequency: A frequency in Hz to play
     * @argument {string} time: a tone.js time string (ex. "8n") that the note will play for
     * @argument {InstrumentPlayerOptions} options
     * @argument {Time} startTime: A time to start the note at (if unset, Tone.now())
     */

    const scheduledTime = options?.startTime ?? Tone.now()

    await synth.triggerAttackRelease(frequency, time, scheduledTime)

    let addedTime = 0
    if (options?.considerReleaseTime == true) {
        addedTime = Tone.Time(synth.envelope.release).toMilliseconds()
    }

    await Tools.wait(Tone.Time(time).toMilliseconds() + addedTime)
}

export type MorseFrequencyRanges = {
    dit: Tools.Range
    dah: Tools.Range
    wordBreak: Tools.Range
    rest: Tools.Range
}

export const defaultMorseRanges: MorseFrequencyRanges = {
    dit: new Tools.Range(350, 500),
    dah: new Tools.Range(550, 700),
    wordBreak: new Tools.Range(750, 800),
    rest: new Tools.Range(250, 300),
}

export type MorseFrequencyRangeSubdivisions = {
    dit: number,
    dah: number,
    wordBreak: number,
    rest: number,
}

export const defaultMorseFrequencyRangeSubdivisions: MorseFrequencyRangeSubdivisions = {
    dit: 50,
    dah: 50,
    wordBreak: 50,
    rest: 50
}

export const getFrequencyForMorse = (
    signal:
        | Tools.ValueOf<typeof Morse.SIGNALS.bursts>
        | Tools.ValueOf<typeof Morse.SIGNALS.special>,
    ranges: MorseFrequencyRanges = defaultMorseRanges,
    rangeSubdivisions: MorseFrequencyRangeSubdivisions = defaultMorseFrequencyRangeSubdivisions
) => {
    /**
     * @argument {string} signal: either a burst or special morse signal
     * @argument {MorseFrequencyRanges} ranges: a set of morse frequency ranges
     * @returns {number}: a Hz frequency for the signal
     */

    let frequency = 0
    let rangeIncrements = 0

    switch (signal) {
        case Morse.SIGNALS.bursts.dah:
            frequency = ranges.dah.getRandomInteger()
            rangeIncrements = rangeSubdivisions.dah
            break
        case Morse.SIGNALS.bursts.dit:
            frequency = ranges.dit.getRandomInteger()
            rangeIncrements = rangeSubdivisions.dit
            break
        case Morse.SIGNALS.special.wordBreak:
            frequency = ranges.wordBreak.getRandomInteger()
            rangeIncrements = rangeSubdivisions.wordBreak
            break
        case Morse.SIGNALS.special.rest:
            frequency = ranges.rest.getRandomInteger()
            rangeIncrements = rangeSubdivisions.rest
            break
    }

    frequency = Tools.toIncrement(rangeIncrements, frequency)
    return frequency
}

export type Block = {
    frequency: number,
    beatLength: number
}

export type Tune = Array<Block>

export const getRandomBlockBeatlength = (bounds: Tools.Range = new Tools.Range(1, 4)) => {
    return bounds.getRandomInteger()
}

export const getTuneForMorse = (
    morseSequence: string,
    ranges: MorseFrequencyRanges = defaultMorseRanges,
    rangeSubdivisions: MorseFrequencyRangeSubdivisions = defaultMorseFrequencyRangeSubdivisions,
    beatLengthBounds: Tools.Range = new Tools.Range(1, 4)
) => {
    let tune: Tune = []
    for (let signal of morseSequence) {
        const block: Block = {
            frequency: getFrequencyForMorse(signal, ranges, rangeSubdivisions), 
            beatLength: getRandomBlockBeatlength(beatLengthBounds)
        }
        tune.push(block)
    }
}

export const playTune = async (tune: Tune) => {
    let startTime = Tone.now()
    let currentTime = startTime
    for (let block of tune) {
        await playSynthFrequency(block.frequency, '3n', { startTime: currentTime })
        currentTime += Tone.Time('3n').toSeconds()
    }

}

export const playMorseTune = async (morseSequence: string) => {
    let frequencies = []
    for (let signal of morseSequence) {
        let frequency = getFrequencyForMorse(signal)
        frequencies.push(frequency)
    }

    let startTime = Tone.now()
    let currentTime = startTime
    for (let signal of morseSequence) {
        let frequency = getFrequencyForMorse(signal)
        await playSynthFrequency(frequency, '3n', { startTime: currentTime })
        currentTime += Tone.Time('3n').toSeconds()
    }
}

export const downloadMorseTune = async (morseSequence: string) => {
    recorder.start()
    await playMorseTune(morseSequence)
    const recording = await recorder.stop()
    const recordingURL = URL.createObjectURL(recording)
    const anchor = document.createElement('a')
    anchor.download = 'recording.webm'
    anchor.href = recordingURL
    anchor.click()
}