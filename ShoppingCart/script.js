let valtot = [0,0]
let valprod = [55.00, 50.00]
let quant = [0,0]

function addItem(item){
    let quantidade0 = document.querySelector('#quantidade' + item)
    let tot = document.querySelector('#tot' + item)

    quant[item] += 1

    valtot[item] = Number.parseFloat(valprod[item]) * quant[item]
    quantidade0.innerHTML = quant[item]
    tot.innerHTML = valtot[item].toFixed(2)

    somaTot()
}

function removeItem(item){
    if(quant[item] > 0){
        quant[item] -= 1

        let quantidade0 = document.querySelector('#quantidade' + item)
        let tot = document.querySelector('#tot' + item)

        quantidade0.innerHTML = quant[item]
        valtot[item] = Number.parseFloat(valprod[item] * quant[item])
        tot.innerHTML = valtot[item].toFixed(2)

        somaTot()
    }
}

function somaTot(){
    let valtot = document.querySelector('#valtot')
    let val = 0

    for(let i = 0; i < valtot.length; i++){
        val += valtot[i] 
    }

    valtot.innerHTML = val.toFixed(2)
}