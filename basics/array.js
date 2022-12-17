// map 
Array.prototype.customMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

// reduce
Array.prototype.customReduce = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0]: initialValue;
    let start = initialValue === undefined ? 1 : 0;

    for (let i = start; i < this.length; i++) {
         accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

// filter
Array.prototype.customFilter = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        let check = callback(this[i], i, this);
        if(check) {
            result.push(this[i]);
        }
    }
    return result;
}

// sort
Array.prototype.customSort = function(callback) {
   for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - i - 1; j++) {
        if (callback(this[j], this[j + 1])) {
            [this[j + 1], this[j]] = [this[j], this[j + 1]]
        }
    }    
   }
   return this;
}


console.log('map: ', [1,2,3,4].customMap((item) => item * 2));
console.log('reduce: ', [1,2,3,4].reduce((acc, current) => acc += current, 0));
console.log('filter: ', [1,2,3,4].customFilter((item) => item === 1));
console.log('sort: ', [1,3,2,4].sort((a, b) => a - b));

