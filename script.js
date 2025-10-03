let accountBalance = 1000;
let cashBalance = 1000;
let log = document.getElementById("log");

function updateLog() {
  log.value += `\nAccount balance: ${accountBalance}, Cash balance: ${cashBalance}`;
}

function process() {
  let operation = document.getElementById("operation").value;
  let amount = parseInt(document.getElementById("amount").value);

  if (operation === "deposit") {
    if (cashBalance >= amount) {
      accountBalance += amount;
      cashBalance -= amount;
      log.value += `\nDeposited ${amount}. Account: ${accountBalance}, Cash: ${cashBalance}`;
    } else {
      log.value += `\nNot enough cash to deposit ${amount}`;
    }
  } else if (operation === "withdraw") {
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
  let currency = document.getElementById("currency").value;
  let output = 0;

  const rate = 36;

  if (currency === "USD") {
    output = input * rate;
  } else {
    output = input / rate;
  }

  document.getElementById("outputBalance").value = output.toFixed(2);
}
