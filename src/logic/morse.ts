const CODEMAP = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.-",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    "\"": ".-..-.",
    "$": "...-..-",
    "@": ".--.-."
};

const MORSE_CHARACTERS = {
    bursts: {
        dit: '.',
        dah: '-',
    },
    special: {
        wordBreak: '/',
        rest: ' ',
    },
}

export const encodeCharacter = (char: string) => {
    return CODEMAP[char.toUpperCase() as keyof typeof CODEMAP] || ''
}

export const decodeCharacter = (char: string) => {
    return (
        Object.keys(CODEMAP).find(
            (key) => CODEMAP[key as keyof typeof CODEMAP] === char
        ) || ''
    )
}

export const encodeString = (str: string) => {
    let result = ''

    for (let char of str) {
        if (
            char === ' ' &&
            result.length != 0 &&
            result.trim().slice(-1) != MORSE_CHARACTERS.special.wordBreak
        ) {
            result += MORSE_CHARACTERS.special.wordBreak + ' '
        } else {
            result += encodeCharacter(char) + ' '
        }
    }

    return result
}

export const decodeString = (str: string) => {
    const signals = str.split(' ')
    let result = ''
    for (let signal of signals) {
        if (signal == MORSE_CHARACTERS.special.wordBreak) {
            result += ' '
        } else {
            result += decodeCharacter(signal)
        }
    }
    return result
}