fetch("https://keammds2-e80b.restdb.io/rest/silfen", {
  method: "GET",
  headers: {
    "x-apikey": "6034067d5ad3610fb5bb6522",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showProducts(response);
  })
  .catch((err) => {
    console.error(err);
  });
function showProducts(products) {
  console.log(products);
  //data.comments
  //grab the template
  const template = document.querySelector(".single-product-template").content;
  //loop through data.comments
  products.forEach((product) => {
    console.log(product);
    const copy = template.cloneNode(true);
    copy.querySelector("img").src = `${product.image}`;
    copy.querySelector("img").alt = `${product.name}`;
    copy.querySelector("p span").textContent = product.price;
    copy.querySelector("h2").textContent = product.name;
    document.querySelector("section").appendChild(copy);
  });
}
