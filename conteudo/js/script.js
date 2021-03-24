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
}
