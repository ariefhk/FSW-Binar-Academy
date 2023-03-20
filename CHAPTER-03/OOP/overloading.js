class Person {
  constructor(name, address) {
    this.name = name;
    this.address;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

class Programmer extends Person {
  constructor(name, address, programmingLang) {
    super(name, address);

    this.programmingLang = programmingLang;
  }

  // Overload dengan sama method dan tambah params baru
  introduce(withDetail) {
    // super.introduce(); --> cuma manggil

    // Check apakah params type nya array
    Array.isArray(withDetail)
      ? console.log(`I can write ${this.programmingLang}`)
      : console.log(`Wrong Input!`);
  }
}

let Arief = new Programmer("Arief", "Ciamis", ["Java", "Python"]);

Arief.introduce(["JavaScript"]);
