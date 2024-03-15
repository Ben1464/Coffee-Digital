// Sample data for pests, diseases, and nutrition
const pestsData = [
    { name: "Coffee Borer Beetle", description: "This beetle damages coffee cherries." },
    // Add more pest data as needed
];

const diseasesData = [
    { name: "Coffee Leaf Rust", description: "A fungal disease that affects coffee plants." },
    // Add more disease data as needed
];

const nutritionData = [
    { name: "Nitrogen", description: "Essential for plant growth and coffee bean development." },
    // Add more nutrition data as needed
];

// Function to display information
function displayInfo(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    data.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${item.name}:</strong> ${item.description}`;
        container.appendChild(div);
    });
}

// Display information on page load
window.onload = function() {
    displayInfo(pestsData, "pest-info");
    displayInfo(diseasesData, "disease-info");
    displayInfo(nutritionData, "nutrition-info");
};
