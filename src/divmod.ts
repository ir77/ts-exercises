export type DivMod = {
    div: number,
    mod: number,
}

export function divmod(x: number, y: number): DivMod {
    return { div: x / y, mod: x % y }
}
