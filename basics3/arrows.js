const user =
{
    username:"moksh",price:999,
    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome to website `); // here this is used to refer the user scope
        console.log(this);
        
    }
}
// this is an  empty object in global scope 
// window is the global object in browser
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// const chai = () =>
// {
//     let username="Lol"
//     console.log(this.username);
// }
// chai()

//syntax for arrow function 
//()=>{}
// const addTwo=(num1,num2) =>
// {
//     return num1+num2
// } 
// const addTwo=(num1,num2) => (num1+num2) implicit return 
// return is used when curly brackets are there
// objects can only be returned in small brackets
const addTwo= (num1,num2) => ({username:"Hitesh"})

console.log(addTwo(3,4));



