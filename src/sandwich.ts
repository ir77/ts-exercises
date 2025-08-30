export function sandwich(x: number, y: number, z: number): number {
    if (x <= y && y <= z) {
        return y
    }
    if (Math.abs(x - y) < Math.abs(z - y)) {
        return x
    }

    return z
}
