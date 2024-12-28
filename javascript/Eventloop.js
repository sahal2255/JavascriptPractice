console.log('first loging')
setTimeout(()=>console.log('set time out'))
Promise.resolve(()=>console.log('promise function')).then((res)=>res())
console.log('last loging')