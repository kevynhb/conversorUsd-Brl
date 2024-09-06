// https://economia.awesomeapi.com.br/last/USD-BRL,
let dolar = 5.57

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})
brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")

})

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})
brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "1000,00"
convert("usd-to-brl")


// Funções 
function formatCurrency(value) {
    let fixedValue = fixValue(value)    // chamando a função que vai ajustar o valor
    // utilizar função de formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }    // Utilizando biblioteca de internacionalização
    let formatter = new Intl.NumberFormat("pt-BR", options)
    // retorna o valor formatado
    return formatter.format(fixedValue)
}

function fixValue(value) {
    let fixedValue = value.replace(",", ".")    // replace troca a string por outra
    let floatValue = parseFloat(fixedValue)     // transforma a string em numero "90" -> 90
    if(floatValue == NaN) {
        floatValue = 0
    }
    return floatValue
 }

function convert(type) {
    if(type == "usd-to-brl") {
         // ajusta o valor
        let fixedValue = fixValue(usdInput.value)
        // converte o valor
        let result = fixedValue * dolar
        result = result.toFixed(2)
        // mostra no campo de real
        brlInput.value = formatCurrency(result)
    }
    if(type == "brl-to-usd") {
        let fixedValue = fixValue(brlInput.value)

        let result = fixedValue / dolar
        result = result.toFixed(2)

        usdInput.value = formatCurrency(result)
    }
}