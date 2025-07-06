// Immediately Invoked Function Expressions (IIFE)
// this is for immediate execution and so theta the glocal variable doesnt pollute the fucntion variable

 (function chai()
 {
   // named iife
    console.log("DB connected");
 })();

 ( (name) =>
 { 
   console.log(`DB connected two ${name}`);
 } 
 ) ('Moksh')
