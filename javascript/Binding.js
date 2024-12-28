let person1={
    firstname:'muhammad',
    lastname:'sahal',
    fullName:(()=>{
        console.log(this.firstname+" "+this.lastname)
    })
}
person1.fullName()