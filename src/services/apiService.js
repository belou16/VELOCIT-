const fleet = [
    {
        id: 1,
        name: "Ferrari 250 GTO",
        model: "1962 Tipo 539/62",
        category: "Ferrari",
        year: 1962,
        location: "Maranello",
        price: 4200,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/1963_Ferrari_250_GTO_%28chassis_4153GT%29_2.95.jpg/1280px-1963_Ferrari_250_GTO_%28chassis_4153GT%29_2.95.jpg",
        description: "The ultimate expression of 1960s Italian racing elegance, built for homologation and now worshiped as an icon."
    },
    {
        id: 2,
        name: "Lamborghini Miura P400",
        model: "1966 P400",
        category: "Lamborghini",
        year: 1966,
        location: "Sant'Agata",
        price: 2900,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/1971_Lamborghini_Miura_P400_SV.jpg/1280px-1971_Lamborghini_Miura_P400_SV.jpg",
        description: "The car that redefined the supercar formula with a dramatic mid-engine layout and unmatched visual theatre."
    },
    {
        id: 3,
        name: "Alfa Romeo Giulia Sprint GTA",
        model: "1965 Alleggerita",
        category: "Alfa Romeo",
        year: 1965,
        location: "Milan",
        price: 1250,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Arese_Museo_Storico_Alfa_Romeo_1965_Giulia_Sprint_GTA_1.jpg/1280px-Arese_Museo_Storico_Alfa_Romeo_1965_Giulia_Sprint_GTA_1.jpg",
        description: "A lightweight homologation special with racing DNA, balancing compact elegance and fierce character."
    },
    {
        id: 4,
        name: "Maserati Ghibli",
        model: "1967 4.7",
        category: "Maserati",
        year: 1967,
        location: "Turin",
        price: 1650,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/1967_Maserati_Mistral_Coupe_-_silver_-_fvr_%284637057473%29_cropped.jpg/1280px-1967_Maserati_Mistral_Coupe_-_silver_-_fvr_%284637057473%29_cropped.jpg",
        description: "A razor-sharp Giugiaro silhouette and long-legged V8 power made this one of Italy's finest grand tourers."
    },
    {
        id: 5,
        name: "Ferrari 275 GTB",
        model: "1964 Scaglietti",
        category: "Ferrari",
        year: 1964,
        location: "Modena",
        price: 2600,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/1966_Ferrari_275_GTB_sn_08549%2C_front_left_%28Greenwich_2019%29.jpg/1280px-1966_Ferrari_275_GTB_sn_08549%2C_front_left_%28Greenwich_2019%29.jpg",
        description: "A key Ferrari turning point, combining refined GT comfort with serious performance and timeless proportions."
    },
    {
        id: 6,
        name: "Alfa Romeo Spider Duetto",
        model: "1966 1600",
        category: "Alfa Romeo",
        year: 1966,
        location: "Liguria",
        price: 820,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Alfa_Romeo_%283568179480%29.jpg/1280px-Alfa_Romeo_%283568179480%29.jpg",
        description: "A romantic open-top icon of Italian summers, famous for graceful lines and a playful twin-cam spirit."
    },
    {
        id: 7,
        name: "Ferrari 330 GTC",
        model: "1966 Series I",
        category: "Ferrari",
        year: 1966,
        location: "Florence",
        price: 2200,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Ferrari_250_Lusso_in_Grey%2C_front_right.jpg/1280px-Ferrari_250_Lusso_in_Grey%2C_front_right.jpg",
        description: "Silk-smooth V12 touring with understated class, perfect for long-distance continental driving."
    },
    {
        id: 8,
        name: "Ferrari 365 GTB/4 Daytona",
        model: "1968 Competizione",
        category: "Ferrari",
        year: 1968,
        location: "Rome",
        price: 3400,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/1973_Ferrari_Daytona_365_GTB4_Blue_LC22.jpg/1280px-1973_Ferrari_Daytona_365_GTB4_Blue_LC22.jpg",
        description: "An aggressive V12 front-engine legend born to answer the new supercar era with authority."
    },
    {
        id: 9,
        name: "Lamborghini 400 GT",
        model: "1966 2+2",
        category: "Lamborghini",
        year: 1966,
        location: "Como",
        price: 1850,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/1967_Lamborghini_400_GT_2%2B2%2C_front_left%2C_Greenwich_2018.jpg/1280px-1967_Lamborghini_400_GT_2%2B2%2C_front_left%2C_Greenwich_2018.jpg",
        description: "The sophisticated grand touring side of Lamborghini with elegant Touring-built coachwork."
    },
    {
        id: 10,
        name: "Lamborghini Islero",
        model: "1968 GT",
        category: "Lamborghini",
        year: 1968,
        location: "Bergamo",
        price: 2100,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lamborghini_Islero%2C_Techno_Classica_2018%2C_Essen_%28IMG_9696%29.jpg/1280px-Lamborghini_Islero%2C_Techno_Classica_2018%2C_Essen_%28IMG_9696%29.jpg",
        description: "A discreet V12 bruiser favored by purists who value performance over theatrics."
    },
    {
        id: 11,
        name: "Lamborghini Espada",
        model: "1968 Series I",
        category: "Lamborghini",
        year: 1968,
        location: "Bologna",
        price: 1780,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lamborghini-Espada.jpg/1280px-Lamborghini-Espada.jpg",
        description: "Bold, angular and uniquely practical, this V12 four-seater remains a design statement."
    },
    {
        id: 12,
        name: "Maserati Mistral",
        model: "1964 3.7",
        category: "Maserati",
        year: 1964,
        location: "Genoa",
        price: 1480,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/1967_Maserati_Mistral_Coupe_-_silver_-_fvr_%284637057473%29_cropped.jpg/1280px-1967_Maserati_Mistral_Coupe_-_silver_-_fvr_%284637057473%29_cropped.jpg",
        description: "A sleek Frua-designed coupe that blends racing heritage with refined grand touring manners."
    },
    {
        id: 13,
        name: "Maserati Sebring",
        model: "1963 Series II",
        category: "Maserati",
        year: 1963,
        location: "Lake Garda",
        price: 1360,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Maserati-3500gti.jpg/1280px-Maserati-3500gti.jpg",
        description: "Fast and elegant, the Sebring delivered true GT comfort with a distinctly Italian soul."
    },
    {
        id: 14,
        name: "Maserati Quattroporte",
        model: "1966 Series I",
        category: "Maserati",
        year: 1966,
        location: "Milan",
        price: 1420,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/2015_Maserati_Quattroporte_DV6_Automatic_3.0_Front.jpg/1280px-2015_Maserati_Quattroporte_DV6_Automatic_3.0_Front.jpg",
        description: "The original high-performance luxury sedan, engineered for speed with executive comfort."
    },
    {
        id: 15,
        name: "Alfa Romeo 1750 GTV",
        model: "1968 Veloce",
        category: "Alfa Romeo",
        year: 1968,
        location: "Turin",
        price: 980,
        image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Alfa_Romeo_GT_1300_Junior.jpg",
        description: "One of Alfa Romeo's sweetest road cars, celebrated for chassis balance and lively twin-cam character."
    },
    {
        id: 16,
        name: "Alfa Romeo Giulia TZ",
        model: "1963 Zagato",
        category: "Alfa Romeo",
        year: 1963,
        location: "Brescia",
        price: 1980,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/1963_Alfa_Romeo_Giulia_TZ_in_ivory_%28Lime_Rock%29.jpg/1280px-1963_Alfa_Romeo_Giulia_TZ_in_ivory_%28Lime_Rock%29.jpg",
        description: "A rare lightweight competition machine with aerodynamic bodywork from Zagato."
    },
    {
        id: 17,
        name: "Fiat Dino Spider",
        model: "1967 Pininfarina",
        category: "Fiat",
        year: 1967,
        location: "Sicily",
        price: 940,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Fiat_Dino_reg_1968_1987_cc.JPG/1280px-Fiat_Dino_reg_1968_1987_cc.JPG",
        description: "Compact Italian drama with Ferrari-derived V6 sound and classic open-air styling."
    },
    {
        id: 18,
        name: "Fiat Dino Coupe",
        model: "1969 Bertone",
        category: "Fiat",
        year: 1969,
        location: "Turin",
        price: 1020,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Fiat_Dino_reg_1968_1987_cc.JPG/1280px-Fiat_Dino_reg_1968_1987_cc.JPG",
        description: "A sharp Bertone coupe combining accessible GT usability with exotic mechanical pedigree."
    },
    {
        id: 19,
        name: "Lancia Fulvia Coupe",
        model: "1965 Rallye 1.3",
        category: "Lancia",
        year: 1965,
        location: "Turin",
        price: 860,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lancia_Motor_Club_AGM_2011_DSC_4294_-_Flickr_-_tonylanciabeta_%28cropped%29.jpg/1280px-Lancia_Motor_Club_AGM_2011_DSC_4294_-_Flickr_-_tonylanciabeta_%28cropped%29.jpg",
        description: "Light, precise and full of character, the Fulvia became a hero on tarmac rally stages."
    },
    {
        id: 20,
        name: "Lancia Flaminia GT",
        model: "1962 Touring",
        category: "Lancia",
        year: 1962,
        location: "Milan",
        price: 1290,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/1961_Lancia_Flaminia_GT%2C_front_right.jpg/1280px-1961_Lancia_Flaminia_GT%2C_front_right.jpg",
        description: "A refined grand tourer with coachbuilt sophistication and a relaxed long-distance temperament."
    },
    {
        id: 21,
        name: "Bizzarrini 5300 GT",
        model: "1967 Strada",
        category: "Bizzarrini",
        year: 1967,
        location: "Livorno",
        price: 2400,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/1966_Ferrari_275_GTB_sn_08549%2C_front_left_%28Greenwich_2019%29.jpg/1280px-1966_Ferrari_275_GTB_sn_08549%2C_front_left_%28Greenwich_2019%29.jpg",
        description: "Low, brutal and unforgettable, this road racer reflects pure engineering obsession."
    },
    {
        id: 22,
        name: "Iso Grifo GL",
        model: "1967 Series I",
        category: "Iso",
        year: 1967,
        location: "Como",
        price: 1880,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/1969_Iso_Grifo_in_Rosso_Chiaro_%28Darren_Frank%29%2C_front_left%2C_at_Greenwich_2019.jpg/1280px-1969_Iso_Grifo_in_Rosso_Chiaro_%28Darren_Frank%29%2C_front_left%2C_at_Greenwich_2019.jpg",
        description: "Italian sculpture with transatlantic power, crafted for elegant high-speed cruising."
    },
    {
        id: 23,
        name: "Ferrari 250 GT Lusso",
        model: "1963 Berlinetta",
        category: "Ferrari",
        year: 1963,
        location: "Rome",
        price: 2700,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Ferrari_250_Lusso_in_Grey%2C_front_right.jpg/1280px-Ferrari_250_Lusso_in_Grey%2C_front_right.jpg",
        description: "A beautifully balanced grand tourer famed for one of Ferrari's most elegant body designs."
    },
    {
        id: 24,
        name: "Maserati Mexico",
        model: "1968 4.2",
        category: "Maserati",
        year: 1968,
        location: "Venice",
        price: 1580,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Maserati_Mexico.jpg",
        description: "Rare and elegant, the Mexico offers discreet V8 performance in a distinguished GT package."
    }
];

const getFleet = () => fleet;
const getCarById = (id) => fleet.find(car => car.id === parseInt(id));

module.exports = {
    getFleet,
    getCarById
};
