// Sample solutions data including image URLs
const solutions = [
    { 
        problem: "Thrips", 
        infestationimage: "images/Thrips in.jpg",
        description: "Thrips infestations pose a serious threat to coffee production, impacting tree health and berry quality. Vigilance and prompt action are essential for mitigating these pests' impact. By employing early detection methods and implementing appropriate management strategies, coffee farmers can protect their crops and ensure a sustainable yield in the face of thrips infestations.To eradicate them use Kincode 10mls/20ltrs of water, always incoporate Integra 3ml/20ltrs of water to increase efficacy of your spray.",
        solution: "UseKingcode 10mls + Integra 3mls/20ltrs of water",
        image: "images/Kingcode-elite-2048x2048.webp"
       
    },
    { 
        problem: "Leaf Miners", 
        infestationimage: "images/leafminer.jpg",
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        
        image: "images/PRESENTO-KG-2048x2048.webp"
    },
   
    { 
        problem: "Coffee Berry Month", 
        infestationimage: "images/leafminer.jpg",
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        
        image: "images/Kingcode-elite-2048x2048.webp"
    },

    { 
        problem: "Coffee berry borers", 
        infestationimage: "images/Coffee berry borer.jpg",
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        
        image: "images/Lexus-247SC.webp"
    },
    

    { 
        problem: "Mealy Bugs", 
        infestationimage: "images/Mealybugs.jpg",
        solution: "Test soil pH and add lime to raise pH levels if soil is too acidic.",
        
        image: "images/Lexus-247SC.webp"
    },
    { 
        problem: "White Headed Borers", 
        infestationimage: "images/Coffee berry borer.jpg",
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        
        image: "images/Kingcode-elite-2048x2048.webp"
    },
    { 
        problem: "Mites", 
        infestationimage: "images/Mites.jpg",
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
       
        image: "images/Bazooka-2048x2048.webp"
    },
    { 
        problem: "Leaf Rust", 
        infestationimage: "images/Leafrust.jpg",
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        
        image: "images/Green-Cop.webp"
    },
    { 
        problem: "Coffee Berry Disease", 
        infestationimage: "images/CBD.jpg",
        solution: "Implement mulching techniques to suppress weed growth and maintain soil moisture.",
        
        image: "images/Absolute-star-2048x2048.webp"
    },
    { 
        problem: "Coffee Berry Blight", 
        infestationimage: "images/BBC.jpg",
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        
        image: "images/compliant.webp"
    },
    { 
        problem: "Zinc Deficiency", 
        infestationimage: "images/Zinc.jpg",
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
       
        image: "images/zinc-gold.webp"
    }, { 
        problem: "Boron Deficiency", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Zinc.jpg",
        image: "images/Vitabor-Gold.webp"
    },
    { 
        problem: "Phosphorus Deficiency", 
        infestationimage: "images/Phosphorus.jpg",
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        
        image: "images/Lavender-total-combine-2048x2048.webp"
    },
    { 
        problem: "Nitrogen Deficiency", 
        infestationimage: "images/Nitrogen.jpg",
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        
        image: "images/Lavender-total-combine-2048x2048.webp"
       
    },
    { 
        problem: "Potassium Deficiency", 
        infestationimage: "images/Pottasium.jpg",
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
       
        image: "images/Goldchance-Multi-Super-K-1.webp"
    },
    { 
        problem: "Soil Acidity", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        image: "images/Humipower-bag-2048x2048.webp"
    

    }, 
    { 
        problem: "Sticker", 
        solution: "Integra® is an organo-silicone based non-ionic wetter and spreader, highly effective in improving spray coverage, adhesion and penetration of chemicals.Use 3mls/20ltrs to increase efficacy of your spray.",
        image: "images/pest_control.jpg"
    },
    { 
        problem: "Stress", 
        infestationimage: "images/Stress.jpg",
        solution: "Integra® is an organo-silicone based non-ionic wetter and spreader, highly effective in improving spray coverage, adhesion and penetration of chemicals.Use 3mls/20ltrs to increase efficacy of your spray.",
        
        image: "images/Optimizer-new-2048x2048.webp"
    },

    // Add more solutions as needed
];

function searchSolutions() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const solutionResults = document.getElementById("solutionResults");
    solutionResults.innerHTML = "";

    const filteredSolutions = solutions.filter(solution => solution.problem.toLowerCase().includes(searchInput));

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
            <p>${solution.solution}</p>;
            <img src="${solution.image}" alt="${solution.problem}">`;
              
            solutionResults.appendChild(solutionDiv);
        });
    }
}
