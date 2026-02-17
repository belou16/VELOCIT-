exports.getFleet = async () => {
    return [
        {
            id: 1,
            name: "1962 Ferrari 250 GTO",
            model: "Series I Berlinetta",
            price: 2500,
            category: "Ferrari",
            image: "https://images.caradisiac.com/logos/9/9/7/8/279978/S0-la-ferrari-250-gto-vaut-largement-moins-cher-que-la-plus-cotee-des-mercedes-205577.jpg",
            description: "The pinnacle of 1960s engineering. Only 36 were built, featuring the legendary 3.0L V12 Colombo engine."
        },
        {
            id: 2,
            name: "1966 Lamborghini Miura",
            model: "P400",
            price: 1500,
            category: "Lamborghini",
            image: "https://images.rmsothebys.com/6/1/0/0/2/8/0/610028_1.jpg", // Unique Yellow Miura
            description: "The world's first mid-engined supercar. Its transverse V12 heart redefined automotive design in 1966."
        },
        {
            id: 3,
            name: "1966 Alfa Romeo Spider",
            model: "1600 'Duetto'",
            price: 350,
            category: "Alfa Romeo",
            image: "https://bringatrailer.com/wp-content/uploads/2020/06/1966_alfa_romeo_spider_duetto_1592500000a6f4d2f808DSC_0001.jpg", // Unique Red Duetto
            description: "An icon of Italian cinema and style. The Pininfarina-designed Duetto captured the spirit of the mid-60s."
        },
        {
            id: 4,
            name: "1964 Ferrari 275 GTB",
            model: "Short Nose",
            price: 1800,
            category: "Ferrari",
            image: "https://images.rmsothebys.com/b/3/c/f/e/6/2/b3cfe6243881ae0b88d8b88d8b88d8b8.original.jpg", // Unique Silver 275 GTB
            description: "A masterclass in 1964 GT design, introducing the rear transaxle for perfect weight distribution."
        },
        {
            id: 5,
            name: "1965 Fiat 500",
            model: "Cinquecento F",
            price: 180,
            category: "Fiat",
            image: "https://bringatrailer.com/wp-content/uploads/2018/10/1965_fiat_500_154101128384b6f7DSC_0004.jpg", // Unique White 500
            description: "The soul of 1960s Italy. Simple, elegant, and revolutionary for urban mobility."
        },
        {
            id: 6,
            name: "1963 Maserati 3500 GT",
            model: "GTI Sebring",
            price: 650,
            category: "Maserati",
            image: "https://images.rmsothebys.com/5/2/0/1/2/4/0/520124_1.jpg", // Unique Burgundy Maserati
            description: "Grand touring luxury from 1963. The GTI was the first Italian production car with fuel injection."
        },
        {
            id: 7,
            name: "1968 Lamborghini Espada",
            model: "Series I",
            price: 550,
            category: "Lamborghini",
            image: "https://images.rmsothebys.com/8/2/0/1/3/6/5/8201365_1.jpg", // Unique Gold Espada
            description: "A radical 1968 vision. A genuine four-seater GT with a powerful V12 from Sant'Agata."
        },
        {
            id: 8,
            name: "1965 Alfa Romeo Giulia",
            model: "Sprint GTA",
            price: 450,
            category: "Alfa Romeo",
            image: "https://bringatrailer.com/wp-content/uploads/2017/09/1965_alfa_romeo_giulia_sprint_gta_1505327000e8f5d8754bba8f4DSC_0012.jpg", // Unique GTA Racing White
            description: "The 1965 'Alleggerita'. Lightweight aluminum panels and twin-spark performance for the track."
        },
        {
            id: 9,
            name: "1961 Ferrari 250 GT",
            model: "SWB California Spyder",
            price: 3500,
            category: "Ferrari",
            image: "https://images.rmsothebys.com/3/2/1/1/4/5/1/3211451_1.jpg", // Unique Red California Spyder
            description: "The ultimate 1961 convertible. Rare, extremely valuable, and the epitome of 1960s glamour."
        },
        {
            id: 10,
            name: "1967 Alfa Romeo 33 Stradale",
            model: "V8 Mid-Engine",
            price: 4500,
            category: "Alfa Romeo",
            image: "https://www.supercars.net/blog/wp-content/uploads/2016/04/1967_AlfaRomeo_33Stradale2.jpg", // Unique Red 33 Stradale Profile
            description: "A race car for the road from 1967. Only 18 were made, featuring a high-revving 2.0L V8."
        },
        {
            id: 11,
            name: "1969 Maserati Ghibli",
            model: "SS 4.9L",
            price: 550,
            category: "Maserati",
            image: "https://bringatrailer.com/wp-content/uploads/2020/03/1969_maserati_ghibli_ss_4_9_1585600000a6f4d2f808DSC_0001.jpg", // Bronze Ghibli
            description: "Late 60s muscle. Giugiaro-designed coupe with a thunderous 4.9L V8 engine."
        },
        {
            id: 12,
            name: "1963 Ferrari 250 LM",
            model: "Stradale",
            price: 4200,
            category: "Ferrari",
            image: "https://images.rmsothebys.com/az750733/2015/07/22/10/33/1964-ferrari-250-lm-by-scaglietti-rm-sothebys.jpg", // Red Racing 250 LM
            description: "The mid-engined champion of the early 60s. Ferrari's last overall winner at Le Mans."
        },
        {
            id: 13,
            name: "1964 Lamborghini 350 GT",
            model: "Touring Superleggera",
            price: 900,
            category: "Lamborghini",
            image: "https://images.rmsothebys.com/az750733/2018/06/25/09/45/1964-lamborghini-350-gt-by-touring-rm-sothebys.jpg", // Silver 350 GT
            description: "The car that started it all in 1964. Ferruccio's first challenge to Maranello."
        },
        {
            id: 14,
            name: "1960 Lancia Flaminia",
            model: "Sport Zagato",
            price: 400,
            category: "Lancia",
            image: "https://images.rmsothebys.com/az750733/2014/10/30/15/45/1960-lancia-flaminia-sport-by-zagato-rm-sothebys.jpg", // Silver Flaminia
            description: "Early 60s sophistication. Hand-built by Zagato with unique aerodynamic lines."
        },
        {
            id: 15,
            name: "1967 ISO Grifo",
            model: "GL Series I",
            price: 750,
            category: "ISO",
            image: "https://bringatrailer.com/wp-content/uploads/2021/05/1967_iso_grifo_gl_series_i_1621281542f7940eUntitled.jpg", // Blue Iso Grifo
            description: "1967 Italian-American fusion. Bertone styling meets reliable big-block power."
        },
        {
            id: 16,
            name: "1964 Alfa Romeo Giulia",
            model: "Sprint GT",
            price: 320,
            category: "Alfa Romeo",
            image: "https://bringatrailer.com/wp-content/uploads/2019/08/1964_alfa_romeo_giulia_sprint_gt_1567111283a6f4d2f808DSC_0001.jpg", // Blue Sprint GT
            description: "The defining post-1964 sports coupe. Balanced, elegant, and a joy to drive."
        },
        {
            id: 17,
            name: "1966 Ferrari 330 GTC",
            model: "Pininfarina Coupe",
            price: 1100,
            category: "Ferrari",
            image: "https://images.rmsothebys.com/5/2/2/1/2/4/0/522124_1.jpg", // Grey 330 GTC
            description: "Understated 1966 luxury. A high-performance V12 GT for the discerning owner."
        },
        {
            id: 18,
            name: "1965 Lancia Fulvia",
            model: "Coupé Series I",
            price: 250,
            category: "Lancia",
            image: "https://bringatrailer.com/wp-content/uploads/2017/12/1965_lancia_fulvia_coupe_1513611283e8f5d8754bba8f4DSC_0001.jpg", // Red Fulvia
            description: "1965 engineering excellence. The V4-powered Fulvia was a giant-killer in rallies."
        },
        {
            id: 19,
            name: "1967 Bizzarrini 5300 GT",
            model: "Strada",
            price: 950,
            category: "Bizzarrini",
            image: "https://images.rmsothebys.com/6/2/0/1/2/4/0/620124_1.jpg", // Blue Bizzarrini
            description: "A 1967 racing heart for the road. Designed by the master of the 250 GTO."
        },
        {
            id: 20,
            name: "1961 Maserati 5000 GT",
            model: "Allemano",
            price: 1300,
            category: "Maserati",
            image: "https://images.rmsothebys.com/4/2/0/1/2/4/0/420124_1.jpg", // Gold Maserati 5000 GT
            description: "The 1961 'Shah of Persia'. An ultra-exclusive V8 GT with custom coachwork."
        },
        {
            id: 21,
            name: "1963 Alfa Romeo Giulia",
            model: "TZ (Tubolare Zagato)",
            price: 2200,
            category: "Alfa Romeo",
            image: "https://bringatrailer.com/wp-content/uploads/2018/05/1963_alfa_romeo_giulia_tz1_1526611283a6f4d2f808DSC_0002.jpg", // Racing Red TZ1
            description: "1963 competition excellence. A tube-framed masterpiece built for the track."
        },
        {
            id: 22,
            name: "1968 Ferrari 365 GTB/4",
            model: "Daytona",
            price: 1600,
            category: "Ferrari",
            image: "https://images.rmsothebys.com/2/2/0/1/2/4/0/220124_1.jpg", // Black Daytona
            description: "The legendary 1968 response to the Miura. A front-engined V12 titan."
        },
        {
            id: 23,
            name: "1960 Ferrari 250 GT",
            model: "SWB Berlinetta",
            price: 3200,
            category: "Ferrari",
            image: "https://images.rmsothebys.com/1/2/0/1/2/4/0/120124_1.jpg", // Gunmetal SWB
            description: "The early 60s masterpiece. Perfect balance and a Colombo V12 scream."
        },
        {
            id: 24,
            name: "1968 Alfa Romeo 1750",
            model: "GTV",
            price: 380,
            category: "Alfa Romeo",
            image: "https://bringatrailer.com/wp-content/uploads/2021/03/1968_alfa_romeo_1750_gtv_1615611283e8f5d8754bba8f4DSC_0001.jpg", // Ochre GTV
            description: "Late 60s driving purity. The 1750cc engine is widely regarded as the best dual-cam Alfa."
        },
        {
            id: 25,
            name: "1960 Maserati Tipo 61",
            model: "Birdcage",
            price: 2600,
            category: "Maserati",
            image: "https://images.rmsothebys.com/9/1/0/1/2/4/0/910124_1.jpg", // White/Blue Birdcage
            description: "Scientific beauty from 1960. A chassis like a work of art, built for sheer speed."
        },
        {
            id: 26,
            name: "1967 Fiat Dino Spider",
            model: "Pininfarina Design",
            price: 450,
            category: "Fiat",
            image: "https://bringatrailer.com/wp-content/uploads/2019/04/1967_fiat_dino_spider_1555611283a6f4d2f808DSC_0001.jpg", // Red Dino Spider
            description: "A 1967 masterpiece combining Fiat's accessibility with a Ferrari V6 engine. Pure 60s open-top bliss."
        },
        {
            id: 27,
            name: "1968 Lamborghini Islero",
            model: "2+2 GT",
            price: 850,
            category: "Lamborghini",
            image: "https://images.rmsothebys.com/7/2/0/1/2/4/0/720124_1.jpg", // Silver Islero
            description: "Understated 1968 elegance. The Islero was Ferruccio Lamborghini's personal favorite for daily driving."
        },
    ];
};

exports.getCarById = async (id) => {
    const fleet = await exports.getFleet();
    return fleet.find(car => car.id === parseInt(id));
};
