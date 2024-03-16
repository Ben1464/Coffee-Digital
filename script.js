// Sample solutions data including image URLs
const solutions = [
    { 
        problem: "Pest infestation", 
        solution: "Use organic pest control methods such as neem oil or introduce natural predators like ladybugs.",
        image: "images/pest_control.jpg"
    },
    { 
        problem: "Soil acidity", 
        solution: "Test soil pH and add lime to raise pH levels if soil is too acidic.",
        image: "images/soil_amendment.jpg"
    },
    { 
        problem: "Weed management", 
        solution: "Implement mulching techniques to suppress weed growth and maintain soil moisture.",
        image: "images/mulching.jpg"
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
                <img src="${solution.image}" alt="${solution.problem}">
                <p>${solution.solution}</p>`;
            solutionResults.appendChild(solutionDiv);
        });
    }
}
