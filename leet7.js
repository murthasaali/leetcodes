const arr = [5,14,13,8,12]

function dos(x) {

    let concat1 = 0

    for (let i = 0; i < x.length; i++) {
        let temp = x[0] + "" + x[x.length - 1]
        x.shift()
        x.pop()
        concat1 += parseInt(temp)

    }

    console.log(concat1)

}
dos(arr)