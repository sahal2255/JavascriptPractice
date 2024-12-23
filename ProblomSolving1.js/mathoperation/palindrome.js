const str1='malayalam'
const str2='sahal'
function checkPalindrome(str){
    const changesString=str.toLowerCase()
    const reversed=str.split('').reverse().join('')
    if(changesString===reversed){
        return 'its a palindrome'
    }
    return 'its not a palindrome'
}
console.log(checkPalindrome(str1))
console.log(checkPalindrome(str2))
