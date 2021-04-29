const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://keammds2-e80b.restdb.io/rest/silfen/" + id, {
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
fetch(
  "https://keammds2-e80b.restdb.io/rest/silfen?q=%7B%7D&filter=unisex&max=3",
  {
    method: "GET",
    headers: {
      "x-apikey": "6034067d5ad3610fb5bb6522",
    },
  }
)
  .then((res) => res.json())
  .then((response) => {
    showFeatured(response);
  })
  .catch((err) => {
    console.error(err);
  });
function showFeatured(products) {
  console.log(products);
  //data.comments
  //grab the template
  const template = document.querySelector(".similar").content;
  //loop through data.comments
  products.forEach((product) => {
    console.log(product);
    const copy = template.cloneNode(true);
    copy.querySelector("img").src = `${product.image}`;
    copy.querySelector(".name").textContent = product.name;
    copy.querySelector(".price span").textContent = product.price;
    copy.querySelector(
      "a"
    ).href = `../play-product/product.html?id=${product._id}`;
    document.querySelector(".suggestions").appendChild(copy);
  });
}
