const title ="Hello"
const desc="this is description"
desc="Hey"
let a = 4
var m =5


// arrow function
const myFunc = (x,y)=>x+y


// hoc
function HOC(myFunc){
    let x =5;
    let y=6;
   let sum =myFunc(x,y)
   console.log(sum)

   return ()=>{
      console.log("exemple")
   }
}





const arr =[1,2,3]
arr.forEach((el)=>{
     el=el+2
})

const arrCopy = arr.map((el)=>{
        return el +2
})

const isElement = arr.find(el=>el===3)

const farrFiltred = arr.filter((el)=>el>2)

const sum = arr.reduce((acc,curr)=>{
        return acc + curr
})

