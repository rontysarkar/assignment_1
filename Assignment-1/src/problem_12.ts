{
    function deepClone<T>(obj: T): T {
        // Check if the value is an object or an array
        if (typeof obj !== 'object' || obj === null) {
          return obj; // If it's not an object, return the value itself
        }
      
        // Handle arrays
        if (Array.isArray(obj)) {
          const clonedArray = [] as any[];
          for (let i = 0; i < obj.length; i++) {
            clonedArray[i] = deepClone(obj[i]); // Recursively clone each element in the array
          }
          return clonedArray as T;
        }
      
        // Handle objects
        const clonedObject = {} as { [key: string]: any };
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            clonedObject[key] = deepClone(obj[key]); // Recursively clone each property
          }
        }
        return clonedObject as T;
      }
      
      // Test case
      const original = {
        name: 'John',
        age: 30,
        address: {
          street: '123 Main St',
          city: 'New York',
        }
      
}