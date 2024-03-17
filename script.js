// Sample solutions data including image URLs
const solutions = [
    { 
        problem: "Thrips", 
        infestationimage: "images/Thrips in.jpg",
        description: "Thrips infestations pose a serious threat to coffee production, impacting tree health and berry quality. Vigilance and prompt action are essential for mitigating these pests' impact. By employing early detection methods and implementing appropriate management strategies, coffee farmers can protect their crops and ensure a sustainable yield in the face of thrips infestations.",
        solution: "Use Kingcode 10mls + Integra 3mls/20ltrs of water.",
        image: "images/Kingcode-elite-2048x2048.webp"
       
    },
    { 
        problem: "Leaf Miners", 
        infestationimage: "images/leafminer.jpg",
        description:"Leaf miners are tiny insect larvae that tunnel through the tissues of leaves, leaving distinctive trails or mines behind them. In the case of coffee plants, leaf miners can have a significant impact on the health and productivity of the coffee leaves. When leaf miners infest coffee plants, they create tunnels within the leaves, which disrupt the flow of nutrients and water.",
        solution: "Use Presento 10gms + Integra 3mls/20ltrs of water.",
        image: "images/PRESENTO-KG-2048x2048.webp"
    },
   
    { 
        problem: "Coffee Berry Month", 
        infestationimage: "images/months.jpeg",
        description: "The female moth lays scale-like eggs singly on or near green berries. The caterpillar is reddish to pink in colour with dark markings on the back, and measures 13 mm when fully grown. Caterpillars bore into green, half-grown berries, starting near the stalk and hollow them out.",
        solution: "Use Kingcode 10mls + Integra 3mls/20ltrs of water.",
        image: "images/Kingcode-elite-2048x2048.webp"
    },
    { 
        problem: "Antestia Bug", 
        infestationimage: "images/antestia.jpeg",
        description: "The Antestia bug (Antestiopsis spp.), or variegated coffee bug, is a significant pest in Arabica coffee, especially in Eastern Africa. From nymphs to adults, all development instars, feed on most parts of the coffee bushes. An Antestia bug infestation can lead to a direct yield reduction of up to 40 percent.",
        solution: "Use Ranger 40mls + Integra 3mls/20ltrs of water.",
        image: "images/ranger-480EC.webp"
    },
    { 
        problem: "Coffee Berry Borers", 
        infestationimage: "images/Coffee berry borer.jpg",
        description: "Coffee berry borer  is a devastating insect pest that affects coffee plants. The female beetle burrows into the coffee cherry and lays her eggs inside. Once hatched, the larvae feed on the coffee beans inside the berry, causing damage and reducing the quality and yield of the coffee crop.",
        solution: "Use Lexus 10mls + Integra 3mls/20ltrs of water.",
        image: "images/Lexus-247SC.webp"
    },
    { 
        problem: "Mealybugs", 
        infestationimage: "images/Mealybugs.jpg",
        description:"Mealybugs are small, white, cotton-like insects that infest coffee plants, sucking sap and causing stunted growth, yellowing leaves, and reduced yield. They also excrete honeydew, attracting ants and promoting sooty mold growth. Control involves physical removal, insecticidal soap, biological agents, or pesticides for severe infestations. ",
        solution: "Use Lexus 10mls + Integra 3mls/20ltrs of water.",
        image: "images/Lexus-247SC.webp"
    },
    { 
        problem: "White Headed Borers", 
        infestationimage: "images/Bore.jpg",
        description:"Larvae feed on wood internally, in the main stem and major branches. When mature, adults will leave exit holes 2-4 mm in diameter. Wood dust may be found on ground nearby entrance holes. Other signs of coffee white stem borer include wilting, defoliation, or yellowing of leaves. Tunneling larvae may also cause ridges to develop on the surface of the stem. ",
        solution: "Use Kingcode 10mls + Integra 3mls/20ltrs of water.",
        image: "images/Kingcode-elite-2048x2048.webp"
    },
    { 
        problem: "Mites", 
        infestationimage: "images/Mites.jpg",
        description:"Spider mites cause damage by sucking cell contents from leaves. A small number of mites isn't usually a problem, but very high populations can be damaging, especially to annual plants. Often, damage first appears as a stippling of light dots on the leaves; sometimes leaves turn a bronze color",
        solution: "Use Bazooka 10mls + Integra 3mls/20ltrs of water.",
        image: "images/Bazooka-2048x2048.webp"
    },
    { 
        problem: "Leaf Rust", 
        infestationimage: "images/Leafrust.jpg",
        description:"Coffee rust or coffee leaf rust is a significant problem in coffee-producing regions. Caused by the fungus Hemileia vastatrix, outbreaks can have a devastating impact on crop yields, rendering coffee cultivation uneconomic wherever it reaches epidemic proportions.",
        solution: "For preventive actions use Greencop 140gms/20ltrs of water and for curative actions alternate Abslote star 10mls with Compliant 40mls/20ltrs per 20ltrs of water.",
        image: "images/Green-Cop.webp"
    },
    { 
        problem: "Coffee Berry Disease", 
        infestationimage: "images/CBD.jpg",
        description:"Coffee berry disease (Colletotrichum kahawae) is a devastating pathogen so far present exclusively in Africa. In its more severe form, the fungus invades the berry during the green stage (4–14 weeks after flowering) producing dark brown spots that end up covering the cherry and affecting bean development and quality.",
        solution: "For preventive and curative actions alternate Absolute star 10mls with Compliant 40mls/20ltrs per 20ltrs of water.",
        image: "images/Absolute-star-2048x2048.webp"
    },
    { 
        problem: "Coffee Berry Blight", 
        infestationimage: "images/BBC.jpg",
        description:"The disease also affects ripening berries causing a 'brown blight' phase as typical dark, sunken anthracnose lesions envelop the red berry. Anthracnose of ripe berries is also commonly caused by the weakly pathogenic Colletotrichum gloeosporioides.",
        solution: "For preventive actions use Greencop 140gms/20ltrs of water and for curative actions alternate Abslote star 10mls with Compliant 40mls/20ltrs per 20ltrs of water.",
        image: "images/compliant.webp"
    },
    { 
        problem: "Zinc Deficiency", 
        infestationimage: "images/Zinc.jpg",
        description:"Zinc deficiency causes leaf borders can become curled and the internodes between the leaves are shortened. The green leaf veins stand out from a yellow background. Symptoms are usually more visible at the tips of the branches in new growth. The tree is stunted and takes on a rosette habit.",
        solution: "Use Zinc Gold 20mls + Integra 3mls/20ltrs of water especiacly after prunning and during flowering season.",
        image: "images/zinc-gold.webp"
    }, { 
        problem: "Boron Deficiency", 
        infestationimage: "images/Zinc.jpg",
        description:"Deficiency symptoms are visible on younger leaves and on the growing point of the plants. The leaves are light green and mottled, the new developing leaves have an asymetric shape with uneven margins and necrotic spots.",
        solution: "Use Vitabor Gold 20mls + Integra 3mls/20ltrs of water.",
        image: "images/Vitabor-Gold.webp"
    },
    { 
        problem: "Phosphorus Deficiency", 
        infestationimage: "images/Phosphorus.jpg",
        description:"Symptoms vary greatly when plants are deficient in phosphorus. In broadleaf plants, young leaves may be dark green and have purplish veins, especially on the underside of leaves. Older leaves can develop an overall purplish tint and tip dieback. Leaves may be curled, distorted, smaller than normal, or drop prematurely",
        solution: "Use Lavender Total 20mls + Integra 3mls/20ltrs of water.",
        image: "images/Lavender-total-combine-2048x2048.webp"
    },
    { 
        problem: "Nitrogen Deficiency", 
        infestationimage: "images/Nitrogen.jpg",
        description:"Nitrogen deficiency in coffee plants leads to yellowing of older leaves, stunted growth, delayed flowering, and reduced leaf size. It can be addressed by fertilizing with nitrogen-rich supplements, but overapplication should be avoided. Regular monitoring of soil and plant health is crucial.",
        solution: "Use Lavender Total 20mls + Integra 3mls/20ltrs of water.",
        image: "images/Lavender-total-combine-2048x2048.webp"
       
    },
    { 
        problem: "Potassium Deficiency", 
        infestationimage: "images/Pottasium.jpg",
        description:"Potassium deficiency in coffee berries manifests as smaller, irregularly shaped berries with uneven ripening. The berries may have a shriveled appearance and lack sweetness. Additionally, potassium-deficient plants are more susceptible to diseases and environmental stresses. To address this deficiency, potassium-rich fertilizers can be applied, and soil pH should be monitored to ensure optimal nutrient uptake.",
        solution: "Use Goldchance fruit and flower 50gms + Integra 3mls/20ltrs of water.",
        image: "images/Goldchance-Multi-Super-K-1.webp"
    },
    { 
        problem: "Soil Acidity", 
        description:"Soil acidity is a critical factor affecting plant health and crop productivity. It refers to the pH level of the soil, with acidic soils having pH values below 7. Acidic soils can hinder nutrient availability, impacting plant growth and development.Managing soil acidity is essential for optimizing agricultural yields. Techniques such as liming can help raise soil pH, making essential nutrients more available to plants. Regular soil testing and pH monitoring are vital for maintaining optimal soil conditions and maximizing crop performance.In conclusion, soil acidity significantly influences agricultural outcomes, and proactive management is key to ensuring healthy and productive soil for sustainable farming practices.",
        solution: "Use Humipower 1kg per 50kg of basal fertilizer.",
        image: "images/Humipower-bag-2048x2048.webp"
    

    }, 
    { 
        problem: "Sticker", 
        infestationimage:"images/integra a.jpg",
        solution: "Integra® is an organo-silicone based non-ionic wetter and spreader, highly effective in improving spray coverage, adhesion and penetration of chemicals.Use 3mls/20ltrs to increase efficacy of your spray.",
        image: "images/Integra (1).webp"
    },
    { 
        problem: "Stress", 
        infestationimage: "images/Stress.jpg",
        description:"Stress in coffee plants can result from various environmental factors such as drought, excessive rainfall, temperature fluctuations, pests, diseases, and soil nutrient deficiencies. These stressors can negatively impact plant health, leading to reduced growth, lower yield, and poor quality beans.Symptoms of stress in coffee plants may include wilting, leaf discoloration, leaf drop, reduced flower and fruit production, and increased susceptibility to diseases and pests.To mitigate stress in coffee plants, farmers employ various management practices such as proper irrigation, shade management, pest and disease control measures, and soil nutrient management. Additionally, selecting coffee varieties adapted to local environmental conditions can help enhance resilience to stressors.Overall, managing stress in coffee plants is crucial for maintaining healthy crops and ensuring sustainable coffee production.",
        solution: "Use Optimizer 10mls + Integra 3mls/20ltrs of water.",
        image: "images/Optimizer-new-2048x2048.webp"
    },
    // Add more solutions as needed
];

function searchSolutions() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const solutionResults = document.getElementById("solutionResults");
    solutionResults.innerHTML = "";

    const filteredSolutions = solutions.filter(solution => {
        const problemNames = solution.problem.toLowerCase().split(" ");
        return problemNames.some(name => name.includes(searchInput));
    });

    if (filteredSolutions.length === 0) {
        solutionResults.innerHTML = "<p>No solutions found for the entered problem.</p>";
    } else {
        filteredSolutions.forEach(solution => {
            const solutionDiv = document.createElement("div");
            solutionDiv.classList.add("solution");
            solutionDiv.innerHTML = `
            <h3>${solution.problem}</h3>
            <img src="${solution.infestationimage}" alt="${solution.problem}">
            <p>${solution.description}</p>
            <p>${solution.solution}</p>
            <img src="${solution.image}" alt="${solution.problem}">`;
              
            solutionResults.appendChild(solutionDiv);
        });
    }
}
