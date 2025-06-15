document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Produk A", price: 10000 },
    { id: 2, name: "Produk B", price: 20000 },
  ];
  const productList = document.getElementById("product-list");
  const themeToggle = document.getElementById("toggle-theme");

  function renderProducts() {
    productList.innerHTML = "";
    products.forEach(p => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <h3>${p.name}</h3>
        <p>Rp${p.price.toLocaleString()}</p>
        <button onclick="addToCart(${p.id})">Tambah</button>
      `;
      productList.appendChild(div);
    });
  }

  window.addToCart = function(id) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Ditambahkan ke keranjang!");
  };

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  renderProducts();
});
