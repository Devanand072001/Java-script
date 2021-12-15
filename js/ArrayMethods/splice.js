'use strict';
// It is used to add are remove element at the specified position.
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(arr);

arr.splice(3, 3);
console.log(arr);

arr.splice(3, 0, 50, 60, 70);
console.log(arr);

arr.splice(0, 1);
console.log(arr);


arr.splice(0, 0, 10);
console.log(arr);

arr.splice(10, 0, 110);
console.log(arr);