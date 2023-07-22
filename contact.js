menus = [
    {id : 1, name : "Home", path : "./asm1.html "},
    {id : 2, name : "Features", path : "/features.html "},
    {id : 3, name : "Recept", path : "/recept.html "},
    {id : 4, name : "Dessert", path : "/dessert.html "},
    {id : 5, name : "Contact", path : "./contact.html "},
    ];

var ul = document.querySelector("ul")
for (const item of menus) {
    console.log(item.name)
    ul.innerHTML += `<li><a href="${item.path}">${item.name}</a></li>`
}