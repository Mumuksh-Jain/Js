const coding = ['js','c','c++','java']

// coding.forEach(function (val) {
//     console.log(val);  
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item)
// {
// console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((ClipboardItem,index,arr) => {
//      console.log(ClipboardItem,index,arr);
// } )

     const myCoding =[
        {
            lang:"Javascript",sh:"js"
        },
        {
            lang:"Java",sh:"java"
        },
        {
            lang:"Python",sh:"py"
        }
     ]
     myCoding.forEach((item)=>{
        console.log(item.lang);
     }
    )