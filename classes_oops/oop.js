// const user={
//     username:"Moksh",
//     loginCount:8,
//     signedIn: true,
//     getUserDetails:function()
//     {
//          console.log(`Username:${this.username}`);
//          console.log(this);
         
//      }
// }
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);
// new is a constructor function which allows us to create multiple instances from a single object literal

function User(username,loginCount,isLoggedIn)
{
      this.username=username
      this.loginCount=loginCount
      this.isLoggedIn=isLoggedIn
      this.greeting=((username)=>username)
      return this
}

const userOne= new User("Moksh",8,true)
const userTwo= new User("Chai",11,false)
console.log(userOne);
console.log(userTwo);
// if we dont use new then the values will be overwritten

// when we write new an empty object is created which is known as instance if we wriet {this} again and again a new object is created,
//  a Constructor function is called by new which packs the arguement to the function
//  parameters we have given are injected into this keyword 
// we can access the values from the functiom

