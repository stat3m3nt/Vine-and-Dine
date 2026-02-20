let map;
let geocoder;
let markers = [];
let currentWindow = null; // to track opened infowindow
let directionsService;
let directionsRenderer;

// winery objects
const wineries = [
    {
        name: "AMO Estate Winery",
        address: "976 York Rd, Niagara-on-the-Lake \n ON L0S 1J0",
        website: "https://amowines.ca",
        lat: 43.214339,
        lng: -79.131785,
        category: "Boutique Winery",
        tastingStyle: "Red & White",
        telephone: "(289)-547-9696"
    },
    {

        name: "Andrew Peller Limited",
        address: "697 South Service Road, Grimsby \n ON L3M 4E8",
        website: "https://www.andrewpeller.com",
        lat: 43.21244,
        lng: -79.621723,
        category: "Corporate Winery",
        tastingStyle: "Mixed",
        telephone: "(905)-643-4131"
    },
    {
        name: "Caroline Cellars",
        address: "1010 Line 2 Rd, Niagara-on-the-Lake \n ON L0S 1JO",
        website: "https://www.carolinecellars.com",
        lat: 43.219459,
        lng: -79.097383,
        category: "Casual Winery",
        tastingStyle: "Red Focused",
        telephone: "(905)-468-8814"
    },
    {
        name: "Chateau des Charmes Winery",
        address: "1025 York Rd, Niagara-on-the-Lake \n ON L0S 1P0",
        website: "http://www.chateaudescharmes.com",
        lat: 43.156161,
        lng: -79.125073,
        category: "Estate Winery",
        tastingStyle: "Red & White",
        telephone: "(905)-262-4219"
    },
    {
        name: "Colaneri Estate Winery",
        address: "348 Concession 6 Rd, Niagara-on-the-Lake \n ON L0S 1J0",
        website: "https://www.carolinecellars.com",
        lat: 43.162953,
        lng: -79.137521,
        category: "Luxury Winery",
        tastingStyle: "Red Focused",
        telephone: "(905)-682-2100"
    },
    {
        name: "Ferox by Fabian Winery",
        address: "1829 Concession 4 Rd, Niagara-on-the-Lake \n ON L0S 1J0",
        website: "https://ferox.ca",
        lat: 43.235553,
        lng: -79.111535,
        category: "Boutique Winery",
        tastingStyle: "Red Focused",
        telephone: "(905)-468-2271"
    },
    {
        name: "Inniskillin Wines",
        address: "1499 Line 3 Rd, Niagara-on-the-Lake \n ON L0S 1J0",
        website: "http://inniskillin.com",
        lat: 43.210604, 
        lng: -79.063939,
        category: "Corporate Winery",
        tastingStyle: "Icewine",
        telephone: "(905)-468-2187"
    },
    {
        name: "Jackson-Triggs Niagara Estate Winery",
        address: "2145 Niagara Stone Rd, Niagara-on-the-Lake \n ON L0S 1J0",
        website: "https://www.jacksontriggswinery.com",
        lat: 43.244247, 
        lng: -79.09188,
        category: "Corporate Winery",
        tastingStyle: "Mixed",
        telephone: "(905)-468-6173"
    },
    {
        name: "Konzelmann Estate Winery",
        address: "1096 Lakeshore Rd, Niagara-on-the-Lake \n ON L0S 1J0",
        website: "http://www.konzelmann.ca",
        lat: 43.250219,
        lng: -79.141424,
        category: "Lakefront Winery",
        tastingStyle: "White Focused",
        telephone: "(905)-935-2866"
    },
    {
        name: "Wayne Gretzky Estates Winery",
        address: "1219 Niagara Stone Rd, Niagara-on-the-Lake \n ON L0S 1J0",
        website: "http://www.gretzkyestateswines.com",
        lat: 43.211231,
        lng: -79.134971,
        category: "Celebrity_Owned",
        tastingStyle : "Mixed",
        telephone: "(844)-643-7799"
    },
    {
        name: "Two Sisters Vineyards",
        address: "240 John St E, Niagara-on-the-Lake \n ON L0S 1J0",
        website: "https://www.twosistersvineyards.com",
        lat: 43.240247,
        lng: -79.069254,
        category: "Estate Winery",
        tastingStyle: "Red Focused",
        telephone: "(905)-468-0592"
    },
    {
        name: "Trius Winery",
        address: "1249 Niagara Stone Rd, Niagara-on-the-Lake \n ON L0S 1J0",
        website: "http://www.triuswines.com",
        lat: 43.212536,
        lng: -79.133484,
        category: "Estate Winery",
        tastingStyle: "Sparkling & Red",
        telephone: "(800)-582-8412"
    },
    {
        name: "The Lakeview Wine Co",
        address: "1067 Niagara Stone Rd, Niagara-on-the-Lake \n ON L0S 1J0",
        website: "http://www.lakeviewwineco.com",
        lat: 43.205637,
        lng: -79.142729,
        category: "Lakefront Winery",
        tastingStyle: "Mixed",
        telephone: "(905) 685-5673"
    },
    {
        name: "The Hare Wine Co",
        address: "769 Niagara Stone Rd, Niagara-on-the-Lake \n ON L0S 1J0",
        website: "http://theharewineco.com",
        lat: 43.195148,
        lng: -79.156185,
        category: "Boutique Winery",
        tastingStyle: "Red & White",
        telephone: "(905)-684-4994"
    },
    {
        name: "Sunnybrook Farm Estate Winery",
        address: "440 McClung Rd, Caledonia \n ON N3W 1T9",
        lat: 43.09624,
        lng: -79.915025,
        category: "Farm Winery",
        tastingStyle: "Fruit & Country Wines",
        telephone: "(905) 765-2000"
    }
];

function initMap(){
    // const { Map } = (await google.maps.importLibrary("maps"));
    // const { AdvancedMarkerElement } = (await google.maps.importLibrary("marker"));
    // directionsService = new google.maps.DirectionService();
    // directionsRenderer = new google.maps.DirectionRenderer();

    map = new google.maps.Map(document.getElementById("map"), {
        center:{ lat: 43.255, lng: -79.0275 },
        zoom: 13,
        mapId: "1191f790cd1a7db39ca9c15e"
        
    });

    //initialize geocoder and direction API
    geocoder = new google.maps.Geocoder(); 
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({ map });


    // Loop through wineries to place markers
    wineries.forEach((winery) => {
        const contentHtml = `
                <div style="max-width:250px;">
                    <h3>${winery.name}</h3>
                    <p><strong>Address:</strong> ${winery.address.replace(/\n/g, "<br>")}</p>
                    <p><strong>Category:</strong> ${winery.category}</p>
                    <p><strong>Tasting Style:</strong> ${winery.tastingStyle}</p>
                    <p><strong>Tel:</strong> ${winery.telephone}</p>
                    <p><a href="${winery.website}" target="_blank">Website</a></p>
                    <button id="get-dir-btn" onclick ="getDirections(${winery.lat}, ${winery.lng})"> Get Direction </button>
                    
                    <div id="origin-input-container" class="input-group mt-2" style="display:none;">
                        <input type="text" id="origin-address" class="form-control form-control-sm" placeholder="Enter starting address">
                        <button class="btn btn-success btn-sm" id="use-origin">Go</button>
                    </div>
                </div>
                `;
                createMarker(winery, contentHtml);
        // const marker = createMarker({
        //     map,
        //     position:{
        //         lat: parseFloat(winery.lat),
        //         lng: parseFloat(winery.lng)
        //     },
        //     title: winery.name,
        //     contentHtml,
        //     iconUrl: "https://maps.google.com/mapfiles/kml/shapes/bars.png"
        //     // element: (() => {
            // const el = document.createElement("div");
            // el.style.width = "30px";
            // el.style.height = "30px";
            // el.style.display = "flex";
            // el.style.alignItems = "center";
            // el.style.justifyContent = "center";
            // el.innerHTML =  `<img src="/images/wine-glass-icon.svg" width="30" height="30" />`;
            // return el;
        });

        // winery-form
        mapWinery();
    }

    //create marker function
    function createMarker(winery, contentHtml) {
        const marker = new google.maps.Marker({
            map,
            position: { lat: winery.lat, lng: winery.lng},
            title: winery.name,
            icon : "https://maps.google.com/mapfiles/kml/shapes/bars.png"
    });

    const infoWindow = new google.maps.InfoWindow({ content: contentHtml });

    // marker listener
     marker.addListener("click", () => {
        if (currentWindow) currentWindow.close();
        infoWindow.open({ anchor: marker, map });
        currentWindow = infoWindow;

        //Handle get direction button but wait so DOM inside infoWindow exists
        google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        const getDirBtn = document.getElementById("get-dir-btn");
        const originContainer = document.getElementById("origin-input-container");
        const useOriginBtn = document.getElementById("use-origin");
        const originInput = document.getElementById("origin-address");
        
        getDirBtn.onclick = () => {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const origin = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        directionRoute(origin, {lat: marker.position.lat(), lng: marker.position.lng() });
                    },
                    (error) => {
                        originContainer.style.display = "flex";
                    }
                );
            } else {
                originContainer.style.display = "flex";
            }
        };

        // handler for user type origin
        useOriginBtn.onclick = () => {
            const address = originInput.value.trim();
            if(!address){
                alert("Enter a valid start address.");
                return;
            }

            geocoder.geocode({ address: address}, (results, status) => {
                if(status === "OK") {
                const origin = {
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                };
                directionRoute(origin, { lat: marker.position.lat(), lng: marker.position.lng() });
                originContainer.style.display = "none"; // hide display after input
            } else {
                alert("Could not find location. Try again.");
            }

        });
    };
    });
});
        

    markers.push(marker);
};
// function to route direction
function directionRoute(origin, destination){
    directionsService.route({
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING
    }, (result, status) => {
        if (status === "OK") directionsRenderer.setDirections(result);
        else alert("Directions failed: " + status);
    });
}    
//     mapWinery();
// }

/**
 * Event handler to handle form submission, initiate geocoder API
 * and store new winery data into wineries array
 */
// function getDirections(lat,lng){
//     if(!navigator.geolocation){
//         alert("Geolocation not supported on browser.");
//         return;
//     }
//     navigator.geolocation.getCurrentPosition(
//         (position) => {
//             const origin = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude
//             };
//             const destination = { lat, lng };

//             const request = {
//                 origin: origin,
//                 destination: destination,
//                 travelMode: google.maps.TravelMode.DRIVING
//             };
//             directionsService.route(request, (result, status) => {
//                 if (status === "OK") {
//                     directionsRenderer.setDirections(result);
//                 } else {
//                     alert("Directions request failed: " + status);
//                 }
//             });
//         },
//         (error) => {
//             console.log("Geolocation error:", error);
//             alert("Unable to get your location. Please enter manually.");
//         }
//         );
// }

// Allows user to add new winery
function mapWinery(){
    const wineryForm = document.getElementById("winery-form");

    wineryForm.addEventListener("submit", function(e) {
        e.preventDefault(); //stops page from reloading

        const name = document.getElementById("winery-name").value;
        const address = document.getElementById("winery-address").value;
        if(!name || !address) return;

        geocoder.geocode({ address }, (results, status) => {
            if(status === "OK"){
                const location = results[0].geometry.location;
                const lat = location.lat();
                const lng = location.lng();
                
                const newWinery = {
                    name,
                    address,
                    lat,
                    lng,
                    category: "New",
                    tastingStyle: "N/A",
                    telephone: "",
                    website: "#"
                };
                wineries.push(newWinery);

                // add new winery to array
                // const newWinery = {
                //     name,
                //     address,
                //     lat,
                //     lng,
                // };

                const contentHtml = `
                    <div style="max-width:250px;">
                        <h3>${name}</h3>
                        <p><strong>Address:</strong> ${address}</p>
                        <button id="get-dir-btn" class="btn btn-sm btn-primary mt-1">Get Directions</button>
                        <div id="origin-container" class="input-group mt-2" style="display:none;">
                        <input type="text" id="origin-input" class="form-control form-control-sm" placeholder="Enter start address">
                        <button id="use-origin" class="btn btn-success btn-sm">Go</button>
                        </div>
                    </div>
                `;

                createMarker(newWinery, contentHtml);
                map.setCenter({ lat, lng });
                wineryForm.reset();
            } else alert("Address not found");

                // const marker = createMarker({
                //     map,
                //     position: { lat: lat, lng: lng },
                //     title: name,
                //     contentHtml,
                //     iconUrl: "https://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png"
                // });
                
                // wineries.push(newWinery);

                // const marker = new AdvancedMarkerElement({
                //     map: map,
                //     position: { lat: lat, lng: lng },
                //     title: name
                // });

            //     markers.push(marker);

            //     map.setCenter({ lat: lat, lng: lng });

            // } else {
            //     alert("Address not found. Try again.");
            // }
            });
            // wineryForm.requestFullscreen();
        
    });

};


    

   

window.initMap = initMap;
// window.initMap = () => { initMap(); mapWinery(); };

// window.addEventListener("load", () =>{
//     initMap();
//     // mapWinery();
//     });

