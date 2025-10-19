import * as Tone from 'tone'
import * as Tools from './tools'
import * as Morse from './morse'

const synth = new Tone.Synth().toDestination()
const recorder = new Tone.Recorder()

synth.connect(recorder)

type InstrumentPlayerOptions = {
    considerReleaseTime: boolean | undefined
}

export const playSynthFrequency = async (
    frequency: number,
    time: string,
    options: InstrumentPlayerOptions | undefined = undefined
) => {
    /**
     * Plays a frequency on the synth.
     * @argument {number} frequency: A frequency in Hz to play
     * @argument {string} time: a tone.js time string (ex. "8n") that the note will play for
     * @argument {InstrumentPlayerOptions} options
     */
    await synth.triggerAttackRelease(frequency, time)

    let addedTime = 0
    if (options?.considerReleaseTime == true) {
        addedTime = Tone.Time(synth.envelope.release).toMilliseconds()
    }

    await Tools.wait(Tone.Time(time).toMilliseconds() + addedTime)
}

type MorseFrequencyRanges = {
    dit: Tools.Range
    dah: Tools.Range
    wordBreak: Tools.Range
    rest: Tools.Range
}

const defaultMorseRanges: MorseFrequencyRanges = {
    dit: new Tools.Range(300, 500),
    dah: new Tools.Range(550, 700),
    wordBreak: new Tools.Range(750, 770),
    rest: new Tools.Range(250, 270),
}

export const getFrequencyForMorse = async (
    signal:
        | Tools.ValueOf<typeof Morse.SIGNALS.bursts>
        | Tools.ValueOf<typeof Morse.SIGNALS.special>,
    ranges: MorseFrequencyRanges = defaultMorseRanges
) => {
    /**
     * @argument {string} signal: either a burst or special morse signal
     * @argument {MorseFrequencyRanges} ranges: a set of morse frequency ranges
     * @returns {number}: a Hz frequency for the signal
     */
    switch (signal) {
        case Morse.SIGNALS.bursts.dah:
            return ranges.dah.getRandomInteger()
        case Morse.SIGNALS.bursts.dit:
            return ranges.dit.getRandomInteger()
        case Morse.SIGNALS.special.wordBreak:
            return ranges.wordBreak.getRandomInteger()
        case Morse.SIGNALS.special.rest:
            return ranges.rest.getRandomInteger()
    }
}

export const createMorseTune = async (morseSequence: string) => {
    let frequencies = []

    for (let signal of morseSequence) {
        frequencies.push(signal)
    }
}

export const downloadTestSound = async () => {
    recorder.start()
    await playSynthFrequency(500, "8n")
    const recording = await recorder.stop()
    const recordingURL = URL.createObjectURL(recording)
    const anchor = document.createElement("a")
	anchor.download = "recording.webm"
	anchor.href = recordingURL
	anchor.click()
}