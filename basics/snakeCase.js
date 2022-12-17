// convert to snake case
function convertToSnakeCase(str) {
  return str
    .replace(/([A-Z])/g, (letter) => `_${letter.toLowerCase()}`)
    .replace(/[\s+\.-]/gi, "_");
}

console.log(convertToSnakeCase("convertMePlease"));
console.log(convertToSnakeCase("convert me-Please"));
