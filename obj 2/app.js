// const students = [
// { name: "Aman", age: 20 },
// { name: "Sara", age: 22 },
// { name: "Ravi", age: 19 },
// { name: "Nisha", age: 21 },
// { name: "Kunal", age: 23 },
// { name: "Meera", age: 20 },
// { name: "Sahil", age: 18 },
// { name: "Tina", age: 22 },
// { name: "Arjun", age: 19 },
// { name: "Kavya", age: 21 }
// ];



// for (let i = 0; i < students.length ; i++){
//     console.log(students[i].name)
// }



// const products = [
// { title: "Laptop", price: 45000 },
// { title: "Mouse", price: 800 },
// { title: "Keyboard", price: 1200 },
// { title: "Monitor", price: 9000 },
// { title: "USB Cable", price: 300 },
// { title: "Headphones", price: 1500 },
// { title: "Charger", price: 700 },
// { title: "Webcam", price: 2500 },
// { title: "Mic", price: 2800 },
// { title: "Speaker", price: 3200 }

// ];

//  let totalPrice = 0;
// for (let i = 0; i < products.length; i++) {
//     // console.log(products[i]);
//     // console.log(products[i].price);
//    let  eachprice = products[i].price;
//   totalPrice += eachprice
// //   console.log(eachprice);
// }
// console.log(totalPrice);




// const employees = [
// { name: "John", salary: 55000 },
// { name: "Maya", salary: 48000 },
// { name: "Karan", salary: 65000 },
// { name: "Reena", salary: 70000 },
// { name: "Dev", salary: 52000 },
// { name: "Hina", salary: 45000 },
// { name: "Vishal", salary: 75000 },
// { name: "Rita", salary: 35000 },
// { name: "Amit", salary: 90000 },
// { name: "Sunil", salary: 60000 }
// ];

// const div = document.querySelector(".div")

// for (let i = 0; i < employees.length; i++){
//     if (employees[i].salary >= 50000){
//         console.log(employees[i]);


//         div.innerHTML += `<h1>${employees[i].name}</h1>
//         <h3>${employees[i].salary}</h3>
//         `

//     }
// }


const books = [
{ title: "Book A", category: "fiction" },
{ title: "Book B", category: "science" },
{ title: "Book C", category: "fiction" },
{ title: "Book D", category: "history" },
{ title: "Book E", category: "fiction" },
{ title: "Book F", category: "math" },
{ title: "Book G", category: "fiction" },
{ title: "Book H", category: "science" },
{ title: "Book I", category: "fiction" },
{ title: "Book J", category: "novel" }
];


let count = 0
for (let i = 0 ; i < books.length ; i++){
    if(books[i].category == "fiction"){
       count ++
    }
} 
console.log(count);

