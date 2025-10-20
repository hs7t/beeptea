export type ValueOf<T> = T[keyof T]

export class Range {
    start: number
    end: number

    constructor(from: number, to: number) {
        this.start = from
        this.end = to
    }

    size(): number {
        return this.end - this.start
    }

    all(): Array<number> {
        let rangeArray = []
        for (let i = 0; i < this.size(); i++) {
            rangeArray.push(i + this.start)
        }
        return rangeArray
    }

    getRandom(): number {
        return Math.random() * (this.end - this.start) + this.start
    }

    getRandomInteger(): number {
        return Math.round(this.getRandom())
    }
}

export const wait = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

export const toIncrement = (increment: number, n: number) => {
    return n - (n % increment)
}

export const getKeyByValue = <T extends Record<string, any>>(
    obj: T,
    value: T[keyof T]
): keyof T | undefined => {
    return Object.keys(obj).find((key) => obj[key as keyof T] === value) as
        | keyof T
        | undefined
}