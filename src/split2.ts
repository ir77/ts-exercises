export function split2(text: string): string[] {
    return text.split(/[\s,]+/).
        filter(s => s.length > 0);
}
