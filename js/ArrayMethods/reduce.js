// It is used to find the sum of elements in Array
let arr = [1, 2, 3, 4, 5];
console.log(
    arr.reduce((firstElement, nextElement) => {
        return firstElement + nextElement;
    })
);