//Import menu style
import './menu.css';
// function to navigate to homepage
function navigateToHome() {
    window.location.href = './home.html';
}

// Function to generate the Menu list
function generateMenuList() {
    const menuContent = document.getElementById('menuList')
    
    // Creating an array for menu items with images
    const menu = [
        {
            section: 'Appetizer',
            items: [
                {
                    name: 'Chin Chin',
                    description: 'Crispy fried dough, a popular Nigerian snack.',
                    price: '$5',
                    image: './assets/images/chin-chin.jpg'
                },
                {
                    name: 'Puff Puff',
                    description: 'Soft, fried dough balls often enjoyed as a snack or dessert.',
                    price: '$6',
                    image: './assets/images/puff-puff.jpg'
                },
                {
                    name: 'Suya',
                    description: 'Grilled skewers of spiced beef or chicken, served with onions and tomatoes.',
                    price: '$10',
                    image: './assets/images/suya.jpg'
                }
            ]
        },
        {
            section: 'Main Dish',
            items: [
               {
                 name: 'Jollof Rice',
                 description: 'A flavorful Nigerian rice dish cooked in a rich tomato sauce, seasoned with herbs and spices.',
                 price: '$15',
                 image: './assets/images/jollof-rice.jpg'
               },
               {
                name: 'Ofada Rice',
                description: 'A Nigerian rice variety, served with a rich and spicy stew.',
                price: '$16',
                image: './assets/images/ofada-rice.jpg'
               },
               {
                name: 'Egusi soup',
                description: 'A hearty melon seed soup, often served with pounded yam or rice.',
                price: '$18',
                image: './assets/images/egusi-soup.jpg'
               }
            ]
        },
        {
            section: 'Side Dish',
            items: [
                {
                    name: 'Plantain',
                    description: 'Fried sweet plantains, a perfect side to complement any main dish.',
                    price: '$5',
                    image: './assets/images/plantain.jpg'
                },
                {
                    name: 'Pepper Soup',
                    description: 'A spicy, aromatic soup made with meats or fish, and flavored with local herbs.',
                    price: '$12',
                    image: './assets/images/pepper-soup.jpg'
                }
            ]
        },
        {
            section: 'Drinks',
            items: [
                {
                    name: 'Chapman',
                    description: 'A popular Nigerian cocktail made with soft drink, grenadine, and bitters.',
                    price: '$12',
                    image: './assets/images/chapman.jpg'
                },
                {
                    name: 'Zobo',
                    description: 'A sweet and tangy drink made from dried hibiscus petals, popular in West Africa.',
                    price: '$5',
                    image:'./assets/images/zobo.jpg'
                }
            ]
        }
    ];
    // loop through each section in the menu array
    menu.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('menu-section');

        // Add section title
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section.section;
        sectionDiv.appendChild(sectionTitle);

        // loop through menu items
        section.items.forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.classList.add('menu-item');

            menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-img">
            <h3>${item.name}</h3>
            <P>${item.description}</P>
            <span class="price">${item.price}</span>
            `;
            sectionDiv.appendChild(menuItemDiv);
        });
        menuContent.appendChild(sectionDiv);
    });
};  

// Export  function to entrypoint
export {navigateToHome, generateMenuList}