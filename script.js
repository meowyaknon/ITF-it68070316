let accountBalance = 1000;
let cashBalance = 1000;
let log = document.getElementById("log");
let selectedCurrency = "USD";
let selectedOperation = "deposit";

function updateLog() {
  log.value += `\nAccount balance: ${accountBalance}, Cash balance: ${cashBalance}`;
}

function process() {
  let amount = parseInt(document.getElementById("amount").value);

  if (selectedOperation === "deposit") {
    if (cashBalance >= amount) {
      accountBalance += amount;
      cashBalance -= amount;
      log.value += `\nDeposited ${amount}. Account: ${accountBalance}, Cash: ${cashBalance}`;
    } else {
      log.value += `\nNot enough cash to deposit ${amount}`;
    }
  } else if (selectedOperation === "withdraw") {
    if (accountBalance >= amount) {
      accountBalance -= amount;
      cashBalance += amount;
      log.value += `\nWithdrew ${amount}. Account: ${accountBalance}, Cash: ${cashBalance}`;
    } else {
      log.value += `\nNot enough account balance to withdraw ${amount}`;
    }
  }

  document.getElementById("accountBalance").value = accountBalance;
  document.getElementById("cashBalance").value = cashBalance;
}

function convert() {
  let input = parseFloat(document.getElementById("inputBalance").value);
  let output = 0;
  const rate = 36;

  if (selectedCurrency === "USD") output = input * rate;
  else output = input / rate;

  document.getElementById("outputBalance").value = output.toFixed(2);
}

const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownList = document.getElementById("dropdownList");

if (dropdownBtn && dropdownList) {
  dropdownBtn.addEventListener("click", () => {
    dropdownList.style.display =
      dropdownList.style.display === "block" ? "none" : "block";
  });

  dropdownList.addEventListener("click", (e) => {
    if (e.target.classList.contains("dropdown-item")) {
      selectedCurrency = e.target.getAttribute("data-value");
      dropdownBtn.textContent = e.target.textContent + " ▼";
      dropdownList.style.display = "none";
    }
  });
}

const operationBtn = document.getElementById("operationBtn");
const operationList = document.getElementById("operationList");

if (operationBtn && operationList) {
  operationBtn.addEventListener("click", () => {
    operationList.style.display =
      operationList.style.display === "block" ? "none" : "block";
  });

  operationList.addEventListener("click", (e) => {
    if (e.target.classList.contains("dropdown-item")) {
      selectedOperation = e.target.getAttribute("data-value");
      operationBtn.textContent = e.target.textContent + " ▼";
      operationList.style.display = "none";
    }
  });
}

window.addEventListener("click", (e) => {
  if (!e.target.closest(".custom-select")) {
    if (dropdownList) dropdownList.style.display = "none";
    if (operationList) operationList.style.display = "none";
  }
});
