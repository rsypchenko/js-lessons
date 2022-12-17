// cloneDeep
function cloneDeep(obj) {
  if (obj === null|| typeof obj !== "object") return obj;
  const newObject = Array.isArray(obj) ? [] : {};

  for (const key of Object.keys(obj)) {
    newObject[key] = cloneDeep(obj[key]);
  }

  return newObject;
}

// debounce
const debounce = function (fn, delay) {
  let timer;

  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
}

// throttle
const throttle = function (fn, limit) {
  let inThrottle;

  return function () {
    const args = arguments;
    const context = this;

    if (!inThrottle) {
      fn.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

const throttle2 = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
       }, limit - (Date.now() - lastRan));
    }
  }
}
