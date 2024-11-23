const str='Malayalam'

// check the string is a palindrome using built in method

const lower=str.toLowerCase()
// console.log('lowercased ',lower)
const splitted=lower.split('').reverse('').join('')
// console.log('splitted the string',splitted)

if(lower===splitted){
    console.log('this is palindrome')
}else{
    console.log('this is not a palindrome')
}


// check the string is a palindrome without using built in method


