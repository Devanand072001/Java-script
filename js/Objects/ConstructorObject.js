let userGreeting = {
    name: "Devanand",
    greet : function (){
      console.log("Hi, ", this.name);
    },

    sayHello(){
        console.log('Hello, ', this.name);
    }
};

userGreeting.greet();
userGreeting.sayHello();

//constructor functions
function Student(name, age){
    this.name = name;
    this.age =  age;    
};

let student1 = new Student('Devanand', 20);
console.log(student1.name)
console.log(student1.age);
