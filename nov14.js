function likes(names) {
    if(names.length===0){
      return 'no one likes this'
    }else if(names.length===1){
        return `${names[0]} likes this `
    }else if(names.length===2){
        return `${names[0]} and ${names[1]} likes this post`
    }else if(names.length===3){
        return `${names[0]}, ${names[1]} and ${names[2]} likes this post`
    }
    else{
        return `${names[0]},${names[1]} and ${names.length - 2} others like this`
    }
    
   
  }
  console.log(likes(["Peter"]))
  console.log(likes(["Max", "John", "Mark"]))