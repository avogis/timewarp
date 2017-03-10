export function calculateDateBalance(startDate, stopDate){
    const dateDiff = stopDate - startDate;
    const minutes = dateDiff / 60000;
    return Math.round(minutes - 480);
}
