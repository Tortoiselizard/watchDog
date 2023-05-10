let minute = document.querySelector("#minute")
let second = document.querySelector("#second")
let centiSecond = document.querySelector("#centiSecond")
let button = document.querySelector("button")

function preStart() {
    const inputs = document.querySelectorAll("input")
    const button = document.querySelector("button")
    button.textContent = "Detener"
    inputs.forEach(input => {
        input.disabled = true
        input.value = Number(input.value) || 00
    })
    run("cronometro")
}

function run(mode) {
    switch (mode) {
        case "cronometro": {
            for (let n=0; n<10; n++) {
                // setTimeout(handleTime(Number(second.value)), 1000)
                setTimeout(console.log(`${n}`), 1000)
            }
            break
        }
    }
}

function handleTime(number) {
    second.value = number +1
}

button.addEventListener("click",() => {preStart()})