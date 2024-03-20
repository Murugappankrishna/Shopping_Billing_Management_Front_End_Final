let shop = document.getElementById("shop");
let basket = JSON.parse(localStorage.getItem("data"));
shopItems = JSON.parse(localStorage.getItem("products"));

let generateShop = () => {
  return (shop.innerHTML = shopItems
    .map((x) => {
      return `<div class="item">
      <img
        width="220"
        src=${x.img}
        alt=""
      />
      <div class="details">
        <h3>${x.name}</h3>
        <p class="description">${x.Desc}</p>
        <div class="price-quantity">
          <p class="price">${x.price}$</p>
        </div>
      </div>
    </div>
    `;
    })
    .join(""));
};

generateShop();
