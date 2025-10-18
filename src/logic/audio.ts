import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination();

export const playTestSound = () => {
    synth.triggerAttackRelease("C4", "8n");
}