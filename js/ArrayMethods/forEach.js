// does not return new array
// always returns undefinded
const person = [
    { name: 'bob', age: 30, position: 'developer' },
    { name: 'Peter', age: 33, position: 'senior developer' },
    { name: 'Mosh', age: 25, position: 'team leader' },
];

// console.table(person);
// function displayPerson(people){
//     console.log(people);
// }
let pos = person.forEach((people) => console.log(people.position));

