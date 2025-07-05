const a=[1,2,3]
const b=[4,5,6]
const c=a.concat(b)
console.log(c);
const d=[1,2,[4,5,[6,7]]]
console.log(d.flat(Infinity));// flat displays all elements ina single array

console.log(Array.isArray("Moksh"));
console.log(Array.from("Moksh"));
console.log(Array.from({name:"Moksh"}));//

let s1=10
let s2=20
console.log(Array.of(s1,s2));
