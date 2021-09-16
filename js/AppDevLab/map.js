'use strict';

const student = new Map();
student.set('name','Devanand');
student.set('age', 19);

document.writeln(student.get('name'));
document.writeln(student.size);

const fruits = new Map([
    ["apple", 500],
    ['banana', 200],
    ['oranges', 300]
]);

let text = '';
for (const fruit of fruits){
    text = text + fruit + "<br>";
    document.writeln(text);
}