export type DivMod = {
    div: number,
    mod: number,
}

export function divmod(x: number, y: number): DivMod {
    return { 
        div: Math.trunc(x / y), 
        mod: x % y
    }
}
