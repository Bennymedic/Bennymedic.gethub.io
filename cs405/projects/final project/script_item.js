//intialization
let count = 0;
let numTotalTicket = 10;
let ticketsList = [];

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
console.log(obj);
users.push(obj);
console.log(users);
let userIdArr = [];
let passwordArr = [];
for (let ele of users) {
  userIdArr.push(ele.user_Id);
  passwordArr.push(ele.password);
}
console.log(userIdArr);
console.log(passwordArr);

//login verification

function login() {
  const userInput = document.querySelector("#userId");
  const password = document.querySelector("#password");
  console.log(userInput.value);
  console.log(password.value);
  
  for (let i = 0; i < userIdArr.length; i++) {
    if (userIdArr.indexOf(userInput.value) === -1) {
      userInput.value = "Incorrect user name";
      userInput.style.color = "red";
      e.preventDefault();
    }
    if (passwordArr.indexOf(password.value) === -1) {
      password.style.color = "red";
      password.value = "Incorrect password";
      e.preventDefault();
    } else {
      window.location.href = "index.html";
    }
  }
}

//Welcome + Name
// const welcome_Name = document.getElementById("welcome_name");
//   welcome_Name.innerHTML ="Welcome" + userInput.value;
//   console.log(welcome_Name);
//item verification

function buyticket() {
const pic = document.getElementById("picture");
const numTicket = document.getElementById("numticket");
const gridEl = document.querySelector(".gridEl");
let avaliable = document.querySelector(".avaliable");
const showWinner = document.getElementById("h2id");
const soldItem = document.getElementById("sold");
const button = document.querySelector("#buyticket");
  let avaliableTickets = parseInt(avaliable.innerHTML);

  let itemId = "Hp1-";

  let ticketId;
  let textWinner;
  let winner;
  let randPick;
  const randGeneretor = () => {
    let rand = Math.ceil(Math.random() * numTotalTicket);
    return rand;
  };
  const buyTickets = document.getElementById("buyticket");
  console.log(buyTickets);
  count = parseInt(numTicket.value);
  avaliableTickets -= count;
  numTicket.value = "";
  for (let i = 0; i < count; i++) {
    if (avaliableTickets < 0) {
      avaliableTickets = 0;
    }
    ticketId = itemId + randGeneretor();
    while (ticketsList.indexOf(ticketId) !== -1) {
      ticketId = itemId + randGeneretor();
    }
    ticketsList.push(ticketId);
  }

  avaliable.innerHTML = avaliableTickets;
  console.log(avaliable.innerHTML);
  console.log(ticketsList[0]);
  if (ticketsList.length >= numTotalTicket) {
    randPick = Math.floor(Math.random() * numTotalTicket);
    winner = ticketsList[randPick];
    showWinner.style.textAlign = "center";
    showWinner.innerHTML = "The winner ticket number is " + winner;
    showWinner.style.display = "";
    sold.style.display = "";
    button.style.display = "none";
  }

  console.log(ticketsList);
  console.log(showWinner);
}

//addEventListeners

const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const image6 = document.getElementById("image6");
const image7 = document.getElementById("image7");
const image8 = document.getElementById("image8");
const image9 = document.getElementById("image9");
const image10 = document.getElementById("image10");
image1.addEventListener("mouseenter", function () {
  image1.style.transform = "scale(2)";
});

image1.addEventListener("mouseleave", function () {
  image1.style.transform = "scale(1)";
});

image2.addEventListener("mouseenter", function () {
  image2.style.transform = "scale(2)";
});

image2.addEventListener("mouseleave", function () {
  image2.style.transform = "scale(1)";
});
image3.addEventListener("mouseenter", function () {
  image3.style.transform = "scale(2)";
});

image3.addEventListener("mouseleave", function () {
  image3.style.transform = "scale(1)";
});
image4.addEventListener("mouseenter", function () {
  image4.style.transform = "scale(2)";
});

image4.addEventListener("mouseleave", function () {
  image4.style.transform = "scale(1)";
});
image5.addEventListener("mouseenter", function () {
  image5.style.transform = "scale(2)";
});

image5.addEventListener("mouseleave", function () {
  image5.style.transform = "scale(1)";
});
image6.addEventListener("mouseenter", function () {
  image6.style.transform = "scale(2)";
});

image6.addEventListener("mouseleave", function () {
  image6.style.transform = "scale(1)";
});
image7.addEventListener("mouseenter", function () {
  image7.style.transform = "scale(2)";
});

image7.addEventListener("mouseleave", function () {
  image7.style.transform = "scale(1)";
});
image8.addEventListener("mouseenter", function () {
  image8.style.transform = "scale(2)";
});

image8.addEventListener("mouseleave", function () {
  image8.style.transform = "scale(1)";
});
image9.addEventListener("mouseenter", function () {
  image9.style.transform = "scale(4.6)";
});

image9.addEventListener("mouseleave", function () {
  image9.style.transform = "scale(1)";
});
image10.addEventListener("mouseenter", function () {
  image10.style.transform = "scale(2)";
});

image10.addEventListener("mouseleave", function () {
  image10.style.transform = "scale(1)";
});
