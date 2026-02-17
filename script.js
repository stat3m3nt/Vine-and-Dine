let map;

async function initMap(){
    const { Map } = (await google.maps.importLibrary('maps'));
    map = new Map(document.getElementById("map"), {
        center:{ lat: 43.255, lng: -79.0275 },
        zoom: 13
        
    });
}