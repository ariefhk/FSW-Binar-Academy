// Inheritance itu artinya pewarisan
class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }

  work() {
    console.log("Work!");
  }
}

class Programmer extends Human {
  // Kita pake constructor dari parent
  constructor(name, address, programmingLang) {
    // wajib pake super
    super(name, address);

    // baru pake property tambahan
    this.programmingLang = programmingLang;
  }

  introduce() {
    // panggil method parent pake super
    super.introduce();
    console.log(`I can write ${this.programmingLang}`);
  }

  code() {
    console.log(
      `Code some ${
        this.programmingLang[
          Math.floor(Math.random * this.programmingLang.length)
        ]
      }`
    );
  }
}

// Buat instance dari Human
let Arief = new Human("Arief Rachman", "Ciamis");

// Buat instance dari Child Class
let Sabrina = new Programmer("Sabrina", "Jaksel", [
  "JavaScript",
  "Java",
  "Python",
]);

// Access child method
Sabrina.introduce();
Sabrina.code();
Sabrina.work();

// Access child method with parent instance
try {
  Arief.code(); //Bakal Error, soalnya g ada method code()
} catch (error) {
  console.log(error.message);
}

// Check instance
console.log(Sabrina instanceof Human); //true
console.log(Sabrina instanceof Programmer); //true
