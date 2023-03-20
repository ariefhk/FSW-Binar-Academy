//Override itu menimpa, simpelnya pake super

class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

// Class child Class from Person
class Programmer extends Person {
  constructor(name, address, programmingLang) {
    // call super() dari parent
    super(name, address);

    this.programmingLang = programmingLang;
  }

  // Override method introduce dari Parent
  introduce() {
    // super.introduce(); -> cuma manggil dari parent
    console.log(`I can write ${this.programmingLang}`);
  }

  code() {
    console.log(
      `Code some ${
        this.programmingLang[
          Math.floor(Math.random() * this.programmingLang.length)
        ]
      }`
    );
  }
}

let Isyana = new Programmer("Isyana Karina", "Ciamis", ["C#", "Python", "C++"]);

Isyana.introduce();
