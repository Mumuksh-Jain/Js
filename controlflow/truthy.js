const userEmail ="Moksh"
if(userEmail)
{
    console.log("Got the email");
}
else
   console.log("Don't have email");
   
// false,0,-0,BigInt 0n,empty string "" ,null, Undefined,NaN  => falsy values

// "0",'false," ",[],{},function(){}  =>truthy values

if(userEmail.length===0)
    console.log("Array is Empty");

const emptyObj ={}
if(Object.keys(emptyObj).length===0)
    console.log("Object is Empty");

// false ==0  true
// false==''  true
// 0==''      true
    
// Nullish  Coalescing Operator (??) : null undefined
// only for null and undefined
// returns the first value found
//used with functions so that if the return is not there null is printed
let val1;
val1= 5??10
console.log(val1);
var1= undefined ??15

//ternary Operator
// condition?true:false
const ice='cold'

ice=='cold'?console.log("yes"): console.log("no");

