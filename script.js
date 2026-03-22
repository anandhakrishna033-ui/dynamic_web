/* =========================================
   1. GLOBAL THEME & TYPOGRAPHY
   ========================================= */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;600&display=swap');

:root {
    --bg-cream: #fbf9f6;
    --text-dark: #2c2a29;
    --primary-color: #d35400; /* Warm baked crust color */
    --secondary-color: #f39c12;
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif;
}

body {
    margin: 0;
    font-family: var(--font-body);
    background-color: var(--bg-cream);
    color: var(--text-dark);
    -webkit-font-smoothing: antialiased;
}

/* =========================================
   2. HEADER & NAVIGATION
   ========================================= */
header {
    background: #fff;
    text-align: center;
    padding: 30px 20px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
    border-bottom: 3px solid var(--primary-color);
}

header h1 {
    margin: 0;
    font-family: var(--font-heading);
    font-size: 2.5rem;
    color: var(--text-dark);
    letter-spacing: 2px;
}

header p {
    color: var(--primary-color);
    font-style: italic;
    margin: 5px 0 0 0;
}

.navbar {
    background: var(--text-dark);
    padding: 15px 0;
}

.navbar ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 0;
    padding: 0;
}

.navbar a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: color 0.3s;
}

.navbar a:hover {
    color: var(--secondary-color);
}

/* =========================================
   3. CART PAGE SPECIFIC STYLES
   ========================================= */
.cart-section {
    max-width: 1100px;
    margin: 40px auto;
    padding: 0 20px;
}

.cart-section h2 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    color: var(--text-dark);
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    gap: 15px;
}

.cart-layout {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    align-items: flex-start;
}

.cart-table-container {
    flex: 2;
    min-width: 60%;
    overflow-x: auto;
}

.cart-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;
    margin-top: 0;
}

.cart-table th {
    text-align: left;
    padding: 15px;
    color: #7f8c8d;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.9rem;
    border-bottom: 2px solid #ecf0f1;
}

.cart-table td {
    background: #fff;
    padding: 20px 15px;
    vertical-align: middle;
    box-shadow: 0 5px 15px rgba(0,0,0,0.02);
}

.cart-table td:first-child { border-radius: 12px 0 0 12px; }
.cart-table td:last-child { border-radius: 0 12px 12px 0; }

.item-cell {
    display: flex;
    align-items: center;
    gap: 15px;
}

.item-image {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    object-fit: cover;
    border: 1px solid #eee;
}

.item-name {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 1.2rem;
    color: var(--text-dark);
}

.item-desc {
    font-size: 0.85rem;
    color: #95a5a6;
    margin-top: 5px;
}

/* Quantity Adjusters */
.qty-badge {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    padding: 5px 10px;
    border-radius: 20px;
    width: fit-content;
}

.qty-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-weight: bold;
    color: var(--primary-color);
    font-size: 1.1rem;
}

.qty-btn:hover { color: var(--text-dark); }

.price-text {
    font-weight: bold;
    color: var(--primary-color);
    font-size: 1.1rem;
}

.remove-icon {
    color: #e74c3c;
    cursor: pointer;
    transition: transform 0.3s;
}

.remove-icon:hover {
    color: #c0392b;
    transform: scale(1.1);
}

/* Summary Box */
.summary-box {
    flex: 1;
    min-width: 300px;
    background: #fff;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 1
