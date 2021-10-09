let arr = []
let processValue = [], conclusion, operator, setValue
const add = (e) => {
    let sayi = e.value
    arr.push(sayi)
    txt()
}
const txt_delete = (e) => {
    arr.splice(arr.length - 1, 1)
    txt()
}
const all_delete = (e) => {
    document.querySelector(".cal-write").innerHTML = ""
    processValue.splice(0)
    full_delete(e)
}
const full_delete = (e) => {
    arr.splice(0)
    txt()
}
const txt = () => {
    document.querySelector(".txt").value = null
    arr.forEach(e => document.querySelector(".txt").value += e)
}

const process = (e) => {
    if (arr.length > 0) {
        setValue = Number(arr.splice(',').join(""))
        arr.splice(0)
        processValue.push(setValue)
    }
    txt()
    if (e.value === "+") {
        if (processValue.length === 1) conclusion = processValue[0]
        else {
            processValue.forEach((e, i) => {
                if (i > 0) {
                    conclusion += e
                    processValue.splice(i, 1)
                }
            })
        }
        operator = "+"
    }
    if (e.value === "-") {
        if (processValue.length === 1) conclusion = processValue[0]
        else {
            processValue.forEach((e, i) => {
                if (i > 0) {
                    conclusion -= e
                    processValue.splice(i, 1)
                }
            })
        }
        operator = "-"
    }
    if (e.value === "x") {
        if (processValue.length === 1) conclusion = processValue[0]
        else {
            processValue.forEach((e, i) => {
                if (i > 0) {
                    conclusion *= e
                    processValue.splice(i, 1)
                }
            })
        }
        operator = "x"
    }
    if (e.value === "/") {
        if (processValue.length === 1) conclusion = processValue[0]
        else {
            processValue.forEach((e, i) => {
                if (i > 0) {
                    conclusion /= e
                    processValue.splice(i, 1)
                }
            })
        }
        operator = "/"
    }
    document.querySelector(".cal-write").innerHTML = conclusion
    document.querySelector(".cal-write").innerHTML += operator
    if (e.value === "=") {
        console.log("=====");
        if (operator === "+") conclusion = processValue[0] + setValue
        if (operator === "-") conclusion = processValue[0] - setValue
        if (operator === "x") conclusion = processValue[0] * setValue
        if (operator === "/") conclusion = processValue[0] / setValue
        operator = ""
    }
    processValue.splice(0)
    processValue.push(conclusion)
    document.querySelector(".txt").value = conclusion
}

