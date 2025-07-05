 // {} => scope when it comes with a function or program
if(true)
{
let a=10 
const b=20
var c=30
}
console.log(c);// it will be undefined as scope ofthe variables is within the if statement but c will be print bcoz of (var or no constraint)

function one()
{
    const username="Moksh"
    function two()
    {
        const website ="youtube"
        console.log(username); 
    }
    //console.log(website); 
    // website ka scope function two m hi over ho gya tha // inner function can access the outer function variables
    two()
}
one()

if(true)
{
    const username ="Moksh"
    if(true)
    {
          const   website="youtube"
          console.log(username+ " "+website);
    }
    // console.log(website);  
}


//----------------------------------------
console.log(addone(5));// can access before initialization
function addone(num)
{  // basic function
    return num+1
}
console.log(addTwo(5)); // cannot access before initialization
const addTwo=function(num){ // this is a function sometimes called as expression
    return num+2
}
addTwo(5)