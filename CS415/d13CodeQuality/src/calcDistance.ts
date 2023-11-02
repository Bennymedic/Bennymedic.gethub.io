export function calcDistance(x1:number, y1:number, x2:number, y2:number):number{
    const distance = Math.sqrt(((x2 - x1)**2) + (y2 - y1)**2);
    return distance;
}
console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));

