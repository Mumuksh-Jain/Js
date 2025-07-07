// if
//<,>,<=,>=,==,!=,==,===(used for checking datatype)
// const isUserLoggedIn= true
// const temp=41
// if(isUserLoggedIn)
// {
//    console.log(`Executed`);
//     if (temp<50)
//     {
//   console.log(`tempature : ${temp} is less than 50`); 
//     }
// }

let score=200
if(score>=100)
{
    let power ="fly"
    console.log(`User power :${power}`);
    // var is not used bcoz we want power in this scope only
}
let balance=20
// if(balance>15)
//     console.log("Balance");

//-----------if-elseif -else-------------

// if(balance<15)
//     console.log("<15");
// else if (balance>25)
//     console.log(">25");
// else
//     console.log("15<Balance<25");
    
//   || => or , && => and , !=>not

//-------------switch----------------

const month =3
switch(month)
{
    case 1:
        console.log("January"); break;
    case 2:
        console.log("February");break;
    case 3:
        console.log("March");break;
    case 4:
        console.log("April");break;
    default:
        console.log("Not appropriate");
}