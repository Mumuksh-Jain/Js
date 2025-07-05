const arr =[1,2,3,4,5]
const b =["Moksh","Ram"]
console.log(arr);
console.log(arr.push(6));
console.log(arr);
//push-insert element in array
// pop- remove the last value
// unshift - insert at beginning (not preferred beacuse all the elements have to be pushed)
//shift - removes the first element
// includes - check element present in array
// indexof - gives index of entered element
 const newarr= arr.join() // join makes the array a string otherwise it's an object

 console.log(arr);
 console.log(newarr);
 console.log(typeof(arr));
 console.log(typeof(newarr));

 // slice,splice
 console.log("a",arr);

const myn1=arr.slice(1,3)
 console.log(myn1);
 console.log("b",arr); // slice display the given range

 const myn2=arr.splice(1,3)
 console.log(myn2);
 console.log("c",arr);  // splice takes out the given range from the array and delete them from the array

 
 
 
 
 
 
 

