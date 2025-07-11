function multipleby5(num){
    // this.num=num
    return num*5
}
// function,array,string  can behave as object also because javascript has prototypal inheritance that is null which is of an object
multipleby5.power =2
console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);

function createUser(username,score)
{
    this.username=username
    this.score=score

}
createUser.prototype.increment =function()
{
    this.score++
}

createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
    
}
const chai = new createUser("chai",25)
const tea = createUser("tea",250)

chai.printMe()