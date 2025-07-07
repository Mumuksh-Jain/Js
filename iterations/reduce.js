const myNums=[1,2,3,4,5]
// const Total= myNums.reduce(function (acc,currval)
// {
//     console.log(`acc : ${acc} , currval "${currval}`);
// return acc+currval
// },0)

const Total =myNums.reduce((acc,currval)=>acc+currval,0)
console.log(Total);

const ShoppingCart =[
    {
        item:"Js course",price:999
    },
    {
        item:"AI course",price:1999
    },
    {
        item:"AppDev course",price:2999
    },
    {
        item:"Dev course",price:3999
    }
]
const pricetopay=ShoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay);
