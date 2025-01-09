
// const repeatString = (str:string , num : number) =>{
//     let repeatStr = '';
//     for(let i = 1; i<= num; i++){
//         repeatStr = repeatStr + str
//     }
//     console.log(repeatStr);
// }

function repeatString(str:string,num:number){
    if(num < 0)throw new Error('num not active for negative value')
    console.log(str.repeat(num));
}

repeatString("Hello!", 4)