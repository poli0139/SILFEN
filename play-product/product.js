fetch("https://keammds2-e80b.restdb.io/rest/silfen/6086751f3e2851510003b9d9", {
  method: "GET",
  headers: {
    "x-apikey": "6034067d5ad3610fb5bb6522",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showProduct(response);
  })
  .catch((err) => {
    console.error(err);
  });
function showProduct(product) {
  console.log(product);
  document.querySelector(".product-img").src = `${product.image}`;
  document.querySelector(".name").textContent = product.name;
  document.querySelector(".price span").textContent = product.price;
  document.querySelector(".about-product").textContent = product.description;
}
