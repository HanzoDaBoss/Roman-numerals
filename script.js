const button = document.getElementById("convert-btn");

function romanNumeralConverter() {
  const number = document.getElementById("number").value;
  const output = document.getElementById("output");

  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
];

  let romanNumeral = '';
  let numberCopy = number;
    for (let num of romanNumerals) {
        while (numberCopy >= num.value) {
            romanNumeral += num.numeral;
            numberCopy -= num.value;
        }
    }

  if (numberCopy === "") {
    output.style.fontSize = "25px";
    output.style.fontFamily = "'Raleway', sans-serif";
    output.style.backgroundColor = "#ffcccb";
    output.style.color = "#900C3F";
    output.style.borderColor = "#900C3F";
    output.textContent = "Please enter a valid number.";
  }
  else if ((numberCopy === "0") || number.includes("-")) {
    output.style.fontSize = "25px";
    output.style.height = "75px";
    output.style.fontFamily = "'Raleway', sans-serif";
    output.style.backgroundColor = "#ffcccb";
    output.style.color = "#900C3F";
    output.style.borderColor = "#900C3F";
    output.textContent = "Please enter a number greater than or equal to 1.";
  }

  else if (Number(number) >= 4000) {
    output.style.fontSize = "25px";
    output.style.height = "75px";
    output.style.fontFamily = "'Raleway', sans-serif";
    output.style.backgroundColor = "#ffcccb";
    output.style.color = "#900C3F";
    output.style.borderColor = "#900C3F";
    output.textContent = "Please enter a number less than or equal to 3999.";
  }

  else {
    output.style.fontSize = "40px";
    output.style.fontFamily = "'Times New Roman', serif";
    output.style.backgroundColor = "#900C3F"
    output.style.color = "#ffffff"
    output.style.borderColor = "#ffffff"
    output.textContent = romanNumeral;
  }
}

button.addEventListener("click", romanNumeralConverter);