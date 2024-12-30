function groupedByFilter(arr,condition){
    return[
        arr.filter(element=>condition(element)),
        arr.filter(element=>!condition(element))
    ]
}
const array=[1,5,4,9,2,3,5]
const condition=item=>item%2===0
console.log(groupedByFilter(array,condition))