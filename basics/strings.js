const name="Moksh"
const repoCount=50
console.log(`Hello my name is ${name} my repo count is ${repoCount}`);
const gameName = new String('Moksh/Hello')
console.log(gameName[0]);
console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));

const newString= gameName.substring(0,2);
console.log(newString);

const anotherString =gameName.slice(-5,-4)
console.log(anotherString);
// trim()remove empty spaces
// replace() for change in string

console.log(gameName.split('/'));







