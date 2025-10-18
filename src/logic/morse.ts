const CHARACTER_IMC = {
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

const SPECIAL = {
    wordBreak: "/",
    rest: " "

}

export const encodeCharacter = (char: string) => {
    return CHARACTER_IMC[char.toUpperCase() as keyof typeof CHARACTER_IMC] || ""
}

export const decodeCharacter = (char: string) => {
    return Object.keys(CHARACTER_IMC).find(key => CHARACTER_IMC[key as keyof typeof CHARACTER_IMC] === char) || "";
}

export const encodeString = (str: string) => {
    let result = ""

    for (let char of str) {
        if (char === " " && result.length != 0 && result.trim()[-1] != char) {
            result += ("/" + " ")
        } else {
            result += (encodeCharacter(char) + " ")
        }
    }

    return result
}

export const decodeString = (str: string) => {
    const signals = str.split(" ")
    let result = ""
    for (let signal of signals) {
        if (signal == SPECIAL.wordBreak) {
            result += " "
        } else {
            result += decodeCharacter(signal)
        }
    }
    return result
}