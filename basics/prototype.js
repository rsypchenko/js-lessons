let point = {
    x: 0,
    y: 0,
}

let point3d = {
    __proto__: point,
    z: 0,
}

console.log(point3d.x) // 0
console.log(point3d.y) // 0
console.log(point3d.z) // 0

console.log(point.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__) // null

// An "empty" object.
let empty = {};
 
console.log(empty.toString); // function toString(){...}
console.log(empty.x); // undefined

// An "empty" object with a prototype.
let emptyWithProto = {__proto__: Object.prototype};

// an empty object without a prototype
let emptyWithoutProto = Object.create(null);

let protoA = {x: 10};
let protoB = {x: 20};

let objectC = Object.create(protoA);
console.log(objectC.x); // 10


Object.setPrototypeOf(objectC, protoB);
console.log(objectC.x); // 20

let letter = {
    getNumber() {
        return this.number;
    }
}

let a = {number: 1, __proto__: letter};

console.log(a.getNumber()); // 1

class Letter {
    constructor(number) {
      this.number = number;
    }
   
    getNumber() {
      return this.number;
    }
  }
   
  let aa = new Letter(1);
   
  console.log(
    aa.getNumber(), // 1
  );

  function Letter2(number) {
    this.number = number;
  }

  Letter2.prototype.getNumber = function () {
    return this.number;
  }

  let a2 = new Letter2(1);

  console.log(a.getNumber()) // 1
