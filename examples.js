console.log(0 == false);
console.log("" == false);
console.log([] == false);
console.log(undefined == false);
console.log(null == false);
console.log("1" == true);
console.log(1n == true);
console.log(" 1     " == true);

console.log("---------------------------");

console.log(JSON.stringify([1, 2, null, 3]));
console.log(JSON.stringify([1, 2, undefined, 3]));
console.log(null === undefined);
console.log(null == undefined);
console.log(null == 0);
console.log(null < 0);
console.log(null > 0);
console.log(null <= 0);
console.log(null >= 0);
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined <= 0);
console.log(undefined >= 0);

console.log("-----------------------------");

console.log([] + []);
console.log([] + 1);
console.log([[]] + 1);
console.log([[1]] + 1);
console.log([[[[2]]]] + 1);
console.log([] - 1);
console.log([[]] - 1);
console.log([[1]] - 1);
console.log([[[[2]]]] - 1);
console.log([] + {});
console.log({} + {});
console.log({} - {});

console.log("--------------------------------");

function log(a, b, c, d) {
  console.log(a, b, c, d);
  arguments[0] = "bfe";
  arguments[3] = "dev";

  console.log(a, b, c, d);
}

log(1, 2, 3);

console.log("------------------------------------");

[1, 2, 3].reduce((a, b) => {
  console.log(a, b);
});

[1, 2, 3].reduce((a, b) => {
  console.log(a, b);
}, 0);

console.log("------------------------------------");

console.log((0 == 1) == 2);
console.log((2 == 1) == 0);
console.log(0 < 1 < 2);
console.log(1 < 2 < 3);
console.log(2 > 1 > 0);
console.log(3 > 2 > 1);

console.log("-------------------------------------");

console.log(["0"].map(parseInt));
console.log(["0", "1"].map(parseInt));
console.log(["0", "1", "1"].map(parseInt));
console.log(["0", "1", "1", "1"].map(parseInt));

console.log("--------------------------------------");

console.log(typeof null);
console.log(null instanceof Object);
console.log(typeof 1);
console.log(1 instanceof Number);
console.log(1 instanceof Object);
console.log(Number(1) instanceof Object);
console.log(new Number(1) instanceof Object);
console.log(typeof true);
console.log(true instanceof Boolean);
console.log(true instanceof Object);
console.log(Boolean(true) instanceof Object);
console.log(new Boolean(true) instanceof Object);
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log((() => {}) instanceof Object);

console.log("-------------------------------");

const p1 = Promise.resolve(1);
const p2 = new Promise((resolve) => resolve(p1));
const p3 = Promise.resolve(p1);
const p4 = p2.then(() => new Promise((resolve) => resolve(p3)));
const p5 = p4.then(() => p4);

console.log(p1 == p2);
console.log(p1 == p3);
console.log(p3 == p4);
console.log(p4 == p5);

console.log("------------------------------------");

function a() {}
const b = function () {};

const c = function d() {
  console.log(typeof d);
  d = "e";
  console.log(typeof d);
};

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
c();

console.log("------------------------------------");

const obj = {
  a: 1,
  b: function () {
    console.log(this.a);
  },
  c() {
    console.log(this.a);
  },
  d: () => {
    console.log(this.a);
  },
  e: (function () {
    return () => {
      console.log(this.a);
    };
  })(),
  f: function () {
    return () => {
      console.log(this.a);
    };
  },
};

console.log(obj.a);
obj.b();
obj.b();
const bb = obj.b;
bb();
obj.b.apply({ a: 2 });
obj.c();
obj.d();
obj.d();
obj.d.apply({ a: 2 });
obj.e();
obj.e();
obj.e.call({ a: 2 });
obj.f()();
obj.f()();
obj.f().call({ a: 2 });

console.log("------------------------------------");

(function () {
  const a = [0];
  console.log("1: ", a.length);
  a[3] = 3;
  console.log("2: ", a.length);
  for (let item of a) {
    console.log("3: ", item);
  }
  a.map((item) => {
    console.log("4: ", item);
  });
  a.forEach((item) => {
    console.log("5: ", item);
  });
  console.log("6: ", Object.keys(a));
  delete a[3];
  console.log("7: ", a.length);
  a[2] = 2;
  a.length = 1;
  console.log(a[0], a[1], a[2]);
})();

console.log("------------------------------------");

console.log(Math.min());
console.log(Math.max());
console.log(Math.min(1));
console.log(Math.max(1, 2));
console.log(Math.min([1, 2, 3]));

console.log("------------------------------------");

// (async () => {
//   await Promise.all([]).then(
//     (value) => {
//       console.log(value);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );

//   await Promise.all([1, 2, Promise.resolve(3), Promise.resolve(4)]).then(
//     (value) => {
//       console.log(value);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );

//   await Promise.all([1, 2, Promise.resolve(3), Promise.reject("error")]).then(
//     (value) => {
//       console.log(value);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// })();

console.log("------------------------------------");

console.log(0 == "0");
console.log(0 === "0");
console.log(Object.is(0, "0"));

console.log(0 == 0);
console.log(0 === 0);
console.log(Object.is(0, 0));

console.log(0 == -0);
console.log(0 === -0);
console.log(Object.is(0, -0));

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

console.log(0 == false);
console.log(0 === false);
console.log(Object.is(0, false));

console.log("-------------------------------------");

console.log(1 / 0);
console.log(-1 / 0);
console.log(0 / 0);
console.log(0 === -0);
console.log(Object.is(0, -0));
console.log(Object.is(0, Math.round(-0.5)));
console.log(Object.is(0, Math.round(0.5)));
console.log(0 * Infinity);
console.log(Infinity / Infinity);
console.log(Object.is(0, Math.sign(0)));
console.log(Object.is(0, Math.sign(-0)));
console.log(1 / -0);
console.log(1 / 0);
//console.log(1n / 0n)

console.log("----------------------------------------");

console.log([] == 0);
console.log([] == false);
console.log(!![]);
console.log([1] == 1);
console.log(!![1]);
console.log(Boolean([]));
console.log(Boolean(new Boolean([])));
console.log(Boolean(new Boolean(false)));

console.log("-------------------------------------------");

(function () {
  const a = 1;
  console.log(a);

  var b;
  console.log(b);
  b = 2;

  console.log(c);
  var c = 3;

  // console.log(d)
  let d = 2;
})();

console.log("-------------------------------------------");

console.log([1] == 1);
console.log([1] == "1");
console.log(["1"] == "1");
console.log(["1"] == 1);
console.log([1] == ["1"]);
console.log(new Boolean(true) == 1);
console.log(new Boolean(true) == new Boolean(true));
console.log(Boolean(true) == "1");
console.log(Boolean(false) == [0]);
console.log(new Boolean(true) == "1");
console.log(new Boolean(false) == [0]);
console.log(null == undefined);

console.log("-------------------------------------------");

function foo() {
  console.log(i);
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
}

foo();

console.log("-------------------------------------------");

(function () {
  const obj = {
    a: 1,
    b: this.a + 1,
    c: () => this.a + 1,
    d() {
      return this.a + 1;
    },
    e() {
      return (() => this.a + 1)();
    },
  };
  console.log(obj.b);
  console.log(obj.c());
  console.log(obj.d());
  console.log(obj.e());
})();

console.log("-------------------------------------------");

(() => {
  if (!fn) {
    function fn() {
      console.log("2");
    }
  }
  fn();
})();

function fn() {
  console.log("1");
}

// another one
function fn1() {
  console.log("3");
}

(() => {
  if (!fn1) {
    function fn1() {
      console.log("4");
    }
  }
  fn1();
})();

console.log(JSON.stringify(["false", false]));
console.log(JSON.stringify([NaN, null, Infinity, undefined]));
console.log(JSON.stringify({ a: null, b: NaN, c: undefined }));

console.log("-------------------------------------------");

function a() {
  console.log(1);
  return {
    a: function () {
      console.log(2);
      return a();
    },
  };
}

a().a();

console.log("---------------------------------------------");

(() => {
    var bar = 1;

    function foo() {
      return this.bar++;
    }
    
    const a = {
      bar: 10,
      foo1: foo,
      foo2: function () {
        return foo();
      },
    };
    
    console.log(a.foo1.call());
    console.log(a.foo1());
    console.log(a.foo2.call());
    console.log(a.foo2());
})();

console.log('---------------------------------------');


console.log('--------------------------------------');


  const arr = [1,,,2]

// forEach
arr.forEach(i => console.log('i: ', i))

// map
console.log(arr.map(i => i * 2))

// for ... of
for (const i of arr) {
  console.log(i)
}

// spread
console.log([...arr])


console.log('--------------------------------------');

(function() {
    const a = {}
    Object.defineProperty(a, 'foo1', {
      value: 1,
      writable: true
    })
    const b = Object.create(a)
    b.foo2 = 1
    
    console.log(b.foo1)
    console.log(b.foo2)
    
    b.foo1 = 2
    b.foo2 = 2
    
    
    console.log(b.foo1)
    console.log(b.foo2)
})();

