const mysym=Symbol("mysymbol");

var object={
    firstName:"Shiva",
    Fullname:"SivaKumar",
    [mysym]:"myitem",
    email:"shivakuamr@gmail.com",
    age:22,
}

console.log(object);


object.greetings=function(){
    console.log(`hello yourself ${this.Fullname}`)
}


console.log(object.greetings())