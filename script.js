let map;

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
        category:-"Boutique Winery",
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
]
async function initMap(){
    const { Map } = (await google.maps.importLibrary('maps'));
    map = new Map(document.getElementById("map"), {
        center:{ lat: 43.255, lng: -79.0275 },
        zoom: 13
        
    });
}