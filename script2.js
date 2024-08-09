const tipCalculator = document.querySelector('.tip-calculator');
const selectTotal = document.querySelector('.amount_total span');
const selectTipPerPerson = document.querySelector('.tip_per_person span');
const selectTipPerPerson2 = document.querySelector('.tip_per_person2 span');

const data = {
  bill: 0,
  tip: 0,
  tip2: 0,
  person : 1
}

tipCalculator.addEventListener('change', (e) => {
  if(validateInput(e.target.value)) {
    e.target.classList.remove('err');

    data[e.target.name] = parseFloat(e.target.value);

    const tip = (data.bill * 1) / 3;
    const tip2 = (data.bill * 2) / 3;

    let total = data.bill;
    total = total / data.person;
    total = total.toFixed(2);
    selectTotal.textContent = total;

    let tip_per_person = tip / data.person;
    tip_per_person = tip_per_person.toFixed(2);
    selectTipPerPerson.textContent = tip_per_person;
   
    let tip_per_person2 = tip2 / data.person;
    tip_per_person2 = tip_per_person2.toFixed(2);
    selectTipPerPerson2.textContent = tip_per_person2;

  } else {
    e.target.classList.add('err');
  }
});

const validateInput = input => {
  return (/^\d+$/).test(input);
}
