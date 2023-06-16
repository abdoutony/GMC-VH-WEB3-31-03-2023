// no window , we have globals
global.console.log("Hello world")

console.log(__dirname)
console.log(__filename)

console.log(process.pid)
console.log(process.versions.node)
// console.log(process.argv)

// const [,,firstname,lastname] = process.argv
// console.log(firstname)
// console.log(lastname)

const arrCopy = process.argv.map((el,index)=>{
    if(index===0 || index===1){
        return ""
    }else{
        return el
    }
}).filter(el=>el!=='')
console.log(arrCopy)