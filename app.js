//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;

for (let i = max; i > min; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}


//Generar un objeto con la busqueda
const datosBusqueda = {

    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);  //Muestra los automoviles a cargar
    ;
})

//Event listener para los select de busqueda
marca.addEventListener('input', e => {

    datosBusqueda.marca = e.target.value;

    filtrarAutos();//Filtra los autos

})

year.addEventListener('input', e => {

    datosBusqueda.year = parseInt(e.target.value); //PArseInt porque la mayoria d elas veces los datos que vienen del formulario son string.

    filtrarAutos();

})

minimo.addEventListener('input', e => {

    datosBusqueda.minimo = e.target.value;

    filtrarAutos();
})

maximo.addEventListener('input', e => {

    datosBusqueda.maximo = e.target.value;

    filtrarAutos();
})

puertas.addEventListener('input', e => {

    datosBusqueda.puertas = parseInt(e.target.value);

    filtrarAutos();
})

transmision.addEventListener('input', e => {

    datosBusqueda.transmision = e.target.value;

    filtrarAutos();
})

color.addEventListener('input', e => {

    datosBusqueda.color = e.target.value;

    filtrarAutos();
})

//Limpiar html
function limpiarHTML() {

    const contenedor = document.querySelector('#resultado');

    //Limpiar los resultados anteriores
    while (resultado.firstChild) { //mientras exista algo
        contenedor.removeChild(resultado.firstChild); //
    }
}



//Mostrar autos db
function mostrarAutos(autos) {

    limpiarHTML(); //Elimina el html previo

    autos.forEach(auto => {

        const autoHTML = document.createElement('P');


        const { marca, modelo, year, puertas, transmision, precio, color } = auto

        autoHTML.textContent = `${marca} - ${modelo} - ${year} - ${puertas} - Transmision: ${transmision} - Precio: ${precio} -color: ${color}
        `;


        //Insertar en el html

        resultado.appendChild(autoHTML)//No borra el contenido previo y lo coloca al final del resultado
    })
};

function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay REsultados'));
    document.querySelector('#resultado').appendChild(noResultado);

}

function filtrarAutos() {
    //Funcion de alto nivel, una funcion dentro de otra.
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filterTransmicion).filter(filtrarColor);

    if (resultado.length) {

        mostrarAutos(resultado)

    } else {

        noResultado

    }

}



function filtrarMarca(auto) {

    if (datosBusqueda.marca) {

        return auto.marca === datosBusqueda.marca;
    }

    return auto;

}

function filtrarYear(auto) {

    if (datosBusqueda.year) {

        return auto.year === datosBusqueda.year;
    }

    return auto;

}

function filtrarMinimo(auto) {

    if (datosBusqueda.minimo) {

        return auto.minimo === datosBusqueda.minimo

    }
    return auto;

}

function filtrarMaximo(auto) {

    if (datosBusqueda.maximo) {
        return auto.maximo === datosBusqueda.maximo;
    }

    return auto;

}

function filtrarPuertas(auto) {

    if (datosBusqueda.puertas) {

        return auto.puertas === datosBusqueda.puertas;
    }

    return auto;


}

function filterTransmicion(auto) {

    if (datosBusqueda.transmision) {

        return auto.transmision === datosBusqueda.transmision;
    }
    console.log(auto.transmision)

    return auto;
}

function filtrarColor(auto) {

    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    }

    return auto;
}