const array=[1,2,3,5,3,4,8]
const sorted=array.sort((a,b)=>a-b)
// console.log(sorted)
const duplicated=[...new Set(sorted)]

console.log(duplicated)
let consi= 0
for(let i=1;i<=duplicated.length;i++){
    if(i==duplicated[i-1]){
        // console.log('hello',i)
        consi ++
    }
}
console.log(consi) 