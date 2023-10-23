const ConvertButton = document.querySelector(".convert-button")
const ConvertSelect1 = document.querySelector(".Convert-Select1")
const ConvertSelect = document.querySelector(".Convert-Select")



function convertValue() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

  
    const inputCurrencyPlaceholder = document.querySelector(".input-currency").placeholder

    const currencyValueToConvert = document.querySelector(".currency-Value-To-Convert")

    const currencyValueConverted = document.querySelector(".currency-value")
    let dolarToday = 5.03
    let euroToday = 5.34
    let libraToday = 6.12
    let bitcoinToday = 151077.55
    let realToday = 1.0

    if (ConvertSelect1.value == "brasil1") {
        dolarToday = 5.03
         euroToday = 5.34
        libraToday = 6.12
        bitcoinToday = 150249.19
        realToday = 1.0
        document.getElementsByClassName("input-currency")[0].placeholder="R$ 10.000,00";
    }
    if (ConvertSelect1.value === "dolar1") { 
        dolarToday = 1
         euroToday = 1.06
        libraToday = 1.22
        bitcoinToday = 29823.07
        realToday = 0.20
        document.getElementsByClassName("input-currency")[0].placeholder="$ 10.000,00";
    }
    if (ConvertSelect1.value === "euro1") {
        dolarToday = 0.94
         euroToday = 1
        libraToday = 1.15
        bitcoinToday = 28150.07
        realToday = 0.19
        document.getElementsByClassName("input-currency")[0].placeholder="€ 10.000,00";
     }
    if (ConvertSelect1.value === "libra1") {
        dolarToday = 0.82
         euroToday = 0.87
        libraToday = 1
        bitcoinToday = 24548.43
        realToday = 0.16
        document.getElementsByClassName("input-currency")[0].placeholder="£ 10.000,00";
     }
    if (ConvertSelect1.value === "bitcoin1") {
        dolarToday = 0.000034
        euroToday = 0.000036
       libraToday = 0.000041
       bitcoinToday = 1
       realToday = 0.0000067
       document.getElementsByClassName("input-currency")[0].placeholder=" ₿ 10.000,00";
     }


    if (ConvertSelect.value === "euro") {


        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (ConvertSelect.value === "dolar") {


        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",

        }).format(inputCurrencyValue / dolarToday)


    }
    if (ConvertSelect.value === "libra") {


        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (ConvertSelect.value === "bitcoin") {


        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }
    if (ConvertSelect.value === "brasil") {


        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(inputCurrencyValue / realToday)
    }


   
    if (ConvertSelect1.value === "euro1") {


        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",

        }).format(inputCurrencyValue)

    }
    if (ConvertSelect1.value === "dolar1") {


        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValue)
    }
    if (ConvertSelect1.value === "libra1") {


        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
    if (ConvertSelect1.value === "bitcoin1") {


        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }
    if (ConvertSelect1.value === "brasil1") {


        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

}

function changeCurrency() {
    const CurrencyName = document.getElementById("currency-Name")
    const CurrencyImage = document.querySelector(".Currency-Img")

    const CurrencyName1 = document.getElementById("currency-Name1")
    const CurrencyImage1 = document.querySelector(".Currency-Img1")

    if (ConvertSelect.value === "euro") {
        CurrencyName.innerHTML = "Euro"
        CurrencyImage.src = "imagem/euro.png"
    }
    if (ConvertSelect.value === "dolar") {
        CurrencyName.innerHTML = "Dólar Americano"
        CurrencyImage.src = "imagem/estados-unidos (1) 1.png"
    }
    if (ConvertSelect.value === "libra") {
        CurrencyName.innerHTML = "Libra esterlina"
        CurrencyImage.src = "imagem/libra 1.png"
    }
    if (ConvertSelect.value === "bitcoin") {
        CurrencyName.innerHTML = "Bitcoin"
        CurrencyImage.src = "imagem/bitcoin 1.png"


    }
    if (ConvertSelect.value === "brasil") {
        CurrencyName.innerHTML = "Real"
        CurrencyImage.src = "imagem/brasil 2.png"
    }

    if (ConvertSelect1.value === "euro1") {
        CurrencyName1.innerHTML = "Euro"
        CurrencyImage1.src = "imagem/euro.png"
    }
    if (ConvertSelect1.value === "dolar1") {
        CurrencyName1.innerHTML = "Dólar Americano"
        CurrencyImage1.src = "imagem/estados-unidos (1) 1.png"
    }
    if (ConvertSelect1.value === "libra1") {
        CurrencyName1.innerHTML = "Libra esterlina"
        CurrencyImage1.src = "imagem/libra 1.png"
    }
    if (ConvertSelect1.value === "bitcoin1") {
        CurrencyName1.innerHTML = "Bitcoin"
        CurrencyImage1.src = "imagem/bitcoin 1.png"


    }
    if (ConvertSelect1.value === "brasil1") {
        CurrencyName1.innerHTML = "Real"
        CurrencyImage1.src = "imagem/brasil 2.png"
    }
    convertValue()
}
ConvertSelect1.addEventListener("change", changeCurrency)

ConvertSelect.addEventListener("change", changeCurrency)
ConvertButton.addEventListener("click", convertValue)
