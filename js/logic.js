function x(numbers) {
    let res = 0
    for (let i = 0; i <= 7; i++)
        res += numbers[i]

    return res / (numbers.length)
}

function xGeneral(data) {
    let res = 0
    for (let i = 0; i <= 3; i++)
        res += +x(data[i])

    return res / data.length
}

//general dispersion
function q(data) {
    let x = xGeneral(data)
    let res = 0

    for (let i = 0; i < 4; i++)
        for (let j = 0; j < 8; j++)
            res += Math.pow(data[i][j] - x, 2)

    return res
}

//group dispersion
function q1(data) {
    let xG = xGeneral(data)
    let res = 0

    for (let i = 0; i < 4; i++)
        res += Math.pow(x(data[i]) - xG, 2)

    return res * 8
}

//in group dispersion
function q2(data) {
    let res = 0

    for (let i = 0; i < 4; i++)
        for (let j = 0; j < 8; j++)
            res += Math.pow(data[i][j] - x(data[i]), 2)

    return res
}

function comp() {
    let ret = ''
    let fisher = (q1(input) / 3) / (q2(input) / 24);
    if (fisher < tableValue) {
        ret = `(${fisher.toFixed(2)} < ${tableValue.toFixed(2)} ) -> можна знехтувати`
    } else {
        ret = `(${fisher.toFixed(2)} > ${tableValue.toFixed(2)} ) -> впливає на результат`
    }
    return ret
}