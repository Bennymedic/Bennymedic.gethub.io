
export function convertFahrenheit(TempFahr:number):number{
    const TempCel = (TempFahr - 32) * 5/9;
    return TempCel;
}
console.log("expect 0: ", convertFahrenheit (32));
console.log("expect -17.7778: ", convertFahrenheit (0));
console.log("expect 100: ", convertFahrenheit (212));
