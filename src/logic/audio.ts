import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination();
const recorder = new Tone.Recorder()

export const playTestSound = () => {
    synth.triggerAttackRelease("C4", "8n");
}

export const downloadTestSound = () => {
    recorder.start()
}