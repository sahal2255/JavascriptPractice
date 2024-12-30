const string='Hello sahal'

let splitted=string.split('')
console.log('spliteed',splitted)

const c=splitted.reduce((acc,cur)=>{
    if(acc[cur]=(acc[cur]||0)+1){
         acc[cur]+1
    }
    acc[cur]
    return acc
},{})
console.log('count',c)