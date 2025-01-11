
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

function sumOfArray(numbers: number[]): number {
    let sum = 0; // Initialize sum to 0
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]; // Add each number in the array to sum
    }
    return sum; // Return the total sum
  }
  
  // Example usage
  const nums = [1, 2, 3, 4, 5];
  console.log(sumOfArray(nums)); // Output: 15