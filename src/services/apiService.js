const fleet = [
    {
        id: 1,
        name: "Ferrari 250 GTO",
        model: "1962 Tipo 539/62",
        category: "Ferrari",
        year: 1962,
        location: "Maranello",
        price: 4200,
        image: "https://images.caradisiac.com/logos/9/9/7/8/279978/S0-la-ferrari-250-gto-vaut-largement-moins-cher-que-la-plus-cotee-des-mercedes-205577.jpg",
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
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1592193660979-241777794c41?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1517672651691-24622a91b550?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&q=80&w=1200",
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
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1200",
        description: "Rare and elegant, the Mexico offers discreet V8 performance in a distinguished GT package."
    }
];

const getFleet = () => fleet;
const getCarById = (id) => fleet.find(car => car.id === parseInt(id));

module.exports = {
    getFleet,
    getCarById
};
