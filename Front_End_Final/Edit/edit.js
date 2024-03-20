function editProduct() {
  var productId = document.getElementById("productId").value.trim();
  var editOption = document.getElementById("editOption").value;
  var editValue = document.getElementById("editValue").value.trim();
  if (!productId || !editValue) {
    alert("Please fill in all fields.");
    return;
  }
  var products = JSON.parse(localStorage.getItem("products"));
  var productIndex = products.findIndex((product) => product.id === productId);
  if (productIndex === -1) {
    alert("Product not found.");
    return;
  }
  products[productIndex][editOption] = editValue;
  localStorage.setItem("products", JSON.stringify(products));

  alert("Product edited successfully.Redirecting To Products Page");

  location.href = "../products/products.html";
}
