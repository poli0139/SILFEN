var removeBtn = document.getElementsByClassName("remove");
for (var i = 0; i < removeBtn.length; i++) {
  var button = removeBtn[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
  });
}
function updateTotal() {
  var cartItemContainer = document.getElementsByClassName(".cart-drp")[0];
  var cartItem = cartItemContainer.getElementsByClassName(".cart-info");
  for (var i = 0; i < cartItem.length; i++) {
    var cartItem = cartItem[i];
    var price = cartItem.getElementsByClassName("cart-price")[0];
    var quantity = cartItem.getElementsByClassName("cart-quantity")[0];
    console.log(price, quantity);
  }
}
