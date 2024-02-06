const quotations = [
    "Do one thing every day that scares you.",
    "Well done is better than well said.",
    "The only thing we have to fear is fear itself."
];
  
const randomIndex = Math.floor(Math.random() * quotations.length);
const selectedQuotation = quotations[randomIndex];

// import exercises.js
import * as exercises from 'ex3-1/exercises.js';

// Exercise 3-1
const arrays = [[1, 2, 3], [4, 5], [6]];
console.log('Exercise 3-1 result:', exercises.flattening(arrays));

// Exercise 3-2
console.log('Exercise 3-2 result:');
exercises.loop(3, n => n > 0, n => n - 1, console.log);

// Exercise 3-3
console.log('Exercise 3-3 result:', exercises.everyLoop([1, 3, 5], n => n < 10));
console.log('Exercise 3-3 result:', exercises.everyLoop([2, 4, 16], n => n < 10));
console.log('Exercise 3-3 result:', exercises.everyLoop([], n => n < 10));

// Exercise 3-4
console.log('Exercise 3-4 result:', exercises.everySome([1, 3, 5], n => n < 10));
console.log('Exercise 3-4 result:', exercises.everySome([2, 4, 16], n => n < 10));
console.log('Exercise 3-4 result:', exercises.everySome([], n => n < 10));

  

