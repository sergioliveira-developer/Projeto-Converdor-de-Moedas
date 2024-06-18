const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

const convertValues = async () => {

  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json());
  const dolar = data.USDBRL.high;
  const euro = data.EURBRL.high;
  const libra = data.GBPBRL.high;
  const bitcoin = data.BTCBRL.high;

  currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {

      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolar);

  };

  if (currencySelect.value == "euro") {

    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {

      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euro);

  };

  if (currencySelect.value == "libra") {

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {

      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libra);
  };

  if (currencySelect.value == "bitcoin") {

    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {

      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoin);

  };
};

function changeCurrency() {

  const currencyName = document.getElementById("currency-name");
  const currenyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currenyImage.src = "./assets/dolar-americano.png";
  };

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currenyImage.src = "./assets/logo-euro.png";
  };

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currenyImage.src = "./assets/logo-libra.png"
  };

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currenyImage.src = "./assets/bitcoin.png";
  };

  convertValues();
}

convertButton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency);
