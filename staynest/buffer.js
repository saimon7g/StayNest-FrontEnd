function convertObjectToArray(obj) {
    return Object.entries(obj).map(([id, quantity]) => ({ id: parseInt(id), quantity }));
  }
  
  // Test the function
  const inputObject = { 1: 1, 2: 2, 3: 1 };
  const outputArray = convertObjectToArray(inputObject);
  console.log(outputArray);