// Styles specific for homepage
import './home.css';

// function to generate content
function generateContent() {
    const dynamicContent = document.querySelector('.dynamic-content');
    
    // Create content for the chef & restaurant information
    const chefSection = document.createElement('section');
    chefSection.className = 'info-section';
    chefSection.innerHTML = `
    <img src="./assets/images/Chef.jpg" alt="Chef image">
    <div class="info">
       <p><strong>Chef Chidi Okonkwo</strong>
       is a master of Igbo culinary traditions with over a decade of experience in crafting authentic dishes that celebrate the rich heritage of Nigeria. 
       Born and raised in Enugu, Chef Chidi grew up learning the secrets of Igbo cooking from family elders, perfecting time-honored recipes like nkwobi and ofe nsala. 
       Now, as the head chef at <em>Lucid Cuisine</em> in the United States, Chef Chidi brings the flavors of home to a global audience, 
       blending traditional methods with contemporary techniques to create dishes that evoke nostalgia while offering a modern twist.
       </p>

       <p>
       <em>Lucid Cuisine </em>is more than a restaurant; it's a celebration of Igbo culture and cuisine. Located in the heart of the United States,
        we are dedicated to introducing diners to the bold and vibrant flavors of Southeastern Nigeria. Our menu features locally-sourced, 
        fresh ingredients paired with authentic spices to recreate the beloved dishes of the Igbo people. From hearty stews to grilled delicacies, 
        every dish tells a story of family, tradition, and togetherness. At <em>Lucid Cuisine, </em>we believe food connects people, and we're proud to bring the taste of Igbo culture to your table.
       </p>
    </div>
    `;
    dynamicContent.appendChild(chefSection);

    // Create an array for the services render
    const services = [
        "Dine-In Experience with Authentic African Cuisine",
        "Catering for Weddings and Special Events",
        "Private Chef Services for Exclusive Gatherings",
        "Online Ordering and Delivery",
        "Customized Meal Prep Plans",
        "Corporate Catering Services",
        "Cooking Classes: Learn African Culinary Techniques",
        "Weekend Buffet with a Taste of Nigeria",
        "Seasonal and Holiday Menu Specials",
        "Food Tasting Events and Pairings"
    ];
    
    const serviceSection = document.createElement('section')
    serviceSection.className = 'services';
    serviceSection.innerHTML = `
    <h2>Service we Render</h2>
    <div class="service-list"></div>
    `;
    dynamicContent.appendChild(serviceSection);

    // Populate Services using divs
    const serviceList = document.querySelector('.service-list');
    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('service-item');
        serviceDiv.textContent = service;
        serviceList.appendChild(serviceDiv);
    });

}
export default generateContent;