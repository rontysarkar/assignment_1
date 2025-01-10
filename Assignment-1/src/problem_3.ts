{
//
//Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.


// const filterEvenNumbers = (numArr:number[]):number[] =>{
//     let evenNum:number[] = []

//     for(let i = 0;i<numArr.length;i++){
//         if(numArr[i]%2==0){
//             evenNum.push(numArr[i])
//         }
//     }
//     console.log(evenNum);
//     return evenNum


// }

// filter even number using filter

// const filterEvenNumbers = (numArr : number[]):number[] =>{
//    const evenNum = numArr.filter((n:number)=> n%2===0)
//    return evenNum;
// }






const filterEvenNumbers = (numbers:number[]):number[] =>
    numbers.reduce((acc,num)=>{
        if(num % 2 === 0) acc.push(num);
        return acc;
    },[] as number[]);


// Sample Input:
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6,8,2]));

// Sample Output:
//[2, 4, 6]



//
}