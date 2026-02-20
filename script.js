let map;
let geocoder;
let markers = [];
let userMarker = null;
let userLocation = null;
let currentWindow = null; // to track opened infowindow
let directionsService;
let directionsRenderer;
let new_icon;

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
        category: "Celebrity Winery",
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
        telephone: "(905)-765-2000"
    }
];

function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
        center:{ lat: 43.255, lng: -79.0275 },
        zoom: 12,
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
                    <div class="d-flex gap-2">
                        <button id="get-dir-btn" class="btn btn-primary btn-sm"> Get Direction </button>
                        <button id="clear-btn" class="btn btn-danger btn-sm" style="display:none;">Clear</button>
                    </div>
                    <div id="origin-container" class="mt-2">
                        <button id="show-origin-btn" class="btn btn-secondary btn-sm">Add Address</button>
                        <div id="origin-input-container" class="input-group mt-2" style="display:none;">
                            <input type="text" id="origin-address" class="form-control form-control-sm" placeholder="Enter starting address">
                            <button class="btn btn-success btn-sm" id="use-origin">Go</button>
                        </div>
                    </div>
                </div>
                `;
            createMarker(winery, contentHtml);
    });

        // winery-form
        mapWinery();
        
        // marker filter buttons call
        filterBtns();

}

    //filter buttons for map
    function filterBtns() {
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // remove default active class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));
            // add active to clicked filter button
            button.classList.add("active");

            const category = button.dataset.category;

            markers.forEach(markerObj => {
                if (category === "All" || markerObj.category === category) {
                    markerObj.marker.setMap(map); // show marker
                } else {
                    markerObj.marker.setMap(null); // hide marker
                }
            });
        });
    });
}

    //create marker function
    function createMarker(winery, contentHtml) {
        if(winery.category === "Boutique Winery"){
            new_icon = "https://maps.google.com/mapfiles/kml/pushpin/ltblu-pushpin.png";
        } else if(winery.category == "Corporate Winery"){
            new_icon = "https://maps.google.com/mapfiles/kml/pushpin/pink-pushpin.png";
        } else if(winery.category == "Estate Winery"){
            new_icon ="https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png";
        } else if(winery.category == "Casual Winery"){
            new_icon = "https://maps.google.com/mapfiles/kml/shapes/bars.png";
        } else if(winery.category == "Luxury Winery"){
            new_icon ="https://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png";
        } else if(winery.category == "Lakefront Winery"){
            new_icon = "https://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png";
        } else if(winery.category == "Celebrity_Owned"){
            new_icon ="https://maps.google.com/mapfiles/kml/pushpin/purple-pushpin.png";
        } else if(winery.category == "Farm Winery"){
            new_icon = "https://maps.google.com/mapfiles/kml/pushpin/grn-pushpin.png";
        } else{
            new_icon ="https://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png";
        }
    
        // const marker_icon = document.createElement("img");
        // marker_icon.src = new_icon;
        const marker = new google.maps.Marker({
            map,
            position: { lat: winery.lat, lng: winery.lng},
            title: winery.name,
            icon : new_icon
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
        const clearBtn = document.getElementById("clear-btn");
        const showOriginBtn = document.getElementById("show-origin-btn");

        if (showOriginBtn){
            showOriginBtn.onclick = () => {
                const originContainer = document.getElementById("origin-input-container");
                originContainer.style.display = "flex";
                showOriginBtn.style.display = "none";
            }
        }
        
        // keeps clear button in an initial hidden state
        if (clearBtn) clearBtn.style.display = "none";

        // get directions on button click
        getDirBtn.onclick = () => {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        userLocation = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        if(userMarker){
                            userMarker.setMap(null);
                        }
                        //different user marker 
                        userMarker = new google.maps.Marker({
                            position: userLocation,
                            map: map,
                            title: "Your Location",
                            icon:{
                                url: "https://maps.google.com/mapfiles/kml/shapes/man.png"
                            }
                        })
                        directionRoute(userLocation, {lat: marker.position.lat(), lng: marker.position.lng() });
                        if (clearBtn) clearBtn.style.display = "inline-block";
                    },
                    (error) => {
                        document.getElementById("show-origin-btn").style.display = "inline-block";
                    }
                );
            } else {
                document.getElementById("show-origin-btn").style.display = "inline-block";
            }
        };

        // handler for manual user input of start location
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
                if (clearBtn) clearBtn.style.display = "inline-block"; // show clear button

            } else {
                alert("Could not find location. Try again.");
            }

        });

        if(clearBtn){
            clearBtn.onclick = () => {
                directionsRenderer.setDirections({ routes: [] });
                clearBtn.style.display = "none";
                map.setZoom(12); // reset zoom
                map.setCenter({ lat: 43.255, lng: -79.0275 });
            };
        }
        };
    });
    });
        

    markers.push({marker, category: winery.category });
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

// Allows user to add new winery
function mapWinery(){
    const wineryForm = document.getElementById("winery-form");

    wineryForm.addEventListener("submit", function(e) {
        e.preventDefault(); //stops page from reloading

        const name = document.getElementById("winery-name").value;
        const address = document.getElementById("winery-address").value;
        const category = document.getElementById("category-select").value;
        const tastingStyle = document.getElementById("tasting-style").value;
        const telephone = document.getElementById("phone-number").value;
        const website = document.getElementById("web-link").value;
        if(!name || !address || !category){
            alert("Please fill in required fields: name, address, category");
            return;
        } 

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
                    category,
                    tastingStyle,
                    telephone,
                    website,
                };
                wineries.push(newWinery);

                const contentHtml = `
                    <div style="max-width:250px;">
                        <h3>${name}</h3>
                        <p><strong>Address:</strong> ${address}</p>
                        <p><strong>Tasting Style:</strong> ${tastingStyle}</p>
                        <p><strong>Tel:</strong> ${telephone}</p>
                        <p><a href="${website}" target="_blank">Website</a></p>
                        <button id="get-dir-btn" class="btn btn-sm btn-primary mt-1">Get Directions</button>
                        <div id="origin-input-container" class="input-group mt-2" style="display:none;">
                            <input type="text" id="origin-address" class="form-control form-control-sm" placeholder="Enter start address">
                            <button id="use-origin" class="btn btn-success btn-sm">Go</button>
                        </div>
                    </div>
                `;

                createMarker(newWinery, contentHtml);
                map.setCenter({ lat, lng });
                wineryForm.reset();
            } else alert("Address not found");
    
            });
    });
};

window.initMap = initMap;


