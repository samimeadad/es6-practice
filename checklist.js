/*
1. let const
2. template string
2.a: use variable
2.b: use object  property
3. arrow function
3.a. with one parameter. will return the number after dividing by 5
3.b. with two parameters. will add two to each number and then multiply the result.
3.c. three parameters. will multiply all three parameters
3.d. with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.
make sure you return the result
4. [home work]: javascript function declaration vs arrow function
5. array of numbers. and then map to get each elements multiplied by 5. must use arrow function
6. [challenging] numbers of array. get odd numbers by using filter with arrow function
7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.
8. You have an object. Now use destructing to create a simple variable of any property of the object.
9. [challenging] You have an array. Now use destructing to create a simple (or more) variable to get the third element of the array in a variable called 'three'.
10. [optional] just a write a function with three parameters. and the last parameter will have a default parameter with value 7. this function will take three parameters and will return the sum of all the three parameters.
*/

//1. let and const
let eggPrice = 90;
eggPrice = 85;
// console.log( eggPrice );
let count = 1;

if ( eggPrice < 100 ) {
    eggPrice = 110;
    console.log( 'Egg price is not 90 taka. ' + 'Egg price is actually ' + eggPrice + ' taka.' );
    count++;
}
console.log( '1. let and const done' )


/* 2. template string
2.a: use variable
2.b: use object  property */

//2.a User Variable
const myName = 'Sami Meadad Choudhury';
const myAge = 40;
const myHomeTown = 'Sylhet';
const myNotes = `Hello World! My name is ${ myName }. I am a ${ myAge } years old middle aged person. My hometown is ${ myHomeTown }. Thank You all!`;
console.log( '2.a: Template String with variable' );
console.log( myNotes );

//2.b Use Object Property
const developer = [
    {name: 'Sami', age: 40, expertise: 'JavaScript', salary: 50000},
    {name: 'Farmee', age: 35, expertise: 'Frontend', salary: 70000},
    {name: 'Arishamma', age: 1, expertise: 'Backend', salary: 120000}
];

const developerInfo = `Here is our developer ${ developer[ 2 ].name }. She is very expert in ${ developer[ 2 ].expertise }. Her salary is ${ developer[ 2 ].salary } Taka per month.`;
console.log( '2.a: Template String with object' );
console.log( developerInfo );


/* 3. arrow function
3.a.with one parameter.will return the number after dividing by 5
3.b.with two parameters.will add two to each number and then multiply the result.
3.c.three parameters.will multiply all three parameters
3.d.with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.
make sure you return the result */


// 3.a.with one parameter.will return the number after dividing by 5
const divideByFive = x => x / 5;
const result3a = divideByFive( 25 );
console.log( '3.a.Arrow Function with one parameter.will return the number after dividing by 5' );
console.log( result3a );

// 3.b.with two parameters.will add two to each number and then multiply the result.
const addTwo = ( x, y ) => ( x + 2 ) * ( y + 2 );
const result3b = addTwo( 3, 5 );
console.log( '3.b.with two parameters.will add two to each number and then multiply the result.' );
console.log( result3b );

// 3.c.three parameters.will multiply all three parameters.
const multiply = ( x, y, z ) => x * y * z;
const result3c = multiply( 3, 4, 5 );
console.log( '3.c.three parameters.will multiply all three parameters.' );
console.log( result3c );

// 3.d.with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.
const multyLineArrow = ( a, b ) => {
    const sumA = a + 2;
    const sumB = b + 2;
    const mul = sumA * sumB;
    return mul;
};
const result3d = multyLineArrow( 3, 5 );
console.log( '3.d.with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.' );
console.log( result3d );


// 5. Take an array of numbers. Then map to get each elements multiplied by 5. must use arrow function.
const numbers5 = [ 8, 5, 2, 7, 3, 9, 4 ];
const result5 = numbers5.map( number => number * 5 );
console.log( '5. Take an array of numbers. Then map to get each elements multiplied by 5. must use arrow function' );
console.log( result5 );

// 6.a [ challenging ] numbers of array. get odd numbers by using filter with arrow function.
const numbers6a = [ 34, 23, 56, 12, 65, 87, 11, 21, 99, 19, 45, 28, 5, 29, 78 ];
const result6a = numbers6a.filter( number => number % 2 != 0 );
console.log( '6.a [challenging] numbers of array. get odd numbers by using filter with arrow function' );
console.log( result6a );


// 6.b [ challenging ] numbers of array. get even numbers by using filter with arrow function.
const numbers6b = [ 34, 23, 56, 12, 65, 87, 11, 21, 99, 19, 45, 28, 5, 29, 78 ];
const result6b = numbers6b.filter( number => number % 2 == 0 );
console.log( '6.b [challenging] numbers of array. get even numbers by using filter with arrow function' );
console.log( result6b );


// 7.[ challenging ] array of objects( e.g.products ). use find to get the object with price 5000.
const products = [
    {name: 'Apple MacBook Pro', price: 120000, color: 'space gray'},
    {name: 'Apple iPhone SE2', price: 50000, color: 'red'},
    {name: 'smart watch', price: 3000, color: 'black'},
    {name: 'seiko alpnist automatic', price: 20000, color: 'green'},
    {name: 'Logitech Mouse', price: 5000, color: 'blue'},
    {name: 'casio g-shock', price: 4500, color: 'yellow'},
    {name: 'Dell Laptop', price: 45000, color: 'Silver'},
    {name: 'Samsung Phone', price: 25000, color: 'White'},
    {name: 'LOTR Book Set', price: 5000, color: 'Brown'},
    {name: 'Rolex Watch', price: 370000, color: 'Golden'},
];
const result7 = products.find( p => p.price == 5000 );
console.log( '7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.' );
console.log( result7 );


// 8. You have an object.Now use destructing to create a simple variable of any property of the object.
const myObject = {name: 'Apple MacBook Pro', price: 120000, color: 'space gray'};
const {name} = myObject;
const {price} = myObject;
console.log( '8. You have an object.Now use destructing to create a simple variable of any property of the object.' );
console.log( name );
console.log( price );


// 9.[ challenging ] You have an array. Now use destructing to create a simple ( or more ) variable to get the third element of the array in a variable called 'three'.
const numbers9 = [ 34, 23, 56, 12, 65, 87, 11, 21, 99, 19, 45, 28, 5, 29, 78 ];
const [ one, two, three ] = [ 34, 23, 56, 12, 65, 87, 11, 21, 99, 19, 45, 28, 5, 29, 78 ];
console.log( '9.[ challenging ] You have an array. Now use destructing to create a simple ( or more ) variable to get the third element of the array in a variable called three' );
console.log( three );


// 10.[ optional ] just a write a function with three parameters.and the last parameter will have a default parameter with value 7. this function will take three parameters and will return the sum of all the three parameters.

function add( x, y, z = 7 ) {
    return x + y + z;
}
const result10 = add( 2, 11 );
console.log( '10.[ optional ] just a write a function with three parameters.and the last parameter will have a default parameter with value 7. this function will take three parameters and will return the sum of all the three parameters.' );
console.log( result10 );