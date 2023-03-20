class Human {
  constructor(props) {
    if (this.constructor === Human) {
      throw new Error(`Cannot instantiate from Abstract Class`);
    }

    let { name, address } = props;
    this.name = name; //Every human has a name
    this.address = address; //Every human has a address

    // Setiap nama dari Object menggambarkan profesinya
    this.profession = this.constructor.name;
  }

  // Every human can work
  work() {
    console.log(`Working...`);
  }

  //Every human can intoduce
  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Police extends Human {
  constructor(props) {
    super(props);

    this.rank = props.rank;
  }

  work() {
    console.log(`Go to the police station`);
    super.work();
  }
}

try {
  let wiranto = new Police({
    name: "Prabowo",
    address: "Ciamis",
    rank: "Jendral",
  });
  console.log(wiranto.profession);
} catch (error) {
  console.log(error.message);
}

try {
  let Abstract = new Human({
    name: "Abstrak",
    address: "Unknown",
  });
} catch (error) {
  console.log(error.message);
}
