// returns value based on condtions
//changes array size.
const people = [
    { name: 'bob', age: 20, destination: 'student' },
    { name: 'peter', age: 25, destination: 'engineer' },
    { name: 'Jeff', age: 30, destination: 'buisness' },

];

const young = people.filter((person) => person.age <= 25);
console.log(young);

const students = people.filter((student) => student.destination == 'student');
console.table(students);