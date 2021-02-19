const contenedorEl = document.querySelector('.container');
const asientosEl = document.querySelectorAll('.row .seat:not(.occupied)');
const cuentaAsientosEl = document.getElementById('count');
const importeTotalEl = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const monedaSelect = document.getElementById('currency');

rellenarUI();

let precioEntrada = +movieSelect.value;
const url_servicio = "https://api.exchangeratesapi.io/latest?base="
let valoresCambioMoneda = [];
let rate = 1;

function actualizarTotalSeleccionados() {
    const asientosSeleccionados = document.querySelectorAll('.row .seat.selected');
    const cuentaAsientosSeleccionados = asientosSeleccionados.length;
    // copiar asientos seleccionados en array
    // map el array
    // devolver indices nuevos del array
    const indicesAsientos = [...asientosSeleccionados].map( (seat) => [...asientosEl].indexOf(seat));

    localStorage.setItem('indicesAsientosSeleccionados', JSON.stringify(indicesAsientos));

    cuentaAsientosEl.innerText = cuentaAsientosSeleccionados;
    importeTotalEl.innerText = precioEntrada * cuentaAsientosSeleccionados;
}


// Obtener datos de localStorage y prepara UI
function rellenarUI() {
    const asientosSeleccionadosAlmacenados = JSON.parse(localStorage.getItem("indicesAsientosSeleccionados"));
    
    if(asientosSeleccionadosAlmacenados !== null && asientosSeleccionadosAlmacenados.length > 0) {
        asientosEl.forEach( (seat, index) => {
            if(asientosSeleccionadosAlmacenados.indexOf(index) > -1)
            {
                seat.classList.add('selected');
            }
        });
    }

    const indicePeliculaSeleccionada = localStorage.getItem("indicePeliculaSeleccionada");
    if(indicePeliculaSeleccionada !==null) movieSelect.selectedIndex = indicePeliculaSeleccionada;

}


function guardarDatosPelicula(indicePelicula, precioPelicula) {
    localStorage.setItem("indicePeliculaSeleccionada", indicePelicula);
    localStorage.setItem("precioPeliculaSeleccionada", precioPelicula);
}

function obtenerDatosTipoMoneda() {
    fetch(`${url_servicio}EUR`)
        .then(res => res.json())
        .catch(error => {
            alertasEl.innerText = "Error en petición al servicio";
            loadingEl.className = 'loading';
        })
        .then(data => {
            
            if(data.hasOwnProperty("error"))
            {
                //alertasEl.innerText = `Error petición: ${data.error}`;
            } else {
                valoresCambioMoneda = data.rates;
                if(monedaSelect.value !=="EUR")
                {
                    rate = valoresCambioMoneda[monedaSelect.value];
                } else {
                    rate = 1;
                }
                precioEntrada = Math.round(movieSelect.value * rate)       
            }
            
            //loadingEl.className = 'loading'
        }).catch(error => {
            alertasEl.innerText = "Error, moneda no encontrada";
            //loadingEl.className = 'loading';
        });
}

// listener selector pelicula 
movieSelect.addEventListener('change', e => {
    precioEntrada = Math.round(movieSelect.value * rate)  ;

    guardarDatosPelicula(e.target.selectedIndex, e.target.value);

    actualizarTotalSeleccionados();
})

// listener asientos
contenedorEl.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected');

        actualizarTotalSeleccionados();
    }    
});


monedaSelect.addEventListener('change', e => {
    
    const opt = movieSelect.querySelectorAll('option');

    rate = valoresCambioMoneda[e.target.value];
    if(e.target.value == 'EUR') rate = 1;
    precioEntrada = Math.round(movieSelect.value * rate);
    
    opt.forEach( opt => {
        opt.innerText = `${opt.title} (${Math.round(opt.value * rate, 3)} ${e.target.value})`
    });

    actualizarTotalSeleccionados();
})

// Inicializacion precio y cuenta
obtenerDatosTipoMoneda();
actualizarTotalSeleccionados();