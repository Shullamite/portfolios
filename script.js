var harm = document.querySelector(".ham");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

harm.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});