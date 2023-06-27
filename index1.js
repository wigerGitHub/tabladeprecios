const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
})

// .nav-toggle es una clase que apunta a un "button"  
// .nav-Menu junto a .nav-menu_visible es una clase que apunta a un "ul"  
