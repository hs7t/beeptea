import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination();
const recorder = new Tone.Recorder()

export const playTestSound = async () => {
    await synth.triggerAttackRelease(500, "8n");
}

export const downloadTestSound = async () => {
    recorder.start()
    await playTestSound()
    const recording = await recorder.stop()
    const recordingURL = URL.createObjectURL(recording)
    const anchor = document.createElement("a")
	anchor.download = "recording.webm";
	anchor.href = recordingURL;
	anchor.click();

}