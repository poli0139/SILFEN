//FETCHING BEST SELLERS

fetch(
  "https://keammds2-e80b.restdb.io/rest/silfen?q=%7B%7D&filter=bestsellers&max=3",
  {
    method: "GET",
    headers: {
      "x-apikey": "6034067d5ad3610fb5bb6522",
    },
  }
)
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
  const template = document.querySelector(".best-sell-gallery").content;
  //loop through data.comments
  products.forEach((product) => {
    console.log(product);
    const copy = template.cloneNode(true);
    copy.querySelector("img").src = `${product.image}`;
    document.querySelector(".best-sell-gallery").appendChild(copy);
  });
}
