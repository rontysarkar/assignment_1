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
  if (typeof value === "number") {
    console.log(value.toFixed(2)); // Works
  } else {
    console.log(value.toUpperCase()); // Works for string
  }
}

function logValue(value: string | number) {
  if (typeof value === "number") {
    console.log(value.toFixed(2)); // Works
  } else {
    console.log(value.toUpperCase()); // Works for string
  }
}

function logValue(value: string | number) {
  if (typeof value === "number") {
    console.log(value.toFixed(2)); // Works
  } else {
    console.log(value.toUpperCase()); // Works for string
  }
}

  {
    function groupBy<T, K extends keyof any>(array: T[], key: (item: T) => K): Record<K, T[]> {
      return array.reduce((result, item) => {
        const groupKey = key(item);
        if (!result[groupKey]) {
          result[groupKey] = []; // Initialize a new group if it doesn't exist
        }
        result[groupKey].push(item); // Add the item to the appropriate group
        return result;
      }, {} as Record<K, T[]>);
    }
    
    // Example usage
    const people = [
      { name: 'Alice', age: 30, city: 'New York' },
      { name: 'Bob', age: 25, city: 'Los Angeles' },
      { name: 'Charlie', age: 30, city: 'New York' },
      { name: 'David', age: 25, city: 'Chicago' },
    ];
    
    const groupedByAge = groupBy(people, person => person.age);
    console.log(groupedByAge);
    /*
    {
      30: [
        { name: 'Alice', age: 30, city: 'New York' },
        { name: 'Charlie', age: 30, city: 'New York' }
      ],
      25: [
        { name: 'Bob', age: 25, city: 'Los Angeles' },
        { name: 'David', age: 25, city: 'Chicago' }
      ]
    }
    */
    
    const groupedByCity = groupBy(people, person => person.city);
    console.log(groupedByCity);
    /*
    {
      "New York": [
        { name: 'Alice', age: 30, city: 'New York' },
        { name: 'Charlie', age: 30, city: 'New York' }
      ],
      "Los Angeles": [
        { name: 'Bob', age: 25, city: 'Los Angeles' }
      ],
      "Chicago": [
        { name: 'David', age: 25, city: 'Chicago' }
      ]
    }
    */
    
  }