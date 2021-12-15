let arr = [10 ,20, 30];
console.log(arr.reverse());

// reverse string
let str = "Hello";
console.log("String to array: "+ Array.from(str));
console.log("Array to String: "+ Array.from(str).join(""));

console.log(
    Array.from(str).reverse().join("")
);
