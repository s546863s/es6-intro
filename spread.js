// const max = Math.max(10, 20, 30, 40, 50);
// console.log(max); // Output: 50


// const numbers = [10, 20, 30, 40, 50];
// const maxFromArray = Math.max(...numbers);
// console.log(maxFromArray); // Output: 50



// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combinedArr = [...arr1, ...arr2];
// console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]


// console.log(...arr1); // Output: 1 2 3

// console.log([...arr2]); // Output: 4 5 6

// const clasNames = ['btn', 'btn-primary', 'btn-lg'];
// console.log(...clasNames); // Output: btn btn-primary btn-lg


// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const combinedObj = { ...obj1, ...obj2 };
// console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// console.log(...Object.keys(obj1)); // Output: 1 2

// const arr3 = [1, 2, 3];
// const arr4 = [4, 5, 6];
// const combinedArr2 = [...arr3, ...arr4];
// console.log(combinedArr2); // Output: [1, 2, 3, 4, 5, 6]    

const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // arr2 references the same array as arr1
arr2.push(4); // Modifying arr2 also modifies arr1
console.log(arr1, arr2);

const persone = { name: 'John', age: 30 };
// const copyPerson = { ...persone };

const person2 = { ...persone }; // person2 is a shallow copy of persone
person2.Salary = 50000; // Modifying person2 does not affect persone

const person3 ={ ...person2}; // person3 references the same object as persone
person3.job = 'Developer'; // Modifying person3 also modifies persone

console.log(persone); // Output: { name: 'John', age: 30 }
console.log(person2); // Output: { name: 'John', age: 30, Salary: 50000 }
console.log(person3); // Output: { name: 'John', age: 30, job: 'Developer' }