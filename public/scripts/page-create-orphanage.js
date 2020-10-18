// create map

var map = L.map('mapid').setView([-27.4313, -48.4631337], 13)

// add map

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]
})
let marker;
// create and add marker
map.on('click',(event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    document.querySelector('[name="lat"]').value = lat;
    document.querySelector('[name="lng"]').value = lng;

    // remover icon
    marker && map.removeLayer(marker)
    // add icon
    marker= L.marker([lat,lng],{icon}).addTo(map)
})

// photos upload

function addPhotoField(){
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    const campo = newFieldContainer.children[0]
    if (campo.value ==""){
        return
    }
    campo.value = ""
    container.appendChild(newFieldContainer)
}
function quantidadeDeUpload(){
    const fieldsContainer = document.querySelectorAll('.new-upload')
    return fieldsContainer.length
}
function deleteField(event){
    const span = event.currentTarget
    
    
    if(quantidadeDeUpload() < 2){
        span.parentNode.children[0].value=""
        return

    }
    span.parentNode.remove();
}

function Trocar_valor(event){
document.querySelectorAll('.button-select button')
.forEach(function(button){
    button.classList.remove('active')
})
const button = event.currentTarget
button.classList.add('active')
const input = document .querySelector('[name="open_on_weekends"]')
input.value = button.dataset.value
}
function validate(event){

    const EstaPrenchido = VerificarPreenchimento();
    if (!EstaPrenchido){
        // 
        alert('Favor fazer a macação no mapa!')
        event.preventDefault()
    }
    
}
function VerificarPreenchimento(){
    const lat = document.querySelector('[name="lat"]').value
    const lng = document.querySelector('[name="lng"]').value
    if (lat === "" && lng === ""){
        return false
    }else{
        return true
    }
}