const mobile = {
  name: "A54-5G",
  model: "samsung",

  log(storage = 0, price = 0) {
    console.log(
      `name: ${this.name}, model: ${this.model}, storage: ${storage}GB, price=${price}$`
    );
  },
};

const samsungA54 = {
  name: "samsung",
  model: "A54-5G",
};

const Iphone13 = {
  name: "Iphone",
  model: "13-128GB",
};

mobile.log.apply(samsungA54);
mobile.log.apply(Iphone13);

// --------------------------------

const Iphone12 = {
  name: "Iphone",
  model: "12-256",
};

mobile.log.apply(Iphone12, [256, 700]);

// with call method

const samsungA14 = {
  name: "samsung",
  model: "A14",
};

mobile.log.call(samsungA14, 64, 200);
