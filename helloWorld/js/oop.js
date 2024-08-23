//class

class ClassCar {
  //properties
  constructor(seater, wheal, color, name, model) {
    this.seater = seater;
    this.wheal = wheal;
    this.color = color;
    this.name = name;
    this.model = model;
  }
  //methods
  accelerate() {
    console.log("accelerate");
  }
  parke() {
    console.log("parke");
  }
  reverse() {
    console.log("reverse");
  }
  changeGear() {
    console.log("changeGear");
  }
  break() {
    console.log("changeGear");
  }
}

//using or calling a class

const newCar = new ClassCar(4, 1, "blue", "ford 380", "x2930"); //newCar is an instance of ClassCar
console.log(newCar.accelerate());

class Benz extends ClassCar {
  constructor(seater, wheal, color, model) {
    super(seater, wheal, color, "Benz", model);
  }
  other() {
    console.log("others can be here");
  }
}

const newBez = new Benz(2, 1, "yellow and red", "C340");
console.log(newBez.other());

//factory function
function FunctionCar(seater, wheal, color, name, model) {
  function accelerate() {
    console.log("acc");
  }
  function parke() {
    console.log("park");
  }
  function reverse() {
    console.log("rever");
  }
  function changeGear() {
    console.log("change gear");
  }
  function breakSpeed() {
    console.log("break");
  }

  //must return an object
  return {
    color,
    name,
    model,
    accelerate,
    reverse,
    breakSpeed,
  };
}

//calling a function
const newFunCar = FunctionCar(4, 1, "blue", "ford 380", "x2930");
console.log(newFunCar);
