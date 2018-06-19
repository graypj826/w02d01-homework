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

console.log(patrickGray);

// Write code that will access your hobby from the object that you just created.

console.log(patrickGray.hobby);

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}
// Use crazy Object to log the following.

// "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);


// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1].name);
















