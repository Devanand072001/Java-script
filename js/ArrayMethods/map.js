// creates new Array
// does not change the size of the Array.
// uses value from new array when making new array.
// returns new array.

// It is used to manipulate every elements in array.
let arr = [1, 2, 3, 4, 5];
console.log(
    arr.map(
        (elements, inedex) => {
            return elements * 10;
        }
    )
);
console.log(arr);
console.log();


const people = [
    { name: 'bob', age: 20, destination: 'student' },
    { name: 'peter', age: 25, destination: 'engineer' },
    { name: 'Jeff', age: 30, destination: 'buisness' },

];
//with arrow function
const ages = people.map((person) => person.age);
console.log(ages);
//traditional method
const person = people.map(function (person) {
    // console.table(person);
    return person.destination;
});

console.log(person);

const data = people.map(function (i) {
    return {
        fullName: i.name.toUpperCase(),
        old: i.age,
        final: i.destination
    }
}
);
console.table(data);

const returnTags = people.map((person) => `<h1>${person.destination}</h1>`);
console.log(returnTags);


