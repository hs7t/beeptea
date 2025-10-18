import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination();

const playTestSound = () => {
    synth.triggerAttackRelease("C4", "8n");
}