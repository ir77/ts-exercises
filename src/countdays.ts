export function countdays(month: number, day: number): number {
    const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonths
        .slice(0, month - 1)
        .reduce((a, b) => a + b, 0) + (day - 1);
    // let totalDays = 0;

    // for (let m = 1; m < month; m++) {
    //     totalDays += daysInMonths[m - 1];
    // }
    // totalDays += day - 1;
    // return totalDays;
}
