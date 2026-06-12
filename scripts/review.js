// Product Array Data Source
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Footer Dates Logic (Shared across pages)
    const currentYearSpan = document.getElementById("current-year");
    const lastModifiedSpan = document.getElementById("last-modified");
    
    if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();
    if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;

    // 2. Form Page Logic: Populate Select Dropdown Options
    const productSelect = document.getElementById("product-name");
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            // Map array 'id' to the internal option value, 'name' to the user text display
            option.value = product.id;
            option.textContent = product.name.toLowerCase(); // Consistent styling
            productSelect.appendChild(option);
        });
    }

    // 3. Confirmation Page Logic: Track and Update LocalStorage Counter
    const counterDisplay = document.getElementById("review-counter");
    if (counterDisplay) {
        // Retrieve existing score or default to zero
        let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
        
        // Step up the counter by one upon successful arrival
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);
        
        // Update the user interface element
        counterDisplay.textContent = reviewCount;
    }
});
