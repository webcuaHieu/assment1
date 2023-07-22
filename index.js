var menus = [
    { id: 1, name: "Home", path: "/ " },
    { id: 2, name: "Features", path: "/features.html " },
    { id: 3, name: "Recept", path: "/recept.html " },
    { id: 4, name: "Dessert", path: "/dessert.html " },
    { id: 5, name: "Contact", path: "/contact.html " },
];
var menu = document.querySelector(".header")
for (const itemheader of menus) {
    menu.innerHTML += `
    <ul><li><a href="${itemheader.path}">${itemheader.name}</a></li></ul>
    `
}
var foods = [
    { id: 1, image: "img/image 17.jpg ", name: "Delish Lemon Bars for Any Occasion", date: "JAN 12, 2020", value: "View Detail" },
    { id: 1, image: "img/image 18.jpg ", name: "Tortilla & Ricotta Cheese Salad", date: "JAN 13, 2020", value: "View Detail" },
    { id: 1, image: "img/image 19.jpg ", name: "Summer Breakfast for Healthy Mornings", date: "JAN 14, 2020", value: "View Detail" }
];

var foodtext = document.querySelector(".body_img")
for (const itemfood of foods) {
    foodtext.innerHTML += `
    <div><img src="${itemfood.image}"><p>${itemfood.name}</p><p>${itemfood.date}</p><button>${itemfood.value}</button></div>
    `
}

var fooer = [
    { id: 1, image: "img/image 21.png", name: "© 2023 All Rights Reserved" }
]
var footers = document.querySelector(".footer-img")
for (const itemfooter of fooer) {
    itemfooter.innerHTML += `
    <img src="${itemfooter.image}"><p>${itemfooter.name}</p>
    `
}
