let name: string | undefined;
console.log(name); // Okay, but it might be `undefined`

// Or initialize it
let name2: string = "John";
console.log(name2); // Works fine


function logValue(value: string | number) {
    if (typeof value === "number") {
      console.log(value.toFixed(2)); // Works
    } else {
      console.log(value.toUpperCase()); // Works for string
    }
  }


  function logValue(value: string | number) {
    console.log(value.toFixed(2)); // Error: Property 'toFixed' does not exist on type 'string'
  }

  
  function logValue(value: string | number) {
    if (typeof value === "number") {
      console.log(value.toFixed(2)); // Works
    } else {
      console.log(value.toUpperCase()); // Works for string
    }
  }
  
  