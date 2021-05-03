const form = document.querySelector("#sign-up");
//event listener
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const payload = {
    email: form.elements.email.value,
  };
  document.querySelector("button[type=submit]").disabled = true;
  console.log(payload);
  fetch("https://keammds2-e80b.restdb.io/rest/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": "6034067d5ad3610fb5bb6522",
    },
    body: JSON.stringify(payload),
  }).then((response) => {
    console.log(response);
    form.elements.email.value = "";
    document.querySelector("button[type=submit]").disabled = false;
    document.querySelector(".popuptext").classList.add("animate");
  });
}
