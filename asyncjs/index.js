// setTimeout(
//     ()=>{
//    console.log("How are you ?")
// }
// ,2000)
// console.log("Hi")

// setTimeout(() => {
//     console.log("First message")
//     setTimeout(()=>{
//         console.log("Second message")
//         setTimeout(()=>{
//             console.log("Third message")
//         },1000)
//     },1000)
// }, 1000);

// construction de la promese 
// const isAuth= false
// const pr = new Promise((resolve,reject)=>{
//      if(isAuth){
//         resolve("User authenticated")
//      }else{
//         reject("You must first login")
//      }
// })
// // consomation de la promese
// pr.then((data)=> console.log(data))
// .catch((err)=>console.log(err))


const printData =(data)=>{
    return new Promise((resolve,reject)=>{
        if(!data){
            reject("You must provide a valid string ")
        }else{
            setTimeout(()=>{  
                console.log(data) 
               resolve()
            },1000)
        }
    })
}
// printData("Hi how are you ?")
// .then(()=>printData("SecondMessage"))
// .then(()=>printData("Third message"))
// .catch((err)=>console.log(err))

const printAll = async()=>{
    try{
        await printData("Hi how are you ?")
        await printData("Second message")
        await printData("Third message")
    }catch(err){
      console.log(err)
    }
}

// printAll()

// fetch("https://fakestoreapi.com/products")
// .then(res=>res.json())
// .then(data=>console.log(data))

// const dataFetching = async(url)=>{
//     try{
//      const res = await fetch(url)
//      const data = await res.json()
//      console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// dataFetching("https://fakestoreapi.com/products")

