window.onscroll = function() {
    scrollFunction()
};

var header = document.getElementById("header");
var sticky = header.offsetTop + 1;
const navList = document.getElementById("nav-list"); 

function scrollFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
    }
}

function toggleMenu() {    
    navList.classList.toggle("show-collide")

}