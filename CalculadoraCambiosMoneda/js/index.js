const monedaOrigenEl = document.getElementById('currency-one');
const cantidadOrigenEl = document.getElementById('amount-one');
const monedaDestinoEl = document.getElementById('currency-two');
const cantidadDestinoEl = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swapBtn = document.getElementById('swap');
const loadingEl = document.getElementById('loading');
const alertasEl = document.getElementById('alertas');

const url_servicio = "https://api.exchangeratesapi.io/latest?base="

// obtener datos de cambio y actualizar el DOM
function calcular() {
    const monedaOrigen = monedaOrigenEl.value;
    const monedaDestino = monedaDestinoEl.value;
    //https://api.exchangeratesapi.io/latest HTTP/1.1

    alertasEl.innerText = "";
    loadingEl.className = 'loading.running'

    fetch(`${url_servicio}${monedaOrigen}`)
        .then(res => res.json())
        .catch(error => {
            alertasEl.innerText = "Error en petición al servicio";
            loadingEl.className = 'loading';
        })
        .then(data => {

            if(data.hasOwnProperty("error"))
            {
                alertasEl.innerText = `Error petición: ${data.error}`;
            } else {
                const rate = data.rates[monedaDestino];
            
                if(rate == null) console.log("Error");
                rateEl.innerText = `1 ${monedaOrigen} = ${rate} ${monedaDestino}`;
                cantidadDestinoEl.value = (rate * cantidadOrigenEl.value);
            }
            
            loadingEl.className = 'loading'
        }).catch(error => {
            alertasEl.innerText = "Error, moneda no encontrada";
            loadingEl.className = 'loading';
        });

}   

// Escucha de eventos
monedaOrigenEl.addEventListener('change', calcular);
cantidadOrigenEl.addEventListener('input', calcular);
monedaDestinoEl.addEventListener('change', calcular);
cantidadDestinoEl.addEventListener('input', calcular);

swapBtn.addEventListener('click', () => {
    const origenTemp = monedaOrigenEl.value;
    const destinoTemp = monedaDestinoEl.value;

    monedaOrigenEl.value = destinoTemp;
    monedaDestinoEl.value = origenTemp;
    calcular();
});

calcular();