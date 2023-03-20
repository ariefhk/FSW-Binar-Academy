// Callback
const forEachNew = (array, callback) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
};

let strArray = forEachNew(
  ["JavaScript", "Java", "C"],
  (element) => element.length
);
// console.log(strArray);

// Berkenalan dengan Class
class Person {
  // Mendefinisikan property
  constructor(name, address) {
    // Property itu variable di class
    this.name = name;
    this.address = address;
  }
}

// Instance dan Static
// 1. Menurut gw, Instace tu lokal, jadi bisa diakses kalo udh dibuat pake 'new'
// 2. Kalo instance tu global, bisa diakses dimana class itu ada method itu
// 3. Menurut gw, new Class itu sama dengan Class.property

class Human {
  // add static property
  static isLivingOnEarth = true;

  // add constructor method
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  // add instance method signature
  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

// Instance
let human1 = new Human("Arief", "Ciamis");
human1.introduce();

// Static
console.log(Human.isLivingOnEarth);

// Add Instance/Prototype method
Human.prototype.greet = function (name) {
  console.log(`Hi, ${name}, I'm ${this.name}`);
};

// Add Static Method
Human.destroy = function (thing) {
  console.log(`Human is destroying ${thing}`);
};
Human.destroy("Kota");

// checking instance of class
console.log(human1 instanceof Human);

// accesing new instance method
human1.greet("Budi");

// accesing new static method
Human.destroy("Forest");

// Experiment for instance/static start
/* COUNT HOW MANY WE MAKE Insctance */
class Item {
  static id = 0;

  constructor() {
    this.id = ++Item.id;
  }

  getID() {
    console.log(this.id);
  }
}

const A = new Item(); // Create instance (Item.id is now 1)
const B = new Item(); // Create instance (Item.id is now 2)
const C = new Item(); // Create instance (Item.id is now 3)

// A.getID();

console.log(`Currently at: ${Item.id}`); // Currently at: 3
// Experiment end
