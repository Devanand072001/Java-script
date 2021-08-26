'use strict';
//initialisation
let sampleObj = new Object();
sampleObj.name = 'devanand';
sampleObj.age = 20;
// dispalying values
for (let props in sampleObj) {
    console.log(props + " " + sampleObj[props]);
}
console.table(sampleObj);

console.log(sampleObj.name);
console.log(sampleObj['age']);
let obj = {
    name: 'bob',
    age: 29,
    unwanted: 'sdfsdfsdf'
};
//check availability
console.log('unwanted' in obj);

//object referencing 
console.log("Object reverencing");
let user1 = {
    name: 'Peter',
    position: 'developer'
}

let user2 = user1;
console.log('user2 ', user2);

user2['position'] = 'manager';
//changes in user2 affects user1
console.log(user1);

//object cloning
console.log('object cloning');
let hero1 = {
    name: 'Frank',
    heroName: 'Punisher'
};

let hero2 = {};

for (let i in hero1) {
    hero2[i] = hero1[i];
}
console.log(hero2);
hero2.name = 'Mathew';
// in cloning chages in object 2 will not affect object 1.
console.log(hero1);


// nested objects
let student = {
    name: 'John wick',
    marks: {
        java: 100,
        javaScript: 100,
        python: 80
    }
}
console.log("nested oject");
console.table(student);

//inter linked objects
console.log('inter linked objects');
function marry(groom, bride) {
    groom.wife = bride;
    bride.husband = groom;
    return{
        father : groom,
        mother : bride
    }
};

let male = {
    name: "Luke Cage"
}
let female = {
    name: "Jessica Jones"
}

let family = marry(male, female);
console.table(family);