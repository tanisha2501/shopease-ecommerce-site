// Fetch products and display them
fetch("http://localhost:5000/api/products")
  .then(res => res.json())
  .then(products => {
    const list = document.getElementById("product-list");
    list.innerHTML = products.map(p => `
      <div class="product">
        <img src="${p.image}" alt="${p.name}" onclick="viewProduct('${p._id}')">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart('${p._id}', '${p.name}', ${p.price}, '${p.image}')">Add to Cart</button>
      </div>
    `).join("");
  })
  .catch(err => console.error(err));

function addToCart(id, name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price, image, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

// Navigate to product details page
function viewProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

