const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect1 = document.querySelector(".currency-select-1")

const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueConverted = document.querySelector(".currency-value-converted") // converted - outras moedas
    const currencyValueConvert = document.querySelector(".currency-value-convert")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high

    if (currencySelect.value === "real") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {

            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)

    }



    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }


    if (currencySelect.value === "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value === "libra") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {

            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    if (currencySelect1.value === "euro") {

        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    }
}




function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyName1 = document.getElementById("currency-name-1")
    const currenyImage = document.querySelector(".currency-img")
    const currenyImage1 = document.querySelector(".currency-img-1")


    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currenyImage.src = "./assets/Real.png"
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currenyImage.src = "./assets/Dólar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currenyImage.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currenyImage.src = "./assets/Libra.png"
    }


    if (currencySelect1.value == "euro") {
        currencyName1.innerHTML = "Euro"
        currenyImage1.src = "./assets/Euro.png"
    }

}


convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)

