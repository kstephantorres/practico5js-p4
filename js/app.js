const dosDigitos=(numero)=> numero<10? '0'+numero:numero

const meses = {
    0: 'Enero',
    1: 'Febrero',
    2: 'Marzo',
    3: 'Abril',
    4: 'Mayo',
    5: 'Junio',
    6: 'Julio',
    7: 'Agosto',
    8: 'Septiembre',
    9: 'Octubre',
    10: 'Noviembre',
    11: 'Diciembre'
}
const dias = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}

setInterval(()=>{
const fecha = new Date()
const divs = document.getElementsByClassName('transparente')
const h = fecha.getHours()
const ampm = h>12? 'PM':'AM'
const etiqueta = `<div id="ampmsec">
    <ul>
    <li>${ampm}</li>
    <li>${dosDigitos(fecha.getSeconds())}</li>
    </ul>
    </div>`
const hora = `${dosDigitos(h%12)}:${dosDigitos(fecha.getMinutes())}:${etiqueta}`
const diaSemana = fecha.getDay();
const dia = fecha.getDate()
const mes = fecha.getMonth()
const anio = fecha.getFullYear()

divs[0].innerHTML = `${dias[diaSemana]} ${dosDigitos(dia)} de ${meses[mes]} del ${anio}`
divs[1].innerHTML = hora

},1000)