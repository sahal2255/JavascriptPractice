const myName = 'sa*h*al';
let output = '';

for (let i = 0; i < myName.length; i++) {
    if (myName[i] === '*') {
        output=output.slice(0,-1)
    }else{
        output +=myName[i]
    }
}

console.log('output', output); 
