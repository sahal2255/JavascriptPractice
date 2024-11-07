const Data=[
    {
        name:'ajmal',
        age:'22'
    },
    {
        name:'sahal',
        age:'22'
    },
    {
        name:'shihas',
        age:'24'
    },
    {
        name:"suhail",
        age:'23'
    },
    {
        name:'saeed',
        age:'18'
    },
    {
        name:'sahal',
        age:'22'
    },

]

const foundSameAge=Data.filter((item)=>{
    return item.age==='22'
})
// console.log('founded same age ' ,foundSameAge )

const foundDuplicates=Data.find((item)=>{
    return item
})

// console.log('founded duplicates',foundDuplicates)


const nestedArray = [1, [2, [3, 4], 5], 6];

const stringOne='sahalvv'

const reversed=stringOne.split('').reverse().join('')
console.log('reverserd String ',reversed)
