console.log("Hello World");


// const name = document.querySelector("#name")
// const age = document.querySelector("#age")
// const btn = document.querySelector("#btn")
// const list = document.querySelector("#list")

// function greet(){
//     list.innerHTML = ""
//     list.innerHTML += name.value +  " " + age.value ;
// }





//   const userForm = document.getElementById("userForm");
//   const userList = document.getElementById("userList");

//   let users = [];

//   // Add new user
//   userForm.addEventListener("submit", function(e) {
//     e.preventDefault();

//     users.push({
//       name: document.getElementById("name").value,
//       age: document.getElementById("age").value
//     });

//     userForm.reset();
//     renderUsers();
//   });

//   // Render all users
//   function renderUsers() {
//     userList.innerHTML = "";

//     users.forEach((user, index) => {
//       const li = document.createElement("li");

//       li.innerHTML = `
//         <span>Name: ${user.name}, Age: ${user.age}</span>
//         <button onclick="editUser(${index})">Edit</button>
//       `;

//       userList.appendChild(li);
//     });
//   }

//   // Enable editing for a specific user
//   function editUser(index) {
//     const user = users[index];
//     const li = userList.children[index];

//     li.innerHTML = `
//       <input type="text" id="editName${index}" value="${user.name}">
//       <input type="number" id="editAge${index}" value="${user.age}">
//       <button onclick="saveUser(${index})">Save</button>
//       <button onclick="renderUsers()">Cancel</button>
//     `;
//   }

//   // Save updated user info
//   function saveUser(index) {
//     const newName = document.getElementById(`editName${index}`).value;
//     const newAge = document.getElementById(`editAge${index}`).value;

//     users[index] = { name: newName, age: newAge };

//     renderUsers();
//   }

//   // Make functions available globally (needed for inline onclick)
//   window.editUser = editUser;
//   window.saveUser = saveUser;






