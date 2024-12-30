const array=['hello','this','is','problom','elephant','apple']

function sortAlphabetic(array){
    return array.sort()
}
function sortReverseAlphabetic(arr){
    const sorted=arr.sort()
    return sorted.reverse()
}
console.log('sort alphabetically',sortAlphabetic(array))
console.log('sort reverse alphabetical',sortReverseAlphabetic(array))