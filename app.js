

// const user = {
//     name: "Dilmurad",
//     email: "dilmurad2307@gmail.com",
//     age: 17,
//     greetuser() {
//         // console.log("hello " + user.name);
//         // console.log(this)

//         return `hello ${this.name}`
//     }
// }
// console.log(user.name)
// delete user.name
// user.firstname = "Dilmurad"
// user.lastname = "Mastoi "


// console.log(user);






const username = document.querySelector("#name")
const number = document.querySelector("#number")
const email = document.querySelector("#email")
const text = document.querySelector("#text")


function getVal (){
    const obj = { 
       username : username.value,
       number : number.value,
       email : email.value,
       text : text.value,
    }
    console.log(obj)
}
// console.log(getVal)
