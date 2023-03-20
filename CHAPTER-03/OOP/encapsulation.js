// Encapsulation ibarat mengkapsulkan kode
// 1. Public
class HumanPublic {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  // This is public instance method
  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }

  // This is public static method
  static isEating(food) {
    let foods = ["plant", "animal"];

    return foods.includes(food.toLowerCase());
  }
}

let Arief = new HumanPublic("Arief", "Ciamis");
console.log(Arief);
//Output: HumanPublic { name: 'Arief', address: 'Ciamis' }

console.log(Arief.introduce());
console.log(HumanPublic.isEating("Plant")); //true
console.log(HumanPublic.isEating("Human")); //false

// 2. Private
/* Cuma bisa diakses oleh Class itu sendiri, g ada pengecualian. Jadi, biasanya perlu sebuah function buat manggilnya kaya getter & setter */
class HumanPrivate {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  // Private, g bakal bisa diakses diluar akses
  #doGossip = () => {
    return `My address will become viral ${this.address}`;
  };

  talk() {
    console.log(this.#doGossip()); //Call Private Method
  }

  static #isHidingArea = true;
}
// Buat Instance
let Alexa = new HumanPrivate("Alexa", "Lakbok");

Alexa.talk();

try {
  // Human.#isHidingArea;
  // Human.#isHidingArea; -> Error
  // Alexa.#doGossip(); -> Error
} catch (error) {
  console.log(error.message);
}
// SyntaxError: Private field '#isHidingArea' must be declared in an enclosing class

// 3. Protected
/*Bisa diakses oleh class childrennya */

class HumanProtected {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  // Protected menggunakan duck typing (_)
  _call() {
    console.log(`Call me as a ${this.name}`);
  }
}

class Progammer extends HumanProtected {
  constructor(name, address, task, salary) {
    super(name, address);
    this.task = task;
    this.salary = salary;
  }

  doCall() {
    super._call(); //Will Run
  }
}

let human = new HumanProtected("Budi", "Jakarta");
let job = new Progammer("Developer", "$1000");

// Pemanggilan yang kurg baik
human._call();
/* 
Meskipun bisa diambil namun cara ini tidak disarankan karena harusnya hanya dipanggil di class childnya saja
*/

// Pemanggilan yang baik
job.doCall();

// Implementasi dalam Encapsulation
class User {
  constructor(props) {
    let { email, password } = props;

    this.email = email;
    this.password = password;
    this.encryptedPassword = this.#encrypt(password);
  }

  // Private Method
  #encrypt = (password) => {
    return `encrypted-version-of-${password}`;
  };

  // Getter
  #decrypt = () => {
    return this.encryptedPassword.split(`encrypted-version-of-`)[1];
  };

  authenticate(password) {
    return this.#decrypt() === password;
  }
}

let Bot = new User({
  email: "bot@gmail.com",
  password: "12345",
});

const isAuth = Bot.authenticate("12345");
console.log(isAuth);
