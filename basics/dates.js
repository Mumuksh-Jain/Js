let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(typeof(myDate));

// let mynewdate= new Date(2025,4,6)
// console.log(mynewdate.toDateString());

// let myynewdate =new Date("01-14-2023")
// console.log(myynewdate.toLocaleString());

// let mytimestamp= Date.now()
// console.log(mytimestamp);

// console.log(mynewdate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"long",
})










