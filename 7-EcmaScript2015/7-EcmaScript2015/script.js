//Lecture: let and const

//ES5

// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// //ES6
// const name6 = 'Jane Smith';
// let age6 =23;
// name6 = 'Jane Miller'
// console.log(name6) 



//ES5
// function driversLicense5(passedTest){

//     if(passedTest){
//         var firstName = 'John';
//         var yearOfBirth = '1990';
//     }

//     console.log(firstName + ' born in ' + yearOfBirth + ' can drive')
// }

// driversLicense5(true);

// //ES6
// function driversLicense6(passedTest){
//     let firstName ;
//     const yearOfBirth = 1990;

//         if(passedTest){
//              firstName = 'John';
            
//         }

//         console.log(firstName + ' born in ' + yearOfBirth + ' can drive')
        
//     }
    
//     driversLicense6(true);


//LECTURE: Blocks and IIFEs

// //ES5 IIFE
// (function(){

//     var c = 3

// })()

// //console.log(c)

// //ES6 
// {

//     const a = 1;
//     let b = 2;
//     var c = 3;
// }

// console.log(c)
// console.log(a + b)


//LECTURE: Strings


// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;
// function calcAge(year){
//     return 2017 - year; 
// }


// //ES5
// console.log('This is ' + firstName + ' ' + lastName + 
// ' he was born in ' + yearOfBirth + ' he is ' + calcAge(yearOfBirth) + ' years old')

// //ES6 
// console.log(`this is ${firstName} ${lastName} he was born in ${yearOfBirth} he is ${calcAge(yearOfBirth)} years old` 
// )


// const n = `${firstName} ${lastName}`
// console.log(n.startsWith('J'))
// console.log(n.endsWith('h'))


//Lecture Arrow Functions
//  const years = [1990, 1965, 1982, 1937];

//  //ES 5
//  var ages5 = years.map(function(el){
//     return 2016 - el;
//  })
//  console.log(ages5)


//  //ES6
//  let ages6 = years.map(el => 2017 - el);
//  console.log(ages6)


//  ages6 = years.map((el,index) => `age element ${index +1}: ${2016 - el}`)
//  console.log(ages6)

//  ages6 = years.map((el,index) => {

//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `age element ${index +1}: ${age}`


//  } )
//  console.log(ages6)

//Lecture arrow functions 2

//es5

// var box5 = {
//     color: 'green', 
//     position: 1,
//     clickMe: function(){
//         var self = this;
//         document.querySelector('.green').addEventListener
//         //in es5, the callback function doesnt have access to the 'this' method'
//         ('click', function(){
//             var str = 'This is box number ' + self.position +
//             ' and it is ' + self.color;
//             alert(str)
//         })
//     }

// }
// box5.clickMe();


//es6
// const box6 = {
//     color: 'green', 
//     position: 1,
//     clickMe: function(){
        
//         document.querySelector('.green').addEventListener
//         //in es5, the callback function doesnt have access to the 'this' method'
//         ('click', () => {
//             var str = 'This is box number ' + this.position +
//             ' and it is ' + this.color;
//             alert(str)
//         })
//     }

// }
// box6.clickMe();


// const box66 = {
//     color: 'green', 
//     position: 1,
//     clickMe: () =>{
        
//         document.querySelector('.green').addEventListener
//         //in es5, the callback function doesnt have access to the 'this' method'
//         ('click', () => {
//             var str = 'This is box number ' + this.position +
//             ' and it is ' + this.color;
//             alert(str)
//         })
//     }

// }
// box66.clickMe();

// function Person(name){
//     this.name = name
// }
// var friends = ['bob','jane','mark']

// // //es5
// // Person.prototype.myFriends5 = function(friends){

// //     var arr = friends.map(function(el){
// //         return this.name + ' is friends with ' +
// //         el;
// //     })

// //     console.log(arr)
// // }

// //new Person('John').myFriends5(friends);


// //es6
// Person.prototype.myFriends6 = function(friends){

//     var arr = friends.map(el =>`${this.name} is friends with ${el}`)
//     console.log(arr)
     
// }
// new Person('KEn').myFriends6(friends);



//Lecture 5: Destructuring

// var john = ['John' , 26];
// var name = john[0];
// var age = john[1];

// //es6
// const [name, age] = ['John' , 26]
// console.log(name);
// console.log(age);

// const obj = {
//     firstName: 'John', 
//     lastName: 'Smith'
// };

// const {firstName, lastName} = obj;
// // console.log(firstName);
// // console.log(lastName);


// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);



// function calcAgeRetirement(year){
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age2, retirement] =  calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);




//Lecture Arrays:

// const boxes = document.querySelectorAll('.box');
// //queryselector all does not return an array but a node list

// // console.log(boxes)

// // //ES5 change node list to array
// var boxesarray5 = Array.prototype.slice.call(boxes);
 
//  boxesarray5.forEach(function(curr){
//      curr.style.backgroundColor = 'dodgerblue'
//  })


//es6 change node list to array
// const boxesarr6 = Array.from(boxes);
// console.log(boxes);
// console.log(boxesarr6)

// boxesarr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


//es5 for loop
// for(var i = 0; i < boxesarray5.length; i++){

//     if(boxesarray5[i].className === 'box blue'){
//         continue;
//     } else {
//         boxesarray5[i].textContent = 'I changed to blue'
//     }

// }



//es6 for of loop
// const boxesarr6 = Array.from(boxes);
// for (const cur of boxesarr6){
//     if(cur.className.includes('blue')){
//         continue;
//     } 
//         else {
//             cur.textContent = 'I changed to blue'
//     }
// }



// //es5
// // var ages = [12,17,8,21,14,11];

// // var full = ages.map(function(curr){
// //     return curr >= 18;
// // })
// // console.log(full)
// // console.log(full.indexOf(true))
// // console.log(ages[full.indexOf(true)])


// // //es6
// // ages.findIndex(cur => cur >= 18);
// // console.log(ages.findIndex(cur => cur >= 18))
// // console.log(ages.find(cur => cur >= 18))


// //Lecture spread operator

// // function addFourAges (a, b, c, d){
// //     return a + b + c + d
// // };


// // var sum1 = addFourAges(2, 4, 6, 8)
// // console.log(sum1)


// // //es5

// // var ages = [18, 30, 12, 21];

// // //passed the values in the array to the method
// // var sum2 = addFourAges.apply(null, ages);
// // console.log(sum2)


// // //es6
// // //...expand the array into its components
// // const sum3 = addFourAges(...ages);
// // console.log(sum3)


// // const familySmith = ['John','Jane','Mark'];
// // const familyMiller = ['Mary','Bob','Ann'];

// // const bigFamily = [...familySmith, ...familyMiller];
// // console.log(bigFamily)


// // const h = document.querySelector('h1');
// // const boxes = document.querySelectorAll('.box');
// // const all = [h,...boxes];
// // console.log(all)

// // Array.from(all).forEach(cur =>
// // cur.style.color = 'purple')





// //Lecture Rest Parameters

// //ES5
// function isFullAge5(){


// var argsArr = Array.prototype.slice.call(arguments)

//     argsArr.forEach(function(cur){
//         console.log((2017 - cur) >= 18);
//     })

// }

// //isFullAge5(1990, 2005, 1996, 1987, 2006)

// //es6 rest params
// // the ... transforms the args to an array and passes them
// //into the function
// function isFullAge6(...years){
    
//     years.forEach(cur => console.log((2017 - cur) >= 18))
    
    
// }
// isFullAge6(1990, 2005, 1996, 1987, 2006)





// var ages = [12,17,8,21,14,11];

// // var full = ages.map(function(curr){
// //     return curr >= 18;
// // })
// // console.log(full)
// // console.log(full.indexOf(true))
// // console.log(ages[full.indexOf(true)])


// // //es6
// // ages.findIndex(cur => cur >= 18);
// // console.log(ages.findIndex(cur => cur >= 18))
// // console.log(ages.find(cur => cur >= 18))


// //Lecture spread operator

// // function addFourAges (a, b, c, d){
// //     return a + b + c + d
// // };


// // var sum1 = addFourAges(2, 4, 6, 8)
// // console.log(sum1)


// //es5

// var ages = [18, 30, 12, 21];

// //passed the values in the array to the method
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2)


// //es6
// //...expand the array into its components
// const sum3 = addFourAges(...ages);
// console.log(sum3)


// const familySmith = ['John','Jane','Mark'];
// const familyMiller = ['Mary','Bob','Ann'];

// const bigFamily = [...familySmith, ...familyMiller];
// console.log(bigFamily)


// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h,...boxes];
// console.log(all)

// Array.from(all).forEach(cur =>
// cur.style.color = 'purple')





//ES5
// function isFullAge5(limit){


// var argsArr = Array.prototype.slice.call(arguments,1)
  
//     argsArr.forEach(function(cur){
//         console.log((2017 - cur) >= limit);
//     })
    

// }

// isFullAge5(16, 1990, 2005, 1996, 1987, 2006)

//es6 rest params
// the ... transforms the args to an array and passes them
// //into the function
// function isFullAge6(limit,...years){
    
//     years.forEach(cur => console.log((2017 - cur) >= limit))
    
    
// }
// isFullAge6(16, 1990, 2005, 1996, 1987, 2006)




//Lecture default parameters

// function SmithPerson(firstName,yearOfBirth,lastName,nationality) {

//     lastName === undefined ? lastName = 'Smith' : lastName;
//     nationality === undefined ? nationality = 'American' : nationality;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }





//es6
// function SmithPerson(firstName,yearOfBirth,lastName = 'Smith',nationality = 'American') {

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }



// var john = new SmithPerson('John', 1990);
// console.log(john)

// var emily = new SmithPerson('emily', 1983, 'Diaz', 'Spanish')
//  console.log(emily)




// //Lecture Maps;

// const question = new Map();
// question.set('question', 'What is the official name of the latest major JS version?')
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct Answer'),
// question.set(false, 'Wrong, please try again')


// console.log(question.get('question'));
// // console.log(question.size)

// //question.delete(4);

// //question.clear();


// // question.forEach((value,key) => console.log(
// //     `this is ${key}, and it's set to ${value}`
// // ))

// //question.entries returns all the key value pairs,
// //use destructuring to store the key an values in 2 separate vars
// for(let [key,value] of question.entries()){
    
//     if(typeof(key) === 'number'){
//         console.log(`Answer ${key}: ${value}`) 
//     } 

// }

// const ans = parseInt(prompt('Write the correct answer:'));
// console.log(question.get(ans === question.get('correct')))



//Lecture - Classes

//es5

// var Person5 = function(name, yearOfBirth, job){

//     this.name = name,
//     this.yearOfBirth = yearOfBirth,
//     this.job = job
// }

// Person5.prototype.caculateAge = function(){
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);

// }


// var john5 = new Person5('JOhn', 1990, 'teacher');

//es6
// class Person6 {
//     constructor(name, yearOfBirth, job)
//     {
//         this.name = name,
//         this.yearOfBirth = yearOfBirth,
//         this.job = job
//     }

//     caculateAge(){
//         var age = new Date().getFullYear - this.yearOfBirth;
//         console.log(age);
//     }


//     static greeting(){
//         console.log('Hey there')
//     }

// }


// const john6 = new Person6('John', 1990, 'teacher')





// ///ES5
// var Person5 = function(name, yearOfBirth, job){
    
//         this.name = name,
//         this.yearOfBirth = yearOfBirth,
//         this.job = job
//     }
    
//     Person5.prototype.caculateAge = function(){
//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
    
//     }
    

// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
//     Person5.call(this,name, yearOfBirth, job)
//     this.olympicGames = olympicGames,
//     this.medals = medals;
// };




// Athlete5.prototype = Object.create(Person5.prototype);
// Athlete5.prototype.wonMedal = function(){
//     this.medals++;
//     console.log(this.medals)
// }


// var john5 = new Person5('JOhn', 1990, 'teacher');

// var johnAthlete5 = new Athlete5('JOhn', 1990, 'swimmer', 3, 10);

// johnAthlete5.caculateAge();
// johnAthlete5.wonMedal();

//es6
class Person6 {
    constructor(name, yearOfBirth, job)
    {
        this.name = name,
        this.yearOfBirth = yearOfBirth,
        this.job = job
    }

    caculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

}


class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames,medals){
        super(name, yearOfBirth, job);//call the super class,set the 'this' variable
        this.olympicGames = olympicGames,
        this.medals = medals;
    }

    wonMedal(){
        this.medals++
        console.log(this.medals)
    }
}

const johnAthlete6 = new Athlete6('Ken', 1987, 'Swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.caculateAge();