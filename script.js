if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js');
}

let hamburger = document.getElementById("hamburger");
let nav1 = document.getElementById("navdown1");
let nav2 = document.getElementById("navdown2");
toggleMenu = () => {
    

    if (nav1.style.display != "flex" || nav2.style.display != "block") {
        nav1.style.display = "flex";
        nav2.style.display = "block";
    } else {
        nav1.style.display = "none";
        nav2.style.display = "none";
    }
};
closeMenu = () => {
    console.log("1")
    var w = window.innerWidth;
    if (w >= 768) {
        nav1.style.display = "none";
        nav2.style.display = "none";
    }
};
hamburger.addEventListener("click", toggleMenu);
window.addEventListener("resize", closeMenu);
