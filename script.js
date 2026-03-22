// --- Cart State (Simulating a database/local storage) ---
let cartItems = [
    {
        id: 1,
        name: "Classic Butter Croissant",
        desc: "Freshly baked, flaky layers",
        price: 120,
        qty: 2,
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=150&q=80"
    },
    {
        id: 2,
        name: "Rustic Sourdough Loaf",
        desc: "Naturally leavened, 500g",
        price: 180,
        qty: 1,
        image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=150&q=80"
    }
];

let discount = 0;

// --- Initialize Page ---
document.addEventListener("DOMContentLoaded", () => {
    renderCart();
});

// --- Render Cart HTML Dynamically ---
function renderCart() {
    const cartContainer = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    
    // Clear existing HTML
    if(cartContainer) cartContainer.innerHTML = "";
    
    let totalItems = 0;

    if (cartItems.length === 0) {
        if(cartContainer) cartContainer.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 40px;">Your cart is empty. <a href="services.html" style="color:var(--primary-color);">Keep shopping!</a></td></tr>`;
    } else {
        cartItems.forEach(item => {
            totalItems += item.qty;
            const subtotal = item.price * item.qty;
            
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>
                    <div class="item-cell">
                        <img src="${item.image}" alt="${item.name}" class="item-image">
                        <div>
                            <div class="item-name">${item.name}</div>
                            <div class="item-desc">${item.desc}</div>
                        </div>
                    </div>
                </td>
                <td class="price-text">₹${item.price}</td>
                <td>
                    <div class="qty-badge">
                        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                    </div>
                </td>
                <td class="price-text">₹${subtotal}</td>
                <td><i class="fas fa-trash remove-icon" title="Remove Item" onclick="removeItem(${item.id})"></i></td>
            `;
            if(cartContainer) cartContainer.appendChild(row);
        });
    }

    // Update Nav Counter
    if(cartCount) cartCount.innerText = totalItems;
    
    // Recalculate Totals
    calculateTotals();
}

// --- Update Item Quantity ---
function updateQty(id, change) {
    const item = cartItems.find(i => i.id === id);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            removeItem(id); // Remove if qty goes to 0
        } else {
            renderCart();
        }
    }
}

// --- Remove Item ---
function removeItem(id) {
    cartItems = cartItems.filter(item => item.id !== id);
    renderCart();
}

// --- Calculate Prices ---
function calculateTotals() {
    let subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    const totalElem = document.getElementById("total-price");
    const grandTotalElem = document.getElementById("grand-total");

    if(totalElem) totalElem.innerText = subtotal;
    
    // Apply discount if exists
    let grandTotal = subtotal - discount;
    if (grandTotal < 0) grandTotal = 0; // Prevent negative totals
    
    if(grandTotalElem) grandTotalElem.innerText = grandTotal;
}

// --- Apply Promo Code ---
function applyCoupon() {
    const codeInput = document.getElementById("coupon-code").value.trim().toUpperCase();
    
    if (codeInput === "CRUMBS20") {
        discount = 50; // Flat ₹50 off for example
        alert("Success! ₹50 discount applied.");
    } else if (codeInput === "") {
        alert("Please enter a coupon code.");
    } else {
        discount = 0;
        alert("Invalid coupon code.");
    }
    
    calculateTotals();
}

// --- Checkout Modal Logic ---
function checkout() {
    if (cartItems.length === 0) {
        alert("Your cart is empty! Add some delicious bakes first.");
        return;
    }
    
    const modal = document.getElementById("receipt-modal");
    const receiptContent = document.getElementById("receipt-content");
    const receiptTotal = document.getElementById("receipt-total");
    
    // Build Receipt HTML
    let receiptHTML = "";
    cartItems.forEach(item => {
        receiptHTML += `
            <div style="display:flex; justify-content:space-between; margin-bottom: 8px;">
                <span>${item.qty}x ${item.name}</span>
                <span>₹${item.price * item.qty}</span>
            </div>
        `;
    });

    if (discount > 0) {
        receiptHTML += `
            <div style="display:flex; justify-content:space-between; margin-bottom: 8px; color: green;">
                <span>Discount</span>
                <span>-₹${discount}</span>
            </div>
        `;
    }

    if(receiptContent) receiptContent.innerHTML = receiptHTML;
    if(receiptTotal && document.getElementById("grand-total")) receiptTotal.innerText = `Total: ₹${document.getElementById("grand-total").innerText}`;
    
    // Show Modal
    if(modal) modal.style.display = "flex";
}

function closeReceipt() {
    const modal = document.getElementById("receipt-modal");
    if(modal) modal.style.display = "none";
    
    // Clear cart after checkout
    cartItems = [];
    discount = 0;
    renderCart();
}
