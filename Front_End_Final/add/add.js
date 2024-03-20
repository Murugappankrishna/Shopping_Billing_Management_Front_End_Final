function addProduct() {
  var productId = document.getElementById("productId").value.trim();
  var productName = document.getElementById("productName").value.trim();
  var productPrice = document.getElementById("productPrice").value.trim();
  var productDescription = document
    .getElementById("productDescription")
    .value.trim();
  var productImage = document.getElementById("productImage").value.trim();

  if (
    !productId ||
    !productName ||
    !productPrice ||
    !productDescription ||
    !productImage
  ) {
    alert("Please fill in all fields.");
    return;
  }
  var newProduct = {
    id: productId,
    name: productName,
    price: parseFloat(productPrice),
    Desc: productDescription,
    img: productImage,
  };
  var existingProducts = JSON.parse(localStorage.getItem("products")) || [];
  existingProducts.push(newProduct);
  localStorage.setItem("products", JSON.stringify(existingProducts));
  alert("Product edited successfully.Redirecting To Products Page");
  document.getElementById("productId").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productDescription").value = "";
  document.getElementById("productImage").value = "";
  document.getElementById("productId").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productDescription").value = "";
  document.getElementById("productImage").value = "";
  location.href = "../products/products.html";
}
