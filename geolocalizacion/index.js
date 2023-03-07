let market, map
// Creando la funcion a la que va a llamar el script
function initMap(){
    // asignando la posicion y tiene dos atributos  lat: -25.363, y lng: 131.044
    const posicion ={
        lat: -25.363, 
        lng: 131.044
    }
    // definir el mapa, se le pasa dos parametros
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    });

    // marca
    const market = new google.maps.Marker({
        posicion: posicion,
        map,
        title: "posicion inicial",
        

          
    });
    // Usar el marker en mi posicion
    // market.setPosicion({lat, lag})
    geoPosiciona()
}
function geoPosiciona(){
    if(navigator.geolocation){
        const geoLoc = navigator.geolocation

        const watchPos = geoLoc.watchPosition(centraMapa, onError)
        const options = {timeout: 6000}
    }else{
        alert("tu navegador no permite geolocalizacio")
    }
}
function centraMapa(position){
    const nuevaPos = {
        lat : position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos)
    market.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}
function onError(error){
    console.log(error);
}

// Forma de rastrear al usuario
// navigator.geolocation.watchPosition(position => {console.log(position) })