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
