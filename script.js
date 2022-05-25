const celciusInput = document.querySelector("#celsius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

celciusInput.addEventListener("click", () => {
  const cTemp = celciusInput.value;
  const fTemp = cTemp * (9 / 5) + 32;
  console.log(fTemp);
});
