// for

for(let index=0;index<=10;index++)
{
  const element =index
  if(element==5)
   console.log("5 is best");
  console.log(element);
}// element is only working inside the for sope

// for(let i=0;i<=10;i++)
// {
//     console.log(`Outer loop value ${i}`);
//     for(let j=1;j<=10;j++)
//         // console.log(`Inner loop value ${j}`);
//     console.log(i+'*' + j+"="+i*j);    
// }

// let myarr=["tom","Sam","Ram"]
// for(let i=0;i<myarr.length;i++)
//   { const el= myarr[i];
//     console.log(el);
//   }

  // -------break and continue----

  for(let i=1;i<=20;i++)
  {
   if(i==5)
      { console.log("Detected 5");
        break;
      }   
    console.log(`Value of i is ${i}`);
  } // break is for coming out of loop 

    for(let i=1;i<=20;i++)
  {
    if(i==5)
       { console.log("Detected 5");
        continue;
       }   
    console.log(`Value of i is ${i}`);
  } // it continues the loop just discarding the statements below it 
