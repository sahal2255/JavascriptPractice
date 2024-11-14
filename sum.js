console.log('trying to access the sim module')

function calculateSum(a,b){
    const sum=a+b;
    console.log('sum in to the exported file',sum)
}
module.exports={
    calculateSum

}
