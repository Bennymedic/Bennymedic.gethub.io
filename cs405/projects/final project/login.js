//user container
let users = [
  {
    first_name: "John",
    last_name: "Carl",
    user_Id: "jon",
    password: "1111",
    confirm_password: "1111",
  },
  {
    first_name: "Carrol",
    last_name: "Mark",
    user_Id: "carrol",
    password: "2222",
    confirm_password: "2222",
  },
  {
    first_name: "Wengel",
    last_name: "Arsenal",
    user_Id: "wengel",
    password: "3333",
    confirm_password: "3333",
  },
];
//Adding new registered users
const json = localStorage.getItem("form");
const obj = JSON.parse(json);
users.push(obj);
let userIdArr = [];
let passwordArr = [];
for (let ele of users) {
  userIdArr.push(ele.user_Id);
  passwordArr.push(ele.password);
}

//login verification
function login(e) {
  const userInput = document.querySelector("#userId");
  const password = document.querySelector("#password");
  const incorrect_user = document.querySelector("#incorrect_user");
  const incorrect_pass = document.querySelector("#incorrect_pass");
  
  let input_name = userInput.value;
  for (let i = 0; i < userIdArr.length; i++) {
    if (userIdArr.indexOf(userInput.value) === -1) {
      incorrect_user.style.display = "";
      userInput.style.border = "1px solid red";
      e.preventDefault();
    }
    if (passwordArr.indexOf(password.value) === -1) {
      password.style.border = "1px solid red";
      incorrect_pass.style.display='';
      
      // password.value = "Incorrect password";
      e.preventDefault();
    } else {
      window.location.href = "index.html";
    }
  }
  //save to local storage
  localStorage.setItem("listUsers", input_name);
}
