'use strict';
let print = (arg) => console.log(arg);
let sum = (num1, num2) => num1 + num2;
console.log(sum(4, 5));

let arr = [3, 5, 6, 10];

let diplay = (array)  => {
    console.log(array);
    console.table(array);
    for(let i = 0; i < array.length; i++)
        console.log(array[i]);
}

diplay(arr);

let greet = () => {
    let time = new Date().getHours();
    print("Date: " + new Date());
    if(time >= 4 && time <= 6 )
        console.log("Good moring");
    else
        console.log("Good evening");
}
greet();