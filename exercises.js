// Exercise 3-1: Flattening
export const flattening = (list) => {
    return list.reduce((flatArray, currentArray) => flatArray.concat(currentArray), []);
  };
  
// Exercise 3-2: Loop
export const loop = (value, test, update, body) => {
    for (let i = value; test(i); i = update(i)) {
      body(i);
    }
};
  
// Exercise 3-3: everyLoop
export const everyLoop = (array, test) => {
    for (let i = 0; i < array.length; i++) {
      if (!test(array[i])) {
        return false;
      }
    }
    return true;
};
  
// Exercise 3-4: everySome
export const everySome = (array, test) => {
    return array.every(test);
  };
  