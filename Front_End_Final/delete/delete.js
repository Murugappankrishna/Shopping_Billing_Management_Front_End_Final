function deleteProduct() {
  var productId = document.getElementById("productId").value.trim();
  if (productId === "") {
    alert("Please enter a product ID.");
    return;
  }

  var shopItemsData = JSON.parse(localStorage.getItem("products"));

  var index = shopItemsData.findIndex((item) => item.id === productId);
  if (index === -1) {
    alert("Product not found.");
    return;
  }

  shopItemsData.splice(index, 1);

  localStorage.setItem("products", JSON.stringify(shopItemsData));

  alert("Product deleted successfully.Redirecting To Products Page");
  location.href = "../products/products.html";
}
