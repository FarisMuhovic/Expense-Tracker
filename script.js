let todaysDate = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[todaysDate.getDay()];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[todaysDate.getMonth()];
let dayOfMonth = todaysDate.getDate();
let year = todaysDate.getFullYear();
let dateText = document.getElementById("date");
dateText.innerText = day + " / " + month + " / " + dayOfMonth + " / " + year;

const addBtn = document.getElementById("add-btn");
const table = document.getElementById("maintable");

let spentMoney = 0;
addBtn.addEventListener("click", function () {
  let date = document.getElementById("dayofdate").value;
  let transactionName = document.getElementById("item-name").value;
  let price = document.getElementById("price").value;
  if (transactionName != "" && price != "") {
    spentMoney += Number(price);
    console.log(spentMoney);
    document.getElementById("dayofdate").value = "";
    document.getElementById("item-name").value = "";
    document.getElementById("price").value = "";
    table.innerHTML += `          
    <tr>
      <td>${date}</td>
      <td>${transactionName}</td>
      <td>$${price}</td>
    </tr>  `;
    document.getElementById("spent").innerText = spentMoney;
  } else {
    window.alert("Please enter a Number and Input a Transaction Name");
  }
});
document.getElementById("spent").innerText = spentMoney;
