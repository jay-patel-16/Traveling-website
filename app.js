const preloder  = document.querySelector("[data-preloder]");

window.addEventListener("load",() => {
    preloder.classList.add("remove");
});

// add event on multiple element 
const addEventOnElements =function(elements, eventType, callback){
    for(let i=0, len = elements.length; i < len; i++){
         elements[i].addEventListener(eventType,callback);

    }
}
// navbar toggler for mobile

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelector("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers ,"click", toggleNav);

// header

const header = document.querySelector("[data-header]");
window.addEventListener("scroll",function(){
  header.classList[window.scrolly > 100 ?"add": "remove"]("active");
});
