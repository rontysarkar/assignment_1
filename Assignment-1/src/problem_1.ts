
const repeatString = (str:string , num : number) =>{
    let repeatStr = '';
    for(let i = 1; i<= num; i++){
        repeatStr = repeatStr + str
    }
    console.log(repeatStr);
}

repeatString("Hello!", 4)