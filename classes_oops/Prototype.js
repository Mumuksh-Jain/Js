// let myName ="Moksh     "
// console.log(myName.trim().length);
// let myChannel="chai   "
// make a single method which will give true length of string
let myHeroes=["thor","spiderman"]

let heroPower ={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower : function()
    {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.Moksh=function()
{
    console.log(`Moksh is present in all objects`);
    
}
heroPower.Moksh()
myHeroes.Moksh()
Array.prototype.hiMoksh=function()
{
    console.log(`Moksh is present in all objects`);  
}
myHeroes.hiMoksh()
// heroPower.hiMoksh() // gives error

// inheritance
const User={ name:"Chai",email:"abc@gmail.com"}
const Teacher={makeVideo:true}
const TeachingSupport={isAvailable:false}
const TASupport ={ makeAssignment:"JS Assignment",fullTime:true,
__proto__:TeachingSupport
}
Teacher.__proto__=User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername ="ChaiAurCode  "

String.prototype.trueLength=function()
{
    console.log(`${this}`);
    console.log(`True length is :${this.trim().length}`);
}
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()