let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arr) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            output.push(...flatten(arr[i]));
        } else {
            output.push(arr[i]);
        }
    }

    return output;
}

console.log(flatten(arrays));