const totalBill = document.getElementById('totalBill');
const totalTip = document.getElementById('totalTip');
const totalBillPerPeople = document.getElementById('totalBillPerPeople');
const resultsSummary = document.getElementById('resultsSummary');
const resultsBtn = document.getElementById('results-btn');

resultsBtn.addEventListener('click', function () {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);

    const tip = (billAmount * tipPercentage) / 100;
    const totalBillPerPerson = (billAmount + tip) / numberOfPeople;

    totalBill.innerHTML = `Total Bill: $${billAmount.toFixed(2)}`;
    totalTip.innerHTML = `Total Tip: $${tip.toFixed(2)}`;
    totalBillPerPeople.innerHTML = `Total Bill Per Person: $${totalBillPerPerson.toFixed(2)}`;

    let summary;
    if (numberOfPeople === 1) {
        summary = `Summary : Your Total Bill is $${billAmount.toFixed(2)}, you give ${tipPercentage}% tip which is $${tip.toFixed(2)}, so your total bill is $${totalBillPerPerson.toFixed(2)}.`;
    } else {
        summary = `Summary : Your Total Bill is $${billAmount.toFixed(2)}, you give ${tipPercentage}% tip which is $${tip.toFixed(2)}, and you are splitting the bill among ${numberOfPeople} people, so each person should pay $${totalBillPerPerson.toFixed(2)}.`;
    }

    resultsSummary.innerHTML = summary;
});
