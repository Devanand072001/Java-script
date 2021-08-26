'use strict';

function greeting (){
    console.log("hi");
}

let hi = greeting;
hi();

let hello = function(){
    console.log('hello');
}
hello();

// call back functions

function askMarried(yes, no){
    let response = confirm("Are you married?");
    if(response){
        yes();
    }else{
        no();
    }
}
function married(){
    alert("You are married");
}
function single(){
    alert("you are single");
}

askMarried(married, single);