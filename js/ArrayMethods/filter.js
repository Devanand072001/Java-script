// returns value based on condtions
// changes array size.
// Tt is used to apply condition with forEach


let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log("Even elements");
console.log(arr.filter((element) => element % 2 ==  0));
console.log("Odd elements");
console.log(arr.filter((element) => element % 2 != 0));

console.log(
    arr.map((element, index) => {
        return element * 10;
    }).filter((element, index) => {
       return element <= 20;
    })
);

console.log();


const people = [
    { name: 'bob', age: 20, destination: 'student' },
    { name: 'peter', age: 25, destination: 'engineer' },
    { name: 'Jeff', age: 30, destination: 'buisness' },

];

const young = people.filter((person) => person.age <= 25);
console.log(young);

const students = people.filter((student) => student.destination == 'student');
console.table(students);