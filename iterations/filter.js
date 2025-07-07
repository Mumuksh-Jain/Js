const coding=['js','c','c++']
// const values =coding.forEach((item )=>
// {
//     //console.log(item);
//     return item
// })

// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums =myNums.filter((num) =>
//     {
//        return num>4
//     })
// console.log(newNums);

// using for each as filter

const newNums =[]

myNums.forEach((num)=>
{
    if(num>4)
    {
        newNums.push(num)
    }
})
console.log(newNums);

const books = [
    {
        title :"Book One",genre:"Romance",publish:1976
    },
    {
        title :"Book Two",genre:"Mystery",publish:1975
    },
    {
        title :"Book Three",genre:"Romance",publish:2001
    },
    {
        title :"Book Four",genre:"History",publish:2005
    },
    {
        title :"Book Five",genre:"Mystery",publish:1950
    }
]

let userBooks =books.filter((bk)=>bk.genre=="Romance")
console.log(userBooks);

userBooks =books.filter ((bk)=> bk.publish>2000)
console.log(userBooks);
