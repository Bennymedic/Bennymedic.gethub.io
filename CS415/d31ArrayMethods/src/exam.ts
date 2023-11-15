//4
function firstLast(arr:string[]):Name[]{
    const result = arr.map(name => {
     let nameObj: Name = {firstName: name.split(' ')[0], lastName: name.split(' ')[1]};
     return nameObj;
    })
   
    return result;
  }
  const names = ['Menge Smith', 'Wengel Negewo', 'Tedy Beni']
  console.log(firstLast(names))

  //5
  function replaceInterior(arr:number[], first:number, last:number):number[]{
    const newArr = arr.slice();
    newArr.splice(0, 1, first);
    newArr.splice(newArr.length-1, 1, last)
    return newArr;
  }
   
  //6
  function squares(num:number):number{
    return num * num;
  }
  function cubes(num:number):number{
    return num * num * num;
  }
  function foo(callback: (num:number)=>number, inputNum:number):number{
    return callback(inputNum);
  }
  console.log(foo(squares, 5))
  console.log(foo(cubes, 5))
   
  //7a
  type Session= {
    userId:number,
    duration:number
   
  }
  type Day= {
    date:string,
    sessions:Session[]
  }
   
  //7b
  function calculateDailyTotalDuration(sessions:Session[]):number{
    let sum=0;
    for (const session of sessions){
      sum+=session.duration;
   
    }
  return sum;
  }
   
  //7c
  function calculateTotalDuration(dailyRecord:Day[]):number{
    let total=0;
    for(const day of dailyRecord){
      total+=calculateDailyTotalDuration(day.sessions)
    }
    return total;
  }
   
  //7d
  function getAllSessions(dailyRecord:Day[]):Session[]{
    let allSessions:Session[]=[];
    for(const days of dailyRecord){
      allSessions=allSessions.concat(days.sessions)
    }
    return allSessions;
   
  }
   
  //7e
  function getAllSessionsForUser(dailyRecord:Day[],userId:number):Session[]{
    const allSessions= getAllSessions(dailyRecord);
    const filtered=allSessions.filter(session=>session.userId===userId)
    return filtered;
  }
   
   
  //7f
  function getAllDurations(dailyRecord:Day[]):number[]{
    const allSessions=getAllSessions(dailyRecord);
    const allDuration=allSessions.map(session=>session.duration);
    return allDurationarr;




