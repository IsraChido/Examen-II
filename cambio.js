function change() {
    let origen = document.getElementById('mOrigen');
    let destino = document.getElementById('mDestino');
    let cambio = "";

    if(origen.value == 1) {
        cambio = `<option value="6">Dólar estadounidense</option>
        <option value="7">Dolar canadiense</option>
        <option value="8">Euro</option>`
    } else if (origen.value == 2) {
        cambio = `<option value="5">Peso mexicano</option>
        <option value="7">Dolar canadiense</option>
        <option value="8">Euro</option>`
    } else if (origen.value == 3) {
        cambio = `<option value="5">Peso mexicano</option>
        <option value="6">Dolar estadounidense</option>
        <option value="8">Euro</option>`
    } else if (origen.value == 4) {
        cambio = `<option value="5">Peso mexicano</option>
        <option value="6">Dolar estadounidense</option>
        <option value="7">Dolar canadiense</option>`
    }

    destino.innerHTML = cambio;
}


function calcular() {
    let monto = document.getElementById('cantidad').value;
    let origen = document.getElementById('mOrigen');
    let destino = document.getElementById('mDestino');
    let subtotal = document.getElementById('subtotal');
    let comision = document.getElementById('comision');
    let total = document.getElementById('total');

    if(origen.value == 1) {
        if(destino.value == 6) {
            subtotal.value = (monto / 19.85).toFixed(2);
        } else if(destino.value == 7) {
            subtotal.value = (monto / 14.70).toFixed(2);
        } else {
            subtotal.value = (monto / 20.05).toFixed(2);
        }
    } else if (origen.value == 2) {
        if(destino.value == 5) {
            subtotal.value = (monto * 19.85).toFixed(2);
        } else if(destino.value == 7) {
            subtotal.value = (monto * 1.35).toFixed(2);
        } else {
            subtotal.value = (monto * 0.99).toFixed(2);
        }
    } else if (origen.value == 3) {
        if(destino.value == 5) {
            subtotal.value = ((monto * 0.74) * 19.85).toFixed(2);
        } else if(destino.value == 6) {
            subtotal.value = (monto * 0.74).toFixed(2);
        } else {
            subtotal.value = ((monto * 0.74) * 0.99).toFixed(2);
        }
    } else if (origen.value == 4) {
        if(destino.value == 5) {
            subtotal.value = ((monto * 1.01) * 19.85).toFixed(2);
        } else if(destino.value == 6) {
            subtotal.value = (monto * 1.01).toFixed(2);
        } else {
            subtotal.value = ((monto * 1.01) * 1.35).toFixed(2);
        }
    }    

    comision.value = (subtotal.value * .03).toFixed(2);
    total.value = (parseFloat(subtotal.value) + parseFloat(comision.value)).toFixed(2);
}

let totalFinal = 0;

function registro() {
    let monto = document.getElementById('cantidad');
    let origen = document.getElementById('mOrigen');
    let destino = document.getElementById('mDestino');
    let subtotal = document.getElementById('subtotal');
    let comision = document.getElementById('comision');
    let total = document.getElementById('total');
    let registros = document.getElementById('registros');
    let totalGeneral = document.getElementById('totalG');

    origen = getMoneda(origen.value);
    destino = getMoneda(destino.value);
    registros.innerText += `${monto.value} ${origen} a ${destino} - subtotal: ${subtotal.value} - comision: ${comision.value} - total: ${total.value} \n`;

    totalFinal += parseFloat(total.value);

    totalGeneral.innerText = `Total general: ${parseFloat(totalFinal).toFixed(2)}` 

}
