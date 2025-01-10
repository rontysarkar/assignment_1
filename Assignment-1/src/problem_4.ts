{
//Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

// const reverseArray =<T>(arr:T[]): T[] =>{
//      return arr.reverse()
// }

// const reverseArray = <T>(arr: T[]): T[] =>{
//      let reverseArr:T[] = []
     
//      for(let i = 0;i<arr.length;i++){
//         reverseArr.unshift(arr[i])
//      }
//      return reverseArr

// }

const reverseArray = <T>(arr: T[]): T[] =>{
    let reverseArr:T[] = []
    
    for(let i = 0;i<arr.length;i++){
       reverseArr = [arr[i],...reverseArr]
    }
    return reverseArr

}


console.log(reverseArray(["apple", "banana", "cherry",'ronty']));
console.log(reverseArray([10, 20, 30]));

//
}