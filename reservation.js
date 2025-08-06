const form = document.getElementById("reservationForm");
const card = document.getElementById("confirmationCard");
const success = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("confName").innerText = document.getElementById("name").value;
  document.getElementById("confPhone").innerText = document.getElementById("phone").value;
  document.getElementById("confEmail").innerText = document.getElementById("email").value;
  document.getElementById("confDate").innerText = document.getElementById("date").value;
  document.getElementById("confTime").innerText = document.getElementById("time").value;
  document.getElementById("confPersons").innerText = document.getElementById("persons").value;
  document.getElementById("confTable").innerText = document.getElementById("table").value;
  document.getElementById("reserve").innerText = document.getElementById("amount").value;
  form.classList.add("hidden");
  card.classList.remove("hidden");
});

document.getElementById("editBtn").addEventListener("click", function () {
  form.classList.remove("hidden");
  card.classList.add("hidden");
});

document.getElementById("confirmBtn").addEventListener("click", function () {
  card.classList.add("hidden");
  success.classList.remove("hidden");
});

document.getElementById("table").addEventListener("change", function () {
  const selectedOption = this.options[this.selectedIndex];
  const capacity = selectedOption.getAttribute("data-capacity");
  console.log("Selected table capacity:", capacity); // Use this to calculate amount or do further logic
});

function updateAmount() {
  const tableSelect = document.getElementById("table");
  const selectedOption = tableSelect.options[tableSelect.selectedIndex];
  const capacity = selectedOption.getAttribute("data-capacity");

  let amount = 0;
  if (capacity === "4") {
    amount = 500;
  } else if (capacity === "6") {
    amount = 1000;
  } else if (capacity === "10") {
    amount = 1200;
  }

  document.getElementById("amount").value = amount;
}
