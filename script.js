// Sample solutions data including image URLs
const solutions = [
    { 
        problem: "Thrips", 
        solution: "Thrips infestations pose a serious threat to coffee production, impacting tree health and berry quality. Vigilance and prompt action are essential for mitigating these pests' impact. By employing early detection methods and implementing appropriate management strategies, coffee farmers can protect their crops and ensure a sustainable yield in the face of thrips infestations.To eradicate them use Kincode 10mls/20ltrs of water, always incoporate Integra 3ml/20ltrs of water to increase efficacy of your spray.",

        infestationimage: "images/Thrips in.jpg",
        image: "images/Kingcode-elite-2048x2048.webp"
       
    },
    { 
        problem: "Leaf Miners", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/leafminer.jpg",
        image: "images/PRESENTO-KG-2048x2048.webp"
    },
   
    { 
        problem: "Coffee Berry Month", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Berry month.jpg",
        image: "images/Kingcode-elite-2048x2048.webp"
    },

    { 
        problem: "Coffee berry borers", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Coffee berry borer.jpg",
        image: "images/Lexus-247SC.webp"
    },
    

    { 
        problem: "Mealy Bugs", 
        solution: "Test soil pH and add lime to raise pH levels if soil is too acidic.",
        infestationimage: "images/Mealybugs.jpg",
        image: "images/Lexus-247SC.webp"
    },
    { 
        problem: "White Headed Borers", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Coffee berry borer.jpg",
        image: "images/Kingcode-elite-2048x2048.webp"
    },
    { 
        problem: "Mites", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Mites.jpg",
        image: "images/Bazooka-2048x2048.webp"
    },
    { 
        problem: "Leaf Rust", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Leafrust.jpg",
        image: "images/Green-Cop.webp"
    },
    { 
        problem: "Coffee Berry Disease", 
        solution: "Implement mulching techniques to suppress weed growth and maintain soil moisture.",
        infestationimage: "images/CBD.jpg",
        image: "images/Absolute-star-2048x2048.webp"
    },
    { 
        problem: "Coffee Berry Blight", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/BBC.jpg",
        image: "images/compliant.webp"
    },
    { 
        problem: "Zinc Deficiency", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Zinc.jpg",
        image: "images/zinc-gold.webp"
    }, { 
        problem: "Boron Deficiency", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Zinc.jpg",
        image: "images/Vitabor-Gold.webp"
    },
    { 
        problem: "Phosphorus Deficiency", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Phosphorus.jpg",
        image: "images/Lavender-total-combine-2048x2048.webp"
    },
    { 
        problem: "Nitrogen Deficiency", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Nitrogen.jpg",
        image: "images/Lavender-total-combine-2048x2048.webp"
       
    },
    { 
        problem: "Potassium Deficiency", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Pottasium.jpg",
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
        solution: "Integra® is an organo-silicone based non-ionic wetter and spreader, highly effective in improving spray coverage, adhesion and penetration of chemicals.Use 3mls/20ltrs to increase efficacy of your spray.",
        infestationimage: "images/Stress.jpg",
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
                <p>${solution.solution}</p>;
                <img src="${solution.image}" alt="${solution.problem}">`;
              
            solutionResults.appendChild(solutionDiv);
        });
    }
}
