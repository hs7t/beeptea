import * as Tone from 'tone'
import * as Tools from './tools'

const synth = new Tone.Synth().toDestination()
const recorder = new Tone.Recorder()

synth.connect(recorder)

export const playSynthFrequency = async (frequency: number, time: string, considerReleaseTime: boolean = true) => {
    /**
     * Plays a frequency on the synth.
     * @argument frequency: A frequency in hz to play
     * @argument time: a tone.js time string (ex. "8n") that the note will play for
     */
    await synth.triggerAttackRelease(frequency, time)
    
    let addedTime = 0;
    if (considerReleaseTime == true) {
        addedTime = Tone.Time(synth.envelope.release).toMilliseconds()
    }

    await Tools.wait(Tone.Time(time).toMilliseconds() + addedTime)
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