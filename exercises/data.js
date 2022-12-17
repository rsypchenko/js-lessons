function reverseArray(arr) {
  let output = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    output.push(arr[i]);
  }

  return output;
}

function reverseArrayInPlace(arr) {
  let first = 0;
  let last = arr.length - 1;
  let mid = ~~(first + (last - first) / 2);

  while (first < mid || mid < last) {
    [arr[first], arr[last]] = [arr[last], arr[first]];
    first++;
    last--;
  }

  return arr;
}

const isObject = (object) => {
  return object != null && typeof object === "object";
};

function deepEqual(obj1, obj2) {
  if (!isObject(obj1) && !isObject(obj2)) return false;
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (const key of Object.keys(obj1)) {
    const isObjects = isObject(obj1[key]) && isObject(obj2[key]);

    if (
      (isObjects && !deepEqual(obj1[key], obj2[key])) ||
      (!isObjects && obj1[key] !== obj2[key])
    ) {
      return false;
    }
  }

  return true;
}

console.log(reverseArray('reverse: ', ["A", "B", "C"]));
console.log('reverse in place: ', reverseArrayInPlace(["A", "B", "C", "D", "E", "G"]));
console.log(
  "deep equal: ",
  deepEqual({ here: { is: "an" }, v: 2 }, { here: { is: "an" }, v: 2 })
);
