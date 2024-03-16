// Sample solutions data including image URLs
const solutions = [
    { 
        problem: "Thrips", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Thrips in.jpg",
        image: "images/Kingcode-elite-2048x2048.webp"
       
    },
    { 
        problem: "Leaf miners", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/leafminer.jpg",
        image: "images/PRESENTO-KG-2048x2048.webp"
    },
   
    { 
        problem: "Coffee berry month", 
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
        problem: "Mealy bugs", 
        solution: "Test soil pH and add lime to raise pH levels if soil is too acidic.",
        infestationimage: "images/Mealybugs.jpg",
        image: "images/Lexus-247SC.webp"
    },
    { 
        problem: "White headed borers", 
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
        problem: "Leaf rust", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Leafrust.jpg",
        image: "images/Green-Cop.webp"
    },
    { 
        problem: "Coffee berry disease", 
        solution: "Implement mulching techniques to suppress weed growth and maintain soil moisture.",
        infestationimage: "images/CBD.jpg",
        image: "images/Absolute-star-2048x2048.webp"
    },
    { 
        problem: "Coffee berry blight", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/BBC.jpg.jpg",
        image: "images/compliant.webp"
    },
    { 
        problem: "Zinc deficiency", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Zinc.jpg",
        image: "images/zinc-gold.webp"
    }, { 
        problem: "Boron deficiency", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Zinc.jpg",
        image: "images/Vitabor-Gold.webp"
    },
    { 
        problem: "Phosphorus deficiency", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Phosphorus.jpg",
        image: "images/Lavender-total-combine-2048x2048.webp"
    },
    { 
        problem: "Nitrogen deficiency", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Nitrogen.jpg",
        image: "images/Lavender-total-combine-2048x2048.webp"
       
    },
    { 
        problem: "Potassium deficiency", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        infestationimage: "images/Pottasium.jpg",
        image: "images/Goldchance-Multi-Super-K-1.webp"
    },
    { 
        problem: "Soil acidity", 
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
                <img src="${solution.image}" alt="${solution.problem}">
                <p>${solution.solution}</p>`;
            solutionResults.appendChild(solutionDiv);
        });
    }
}
