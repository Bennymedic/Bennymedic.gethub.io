// Welcome + Name
const welcome_Name = document.getElementById("user_name");
const json = localStorage.getItem("listUsers");
welcome_Name.innerHTML += " "+ json+ "!";
console.log(welcome_Name);


// addEventListeners;

const image1 = document.querySelectorAll(".image1");
for (let ele of image1){
  ele.addEventListener("mouseenter", function () {
  ele.style.transform = "scale(1.5)";
});
ele.addEventListener("mouseleave", function () {
  ele.style.transform = "scale(1)";
});
}