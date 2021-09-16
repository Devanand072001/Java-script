'use strict';
let obj = {
    firstName: 'bob',
    lastName: 'John',
    age: 29,
    unwanted: 'sdfsdfsdf',
    displayName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// alert(obj.displayName());
document.write("dfs");
document.getElementById('demo').innerHTML = "document.getElementById";

let count = 0;
document.getElementById('counter').innerHTML = count;
function incement() {
    count = count + 1;
    document.getElementById('counter').innerHTML = count;
}

//constructor
class Employee{
    constructor(id , name){
        this.empId = id;
        this.empName = name;
    }
};

let emp1 = new Employee(101, 'John Doe');
let emp2 = new Employee(102, "Jack");
document.getElementById('empId').innerHTML = emp1.empId;
document.getElementById('empName').innerHTML = emp1.empName;


