// Global variables
let categories = [];
let trees = [];
let cart = [];
let currentCategory = null;

// DOM elements
const categoryList = document.getElementById('category-list');
const treesContainer = document.getElementById('plants-container');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.querySelector('.cart-total .price');

// Sample tree data to match the design
const sampleTrees = [
    {
        id: 1,
        name: "Mango Tree",
        description: " A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
        category: "Fruit Trees",
        price: 500,
        image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop&crop=center"
    },
    {
        id: 2,
        name: "Mango Tree",
        description: "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
        category: "Fruit Trees",
        price: 500,
        image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop&crop=center"
    },
    {
        id: 3,
        name: "Mango Tree",
        description: "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
        category: "Fruit Trees",
        price: 500,
        image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop&crop=center"
    },
    {
        id: 4,
        name: "Mango Tree",
        description: "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
        category: "Fruit Trees",
        price: 500,
        image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop&crop=center"
    },
    {
        id: 5,
        name: "Mango Tree",
        description: "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
        category: "Fruit Trees",
        price: 500,
        image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop&crop=center"
    },
    {
        id: 6,
        name: "Mango Tree",
        description: " A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green",
        category: "Fruit Trees",
        price: 500,
        image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop&crop=center"
    }
];

// Sample categories
const sampleCategories = [
    { category_id: 1, category_name: "All Trees" },
    { category_id: 2, category_name: "Fruit Trees" },
    { category_id: 3, category_name: "Flowering Trees" },
    { category_id: 4, category_name: "Shade Trees" },
    { category_id: 5, category_name: "Medicinal Trees" },
    { category_id: 6, category_name: "Timber Trees" },
    { category_id: 7, category_name: "Evergreen Trees" },
    { category_id: 8, category_name: "Ornamental Plants" },
    { category_id: 9, category_name: "Bamboo" },
    { category_id: 10, category_name: "Climbers" },
    { category_id: 11, category_name: "Aquatic Plants" }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadSampleData();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Plant a Tree button in navbar
    document.querySelector('.nav-button').addEventListener('click', () => {
        document.getElementById('plant').scrollIntoView();
    });
}

// Load sample data
function loadSampleData() {
    categories = sampleCategories;
    trees = sampleTrees;
    displayCategories();
    displayTrees(trees);
}

// Display categories
function displayCategories() {
    categoryList.innerHTML = '';
    const allBtn = document.createElement('button');
    allBtn.textContent = 'All Trees';
    allBtn.addEventListener('click', () => {
        displayTrees(trees);
        setActiveButton(allBtn);
    });
    allBtn.classList.add('active');
    categoryList.appendChild(allBtn);

    categories.slice(1).forEach(category => {
        const btn = document.createElement('button');
        btn.textContent = category.category_name;
        btn.addEventListener('click', () => {
            const filteredTrees = category.category_name === 'All Trees'
                ? trees
                : trees.filter(tree => tree.category === category.category_name);
            displayTrees(filteredTrees);
            setActiveButton(btn);
        });
        categoryList.appendChild(btn);
    });
}

// Display trees
function displayTrees(trees) {
    treesContainer.innerHTML = '';
    trees.forEach(tree => {
        const treeCard = createTreeCard(tree);
        treesContainer.appendChild(treeCard);
    });
}

// Create tree card
function createTreeCard(tree) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <div class="card-image">
            <img src="${tree.image}" alt="${tree.name}" onerror="this.src='https://via.placeholder.com/400x300?text=Tree+Image'">
        </div>
        <div class="card-content">
            <h3>${tree.name}</h3>
            <p>${tree.description}</p>
            <div class="card-info">
                <button class="fruit-tree-btn">Fruit Tree</button>
                <span class="price">৳${tree.price.toLocaleString()}</span>
            </div>
            <button class="add-to-cart" onclick="addToCart(${tree.id})">Add to Cart</button>
        </div>
    `;

    return card;
}

// Add to cart
function addToCart(treeId) {
    const tree = trees.find(t => t.id === treeId);
    if (tree) {
        const existingItem = cart.find(item => item.id === treeId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...tree,
                quantity: 1
            });
        }

        updateCartDisplay();
        showNotification(`${tree.name} added to cart!`);
    }
}

// Update cart display
function updateCartDisplay() {
    cartItems.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="color: #6c757d; font-style: italic; text-align: center; margin: 2rem 0;">Your cart is empty</p>';
    } else {
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <span class="item-name">${item.name}</span>
                    <span class="item-quantity">৳${item.price} x ${item.quantity}</span>
                </div>
                <div class="cart-actions">
                    <button class="delete-item" onclick="removeFromCart(${index})">×</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    cartTotal.textContent = `৳${total.toLocaleString()}`;
}

// Remove from cart
function removeFromCart(index) {
    const item = cart[index];
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    updateCartDisplay();
    showNotification('Item removed from cart');
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #28a745;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Set active button
function setActiveButton(activeBtn) {
    document.querySelectorAll('#category-list button').forEach(btn => {
        btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
}
