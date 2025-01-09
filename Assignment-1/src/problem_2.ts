{
// Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.

const findLargestNumber = (num:number[])  => {
    let lar = 0;
    for(let i =0;i<num.length;i++){
        let value = num[i]
        if(value > lar){
            lar = value
        }
    }
    return lar
}

const arrayNumber: number[]  = [10, 5, 8, 20, 3]

const largestNum = findLargestNumber(arrayNumber)
console.log(largestNum);


const largestNum1 = (num1:number[]):number =>{
    if(num1.length === 0){
        console.log("your array are empty");
    }

    return Math.max(...num1)
}

console.log(largestNum1([2,4,57,10,6,7]));


function findLargestNumberUsingSet(numbers: number[]): number {
    if (numbers.length === 0) throw new Error("Array cannot be empty");
  
    const uniqueNumbers = Array.from(new Set(numbers));
    return Math.max(...uniqueNumbers);
  }




//
}
