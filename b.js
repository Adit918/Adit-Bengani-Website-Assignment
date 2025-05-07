// Generate Menu Items
const cakes = [
  { name: "Red Velvet Cake", desc: "Creamy red sponge with rich cream cheese frosting.", img: "redvelvet.jpeg" },
  { name: "Carrot Cake", desc: "Spiced carrot cake loaded with walnuts and cinnamon.", img: "vegancarrotcake.jpg" },
  { name: "Black Forest Cake", desc: "Decadent chocolate layers with cherries and whipped cream.", img: "blackforest.webp" },
  { name: "Strawberry Shortcake", desc: "Vanilla sponge topped with fresh strawberries and cream.", img: "strawberryshortcake.jpeg" },
  { name: "Lemon Drizzle Cake", desc: "Zesty lemon cake glazed with tangy lemon icing.", img: "lemondrizzle.jpeg" },
  { name: "Vanilla Buttercream Cake", desc: "Classic vanilla cake with a smooth buttercream frosting.", img: "vanillabuttercake.jpeg" },
  { name: "Chocolate Fudge Cake", desc: "Rich chocolate cake layered with creamy fudge icing.", img: "chocolatefudgecake.webp" },
  { name: "Tiramisu Cake", desc: "Coffee-soaked layers with mascarpone cheese frosting.", img: "tiramisu.jpeg" },
  { name: "Coffee Walnut Cake", desc: "Mocha-flavored cake with crunchy walnuts and coffee buttercream.", img: "coffeewalnut.jpeg" },
  { name: "Blueberry Cheesecake", desc: "Creamy cheesecake topped with fresh blueberry compote.", img: "blueberrycheesecake.jpeg" }
];

const menuList = document.getElementById("menu-list");
cakes.forEach(cake => {
  const li = document.createElement("li");
  li.className = "menu-item";
  li.innerHTML = `
    <img src="${cake.img}" alt="${cake.name}" class="menu-img">
    <h4>${cake.name}</h4>
    <p>${cake.desc}</p>
  `;
  menuList.appendChild(li);
});

// Generate Gallery Images
const galleryContainer = document.getElementById("gallery-container");
for (let i = 1; i <= 3; i++) {
  const img = document.createElement("img");
  img.src = `images/gallery${i}.jpg`;
  img.alt = `Gallery Image ${i}`;
  img.className = "gallery-img";
  galleryContainer.appendChild(img);
}
