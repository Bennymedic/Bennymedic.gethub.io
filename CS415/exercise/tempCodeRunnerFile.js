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