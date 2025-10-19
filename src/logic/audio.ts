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
     * @argument {number} frequency: A frequency in hz to play
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

// range -> createMorseFrequency
//  return randomInteger(range)

type MorseFrequencyRanges = {
    dot: Tools.Range
    dash: Tools.Range
    wordBreak: Tools.Range
    rest: Tools.Range
}

const defaultMorseRanges: MorseFrequencyRanges = {
    dot: new Tools.Range(300, 500),
    dash: new Tools.Range(550, 700),
    wordBreak: new Tools.Range(750, 770),
    rest: new Tools.Range(250, 270),
}

export const getFrequencyForMorse = async (
    character:
        | typeof Morse.MORSE_CHARACTERS.bursts
        | typeof Morse.MORSE_CHARACTERS.special,
    ranges: MorseFrequencyRanges = defaultMorseRanges
) => {}

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