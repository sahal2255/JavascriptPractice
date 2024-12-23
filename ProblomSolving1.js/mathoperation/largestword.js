const word='hello this is sahal vv from selfstack'

const splitted=word.split(' ')
console.log('splitted string',splitted)

function foundLargestword(splitted){

    let lengthofstring=0
    let string=''

    for(let i=0;i<splitted.length;i++){
        if(splitted[i].length>lengthofstring){
            string=splitted[i]
        }
    }
    return string
}
console.log(foundLargestword(splitted))
