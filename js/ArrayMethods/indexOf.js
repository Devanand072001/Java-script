// It will create new index for duplicate element in Array. 

let arr = [10 ,20, 30, 10, 20, 30, 40, 50];
console.log(
    arr.forEach((element, index) => {
        console.log(arr.indexOf(element));
    })
);

// remove duplicate elements from array 
console.log(
    arr.filter((element, index) => {
        return arr.indexOf(element) == index;
    })
);