const array=[1,'',false,NaN,undefined,null]

function filterFalsy(arr){
    return [arr.filter(item=>!item),arr.filter(item=>item)]
}
console.log(filterFalsy(array))