// function myName(){
// console.log('M');
// console.log('o');
// console.log('k');
// console.log('s');
// console.log('h');
// }
// myName();
function addnumbers(num1,num2)
{
    // let result = num1+num2
    // return result
    return num1+num2
    
}
const result= addnumbers(2,7)
console.log(`Result : ${result}`);

function loginUserMessage(username ="sam")
{// if wont run as sam is the passed value if user has not given anything
    if(!username)
    {
        console.log("Please enter a username");
        return 
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Moksh"))
console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1)//... is used store all the passed value at one time in an array
{
    return num1
}
console.log(calculateCartPrice(200,400,500));

// const user ={
//     username:"Moksh",
//     price:20
// }

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);  
}
//handleObject(user)
handleObject(
    {
        username:"sam",price:70
    }
)
const myarr= [200,400,100,500]

function returnSecondValue(getArray)
{
    return getArray[1]
}
console.log(returnSecondValue(myarr));
