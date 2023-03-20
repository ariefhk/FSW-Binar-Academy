class Human {
  constructor(props) {
    let { name, address } = props;
    this.name = name;
    this.address = address;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }

  work() {
    console.log(`${this.constructor.name}: Working`);
  }
}

// Public Server Module/Helper
const PublicServer = (Base) =>
  class extends Base {
    save() {
      console.log(`SFX: Thank You!`);
    }
  };

// Military Module/Helper
const Military = (Base) =>
  class extends Base {
    shoot() {
      console.log(`DOR`);
    }
  };

// Implementation
class Doctor extends PublicServer(Human) {
  constructor(props) {
    super(props);
  }

  work() {
    super.work(); //from Human Class
    super.save(); //from Public Server Class
  }
}

class Police extends PublicServer(Military(Human)) {
  static workplace = "Police Station";

  constructor(props) {
    super(props);
    this.rank = props.rank;
  }

  work() {
    super.work();
    super.shoot();
    super.save();
  }
}

class Army extends PublicServer(Military(Human)) {
  static workplace = "Police Station";

  constructor(props) {
    super(props);
    this.rank = props.rank;
  }

  work() {
    super.work();
    super.shoot();
    super.save();
  }
}

class Writer extends Human {
  work() {
    console.log("Write Books");
    super.work();
  }
}

/* Instantiate Military Based Class */
const Wiranto = new Police({
  name: "Wiranto",
  address: "Unknown",
  rank: "General",
});

const Prabowo = new Army({
  name: "Prabowo",
  address: "Undefined",
  rank: "General",
});

/* Instantiate Doctor */
const Boyke = new Doctor({
  name: "Boyke",
  address: "Jakarta",
});

/* Instantiate Writter */
const Dee = new Writer({
  name: "Dee",
  address: "Bandung",
});

// Print
Wiranto.shoot();
Prabowo.shoot();

Wiranto.save();
Prabowo.save();
Boyke.save();

Wiranto.work();
Prabowo.work();
Boyke.work();
Dee.work();
