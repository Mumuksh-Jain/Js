//singleton
// object literals
// Object.create
// for using symbol as a key [key] are used 
const mySym = Symbol("key1")

const JsUser={
    name:"Hitesh",
    [mySym]:"myKey1",
    age:18,
    email : "moksh@gmail.com",
    isLoggedIn: false,
    lastLoginDays :["Monday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.age =20
// Object.freeze(JsUser)
JsUser.age=25
console.log(JsUser);
// accessing values of object by dot
JsUser.greeting = function()
{
    console.log("Hello User"); 
}
JsUser.greeting2 = function()
{
    console.log(`Hello User,${this.name}`); 
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());





