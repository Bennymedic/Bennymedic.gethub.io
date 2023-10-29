//1
// function salesCommision(isSaleried, sales){
//     const minSales = 300;
//     const maxSales =500;
//     const minRate = 0.01;
//     const midRate =0.02;
//     const maxRate =0.03;
//     let commision;
//     if(sales < minSales){
//             commision = 0;
//             return commision;
//         }
//     if(isSaleried){
//         if(sales<=maxSales && sales >=minSales){
//             commision = sales * midRate;
//         }
//         else{
//             commision = sales * midRate;
//         }
//     }
//     else{
//         if(sales<=maxSales && sales >=minSales){
//             commision = sales * midRate;
//         }
//         else{
//             commision = sales * maxRate;
//         }
//     }
//     return commision;
// }

// //2 
// const age = prompt('please enter you age');
// while(age !== '18'){
//     age = prompt('please enter you age');
// }
//4
//i
function leanPatern(num){
    for(let i = 1; i <=5; i++){
        let outputs=[]
        for(let i = 1; i <=5; i++){
            outputs.push(i)
        }
        console.log(outputs.join(''))
    }
}
leanPatern(5)

//ii
function stepFL(num){
    let result;
    for (let i=1; i<=num; i++){
        let repeatedNum = i.toString().repeat(i);
        let space = ' '.repeat(num-i);
        result = repeatedNum + space;
        console.log(result)
    }
}
stepFL(5)

//iii
function stepLF(num){
    let result;
    for (let i=0; i<num; i++){
        let repeatedNum = (num-i).toString().repeat(num-i);
        let space = ' '.repeat(i);
        result = repeatedNum + space;
        console.log(result)
    }
}
stepLF(5)