// Variables------------------------------------------
const resultado = document.querySelector('#resultado')
const marca = document.querySelector('#marca')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmicion = document.querySelector('#transmision')
const color = document.querySelector('#color')
const year = document.querySelector('#year')
const max = new Date().getFullYear()
const min = max - 10;

//Generar un objeto con la busqueda
const datosBusqueda = {
        marca: '',
        minimo: '',
        maximo: '',
		year: '',
		puertas: '',
		color: '',
		transmision: ''
}






//Eventos-----------------------------------------------
document.addEventListener('DOMContentLoaded',() => {
    mostrarAutos(autos)


    llenarSelect()
})

marca.addEventListener('change', e => {
   datosBusqueda.marca = e.target.value;

   filtrarAuto();
})
year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
   
    filtrarAuto();
 })
 minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto()
    
 })
 maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    
    filtrarAuto()
 })
 puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    
    filtrarAuto()
 })
 transmicion.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    
    filtrarAuto()
 })
 color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    
    filtrarAuto()
 })


//Funciones-----------------------------------------------------
function mostrarAutos(autos) {
    limpiarHTML()

    autos.forEach( auto => {
        const {marca, modelo, year, puertas,transmision, precio, color}=auto
        const autoHTML = document.createElement('p')

        autoHTML.textContent = `
         ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Color: ${color} - Precio: ${precio}$     
        
        `

        //Insertar HTML

        resultado.appendChild(autoHTML)


    } )
}

//Eliminar el HTML

function limpiarHTML (){
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

//Generar los años en el select
function llenarSelect () {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i;
        year.appendChild(opcion)  //Agrega las opciones
    }
}

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuerta).filter(filtrarTrans).filter(filtrarColor)
    
    if(resultado.length) {
        mostrarAutos(resultado)
    }else{
        noResultado()
    }
    
}

function noResultado () {

    limpiarHTML()


    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta', 'error')
    noResultado.textContent = "No Hay Resultados"
    resultado.appendChild(noResultado)
}

function filtrarMarca (auto){
    const {marca} =datosBusqueda
    if(marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear (auto){
    const {year} =datosBusqueda
    if(year) {
        return auto.year === parseInt(year);
    }
    return auto;
    
}
function filtrarMinimo (auto){
    const {minimo} =datosBusqueda
    if(minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo (auto) {
    const {maximo} =datosBusqueda
    if(maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuerta (auto){
    const {puertas} =datosBusqueda
    if(puertas) {
        return auto.puertas === parseInt(puertas);
    }
    return auto;
    
}

function filtrarTrans (auto){
    const {transmision} =datosBusqueda
    if(transmision) {
        return auto.transmision === transmision;
    }
    return auto;
    
}

function filtrarColor (auto){
    const {color} =datosBusqueda
    if(color) {
        return auto.color === color;
    }
    return auto;
    
}
