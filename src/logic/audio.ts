import * as Tone from 'tone'
import * as Tools from './tools'

const synth = new Tone.Synth().toDestination()
const recorder = new Tone.Recorder()

synth.connect(recorder)

export const playSynthFrequency = async (frequency: number, time: string) => {
    await synth.triggerAttackRelease(frequency, time)
    await Tools.wait(Tone.Time(time).toMilliseconds())
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