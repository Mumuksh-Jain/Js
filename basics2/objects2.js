// singleton object const tinderUser ={}
//const tinderUser =new Object() - not singleton

const TinderUser ={}

TinderUser.id="123ab"
TinderUser.age=18
TinderUser.isLoggedIn =false
//console.log(tinderUser)
const regularUser ={
    email:"moksh@gmail",
    fullname:{
        firstname:"Moksh",
        lastname:"Jain"
    }
}
console.log(regularUser["fullname"]);
console.log(regularUser.fullname.firstname);

const obj1 ={  1:"a", 2:"b"}
const obj2 ={  3:"a", 4:"b"}

// const obj3= {...obj1,...obj2}// ...  mostly used for concatenation into a single object
const obj3=Object.assign({},obj1,obj2)//{} is for guranteed combined values

console.log(obj3);

const users = [ 
    {id:1,email:"h@email.com" },
    { id:2,email:"ha@email.com"}
]
users[1].email
console.log(TinderUser);

console.log(Object.keys(TinderUser));// output is an array
console.log(Object.values(TinderUser));//output is an array
console.log(TinderUser.hasOwnProperty('isLoggedIn'));
console.log(users[0].id);

const course ={
    name:"Js",price:400,Instruct:"Moksh"
}
const {Instruct: instructor}=course
console.log(instructor);
/* React destructure
 const navbar= ({company})=>{ }
 navbar(company="hitesh")
*/
  //  JSON
/*  {
     "name": "Moksh",
     "coursename":"Js",
     "price":"free"
 } */