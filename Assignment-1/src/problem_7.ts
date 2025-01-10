{
//Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

const logString = (str:unknown) =>{
    if(typeof str === "string"){
      console.log(`yes str is a string `);
    }else{
        throw new Error("Input is not a string.");

    }
}

// Sample Input 1: 
logString("Hello, TypeScript!")

logString(42)

// Sample Input 2: 


// Output: Error: 



//
}