const image11 = document.querySelectorAll(".images_hp");
for (let ele of image11) {
  ele.addEventListener("mouseleave", function () {
    ele.style.transform = "translateX(0) scale(1)";
  });
  ele.addEventListener("mouseenter", function () {
    ele.style.transform = "translateX(300px) scale(3)";
  });
}

//intialization
let count = 0;
let numTotalTicket = 10;
let ticketsList = [];
//item verification

function buyticket(e) {
  const pic = document.getElementById("picture");
  const numTicket = document.getElementById("numticket");
  const gridEl = document.querySelector(".gridEl");
  let avaliable = document.querySelector(".avaliable");
  const showWinner = document.getElementById("h2id");
  const soldItem = document.getElementById("sold");
  const button = document.querySelector("#buyticket");
  const invalid = document.querySelector("#label_invalid");
  let avaliableTickets = parseInt(avaliable.innerHTML);

  let itemId = "Hp1223445-";

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
  if (isNaN(count) || count < 0 || count > numTotalTicket) {
    count = 0;
    invalid.style.display = "";
    numTicket.value = "";
    e.preventDefault();
  }
  invalid.style.display = "none";
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
    numTicket.style.display = "none";
  }

  console.log(ticketsList);
  console.log(showWinner);
}
