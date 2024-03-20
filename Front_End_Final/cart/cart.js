let shop = document.getElementById("shop");
let basket = JSON.parse(localStorage.getItem("data")) || [];
shopItems = JSON.parse(localStorage.getItem("products"));
let generateShop = () => {
  return (shop.innerHTML = shopItems
    .map((x) => {
      let search = basket.find((xx) => xx.id === x.id) || [];

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
            <div class="buttons">
              <i onclick="decrement('${x.id}')" class="bi bi-dash-lg"></i>
              <div id="${x.id}" class="quantity">${
        search.item === undefined ? 0 : search.item
      }</div>
              <i onclick="increment('${x.id}')" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>`;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let search = basket.find((x) => x.id === id);
  if (search === undefined) {
    basket.push({ id: id, item: 1 });
  } else {
    search.item += 1;
  }
  localStorage.setItem("data", JSON.stringify(basket)) || [];
  update(id);
};

let decrement = (id) => {
  let search = basket.find((x) => x.id == id);
  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  localStorage.setItem("data", JSON.stringify(basket)) || [];
  update(id);
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  if (search) {
    document.getElementById(id).innerHTML = search.item;
  }
  calculate();
};

let calculate = () => {
  let cartamount = document.getElementById("cartamount");
  cartamount.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculate();
