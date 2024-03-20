let shopItemsData = [
  {
    id: "1",
    name: "Soap",
    price: 40,
    Desc: "Indulge in the refreshing and invigorating sensation of our Aloe Vera Soap. Crafted with care using natural ingredients, this soap gently cleanses your skin while providing deep hydration and nourishment.",
    img: "https://5.imimg.com/data5/LW/GN/MY-4990337/bath-soap.jpg",
  },
  {
    id: "2",
    name: "Hand Sanitizer",
    price: 25,
    Desc: "Keep your hands clean and protected on the go with our Hand Sanitizer. Formulated with 70% alcohol and moisturizing agents, it effectively kills germs while keeping your skin hydrated and refreshed.",
    img: "https://media.istockphoto.com/id/1213313330/vector/hand-sanitizer-bottle-isolated-with-pump-washing-alcohol-gel-used-against-viruses-bacteria.jpg?s=612x612&w=0&k=20&c=IVSGn0T4rO6PP_C88lvcm5Kw09mP7S_znKokfrF4hFQ=",
  },
  {
    id: "3",
    name: "Shampoo",
    price: 50,
    Desc: "Revitalize your hair with our Moisturizing Shampoo. Enriched with nourishing ingredients like argan oil and keratin, it gently cleanses and hydrates your hair, leaving it soft, shiny, and manageable.",
    img: "https://media6.ppl-media.com//tr:h-750,w-750,c-at_max,dpr-2/static/img/product/133204/matrix-biolage-deep-smoothing-shampoo-200ml-16_2_display_1676783408_bcb11a24.jpg",
  },
  {
    id: "4",
    name: "Biscuit",
    price: 20,
    Desc: "Enjoy a crunchy and delicious snack with our Assorted Biscuits. Made from premium quality ingredients, these biscuits are perfect for tea-time or snacking on the go. Choose from a variety of flavors!",
    img: "https://www.bigbasket.com/media/uploads/p/l/277584_40-cadbury-oreo-creme-biscuit-vanilla-original.jpg",
  },
  {
    id: "5",
    name: "Toothpaste",
    price: 15,
    Desc: "Keep your teeth strong and healthy with our Fluoride Toothpaste. Formulated with fluoride and natural extracts, it effectively fights cavities, freshens breath, and removes plaque for a brighter smile.",
    img: "https://media.istockphoto.com/id/638349734/photo/ttoothpaste-containers-on-white-isolated-background.jpg?s=612x612&w=0&k=20&c=eF1XyMlRaQLI9ETehA3_7En5_3D41GX7FKb8cIWeP8k=",
  },
  {
    id: "6",
    name: "Water Bottle",
    price: 10,
    Desc: "Stay hydrated on the go with our durable and reusable Water Bottle. Made from BPA-free materials, it's perfect for carrying water, juice, or any other beverage. Say goodbye to single-use plastic bottles and embrace eco-friendly hydration!",
    img: "https://www.bigbasket.com/media/uploads/p/xxl/1213255-2_1-bb-home-penta-plastic-pet-water-bottle-white-wide-mouth.jpg",
  },
  {
    id: "7",
    name: "Cereals",
    price: 30,
    Desc: "Start your day right with our Nutritious Cereals. Packed with essential vitamins and minerals, they provide a delicious and wholesome breakfast option. Enjoy with milk or yogurt for a tasty and satisfying meal!",
    img: "https://images.kglobalservices.com/www.kelloggs.co.za/en_za/product/product_1370097/prod_img-1370158_za_06001306000996_2204261808_p_1.png",
  },
  {
    id: "8",
    name: "Power Bank",
    price: 60,
    Desc: "Never run out of battery with our Portable Power Bank. Compact and lightweight, it's perfect for charging your devices on the go. With high-capacity battery and fast charging technology, stay connected wherever you are!",
    img: "https://m.media-amazon.com/images/I/31dxqKcCvSL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "9",
    name: "Cooking Oil",
    price: 45,
    Desc: "Cook your favorite meals with our Premium Cooking Oil. Made from the finest quality ingredients, it adds rich flavor and aroma to your dishes. Perfect for frying, baking, and sautéing!",
    img: "https://media.istockphoto.com/id/164299645/photo/cooking-oil.jpg?s=612x612&w=0&k=20&c=Q59x0PSISXH1UPpAU2BdmOsCx5mhyaV7mpS_r0QT-Os=",
  },
  {
    id: "10",
    name: "Wheat Flour",
    price: 25,
    Desc: "Bake delicious treats with our High-Quality Wheat Flour. Milled from premium-grade wheat, it's perfect for making bread, cakes, and pastries. Elevate your baking game with the finest flour!",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhq8BVLhuVBBZDpkmTfD-gNpjxfZ8ntTKQqSk0KU6FGKLIJmLTQIWwo03IoXmDnjKH0w&usqp=CAU",
  },
  {
    id: "11",
    name: "Disinfectant Spray",
    price: 15,
    Desc: "Keep your home clean and germ-free with our Disinfectant Spray. Formulated with powerful disinfecting agents, it kills 99.9% of bacteria and viruses on hard surfaces. Use it on countertops, doorknobs, and other high-touch areas for peace of mind.",
    img: "https://www.bigbasket.com/media/uploads/p/xxl/40194853_7-savlon-surface-disinfectant-spray-sanitiser-germ-protection.jpg",
  },
];
if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(shopItemsData));
}
