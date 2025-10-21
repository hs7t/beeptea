# beeptea

A little tool that turns text into 'tunes', fun audio puzzle versions of morse code.
The name's beeptea because... I don't know. 
[(Do you have other name ideas?)](mailto:ali@hvii.cc)

## How it works

### About tunes

A tune is a frequency-based representation of morse code. In a tune, every morse signal (like a dit or dah) is assigned frequency range in Hz.

This way, by giving up some flexibility with the frequency of the sound each signal makes, you can have a lot more fun with the timing!

Tunes are meant to be decoded by hand as a fun puzzle. Of course, it's not secure at all, but it's a bit clever, don't you think?

### What this website does

This website lets you create rudimentary, random-ish beepteas by

1. Converting your text into morse code
2. Letting you assign frequency ranges for different signals and the increments by which those signals can be assigned
3. Generating an audio file where each morse signal becomes a random tone within its assigned ranges with an also random beat length
4. Letting you download the result as a file!

In short, it's a simple implementation of a tune puzzle generator!

### About notation

Notation is a lossy, lineal way to visualize tunes that's useful when you're creating them.

As an example, this is notation for a tune that says 'hi!':
```
777 88 9 888 88 888 bbb 8 bbbb 9999 ccc ccc
```

The main unit of notation is the block. They're separated by spaces. In the example, `777`, `8` and `ccc` are all blocks. Every block is a morse signal.

Blocks follow 'notes' - the subdivisions of a frequency range - through time. `8` represents the note (subdivision) `8` played for one beat, and `ccc` the note (subdivision) `c` played for three beats.

Each block 


## Credits

### In use

- [tone.js](https://tonejs.github.io/), a lovely library for browser audio
- [Svelte](https://svelte.dev/), my love
- [Vite](https://vite.dev/)!

### More!

- [Josh W. Comeau's CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/)
