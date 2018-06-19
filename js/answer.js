//1st commit
// Answer the Following
// For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:

// // A light switch that can be either on or off.
// Boolean, because it can be true or false

// // A user's email address.
// a string so the user can save all of their information without causing any conflics.

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//object so that the properties of the ship can be saved.

// A list of student names from our class.
// array because it's a series of strings.

// A list of student names from our class, each with a location.
//an object or a nested array because the location information can be saved as a key and value in an object, but since it's not a lot of detail, it could be stored as a nested array for each individual. [Patrick, Denver][Donnatello, NYC]

// A list of student names from our class, each with a location and each with a list of favorite tv shows. 
// an object would be ideal because each student could be stored along with their location  and tv shows easily.

// Take it Easy
// Make an array that holds all of the colors of the rainbow.

const royGBiv = ['red','orange','yellow','green','blue','indigo','violet'];

// Write code that will access "blue" from the rainbow array.

console.log(royGBiv[4]); 

// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.

const patrickGray = {
	favoriteFood : 'pizza',
	hobby : 'video game',
	location : 'Denver',
	datatype: 'object'
}

// Write code that will access your hobby from the object that you just created.