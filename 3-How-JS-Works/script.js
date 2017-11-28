///////////////////////////////////////
// Lecture: Hoisting


//FUNCTIONS

//the function can be called before it has been declared because
//hoisting. In the creation phase of the execution context
//the fubctiion declaration calculateAge is stored in the variable object
//even before the code is executed. THis is why when we enter the execution phase
//the funcion is available before it is declared.
//
// //only works for function declarations, not function expressions
// calculateAge(1965);


// function calculateAge(year) {

//     console.log(2017 - year);

// }


// //example function expressions, calling the function first gives an error

// //retirement(1990);

// var retirement = function(year){

//     console.log(65 - (2017-year));

// }

// //only works if you use it after the expression, hoisting with functions only works with declarations


// //VARIABLES
// console.log(age); //using a variable before it is declared gives an "undefined"
// //in the creation phase the code is scanned for variables and the are set to undefined
// var age=23;
// console.log(age);



// function foo() { 
//     var age = 65;
//     console.log(age)
// }
// foo();
// console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }



// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + d);
// }



///////////////////////////////////////
// Lecture: The this keyword

//window object is the default object
//console.log(this);

//in a regular function call, the this keyword always point to the window object
//the object that this function is attached to is the global object
// calculateAge(1987)

// function calculateAge(year){
//     console.log(2017-year);
//     console.log(this);
// }


//the this keyword now referes to the John object as the method belongs to
//the john object
var john = {
    name: 'John',
    yearofBirth: 1990,
    calculateAge: function() {
        console.log(this)
        console.log(2017 - this.yearofBirth)

       //inner function this keyword here points to the window object and not john
       //this is not a method, it is a function declaration
    //    function innerFunction(){
    //         console.log(this)
    //     }
    // innerFunction()
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearofBirth: 1989
}

//method borrowing
//notice we dont have the ()
//john.calculateAge(); like so, we are not calling the function
//rather treating it as a variable
mike.calculateAge = john.calculateAge;

//now call the mike function
// the this keyword only becomes something as soon as the method is called
mike.calculateAge();
