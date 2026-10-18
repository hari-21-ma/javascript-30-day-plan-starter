console.log('Day 3 — Conditionals & Loops');

function isEven(number) {
  return number % 2 === 0;
}

console.log('isEven(4) =', isEven(4));
console.log('isEven(7) =', isEven(7));

function ageCategory(age) {
  if (age < 13) return 'child';
  if (age < 20) return 'teen';
  if (age < 65) return 'adult';
  return 'senior';
}

console.log('ageCategory(10) =', ageCategory(10));
console.log('ageCategory(25) =', ageCategory(25));
console.log('ageCategory(70) =', ageCategory(70));

const numbers = [1, 2, 3, 4, 5];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log('total =', total);

let count = 0;
while (count < 5) {
  console.log('count =', count);
  count++;
}

// Practice exercises:
// 1. Write a function that returns the largest number in an array.
// 2. Write a loop that prints only even numbers.
// 3. Use a `switch` statement to map numeric grades to letters.
