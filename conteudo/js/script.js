window.addEventListener("scroll",function(){
    var header  =   document.querySelector("header");
    header.classList.toggle("stiky",window.scrollY)
})
var ul_menu_mobile_open = document.getElementById("ul-menu-mobile");
function menu_open(){
    ul_menu_mobile_open.style.right = 0;
}
function menu_close(){
    ul_menu_mobile_open.style.right = "-200vh";
};
const menu_items = document.querySelectorAll('#menu-desktop a[href^="#"');
menu_items.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})
function scrollToIdOnClick(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    window.scroll({
        top: to - 130,
        behavior: "smooth",
    });
}