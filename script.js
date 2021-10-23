let hamburger = document.getElementById("hamburger")


toggleMenu = () =>{
    let nav1 = document.getElementById("navdown1")
    let nav2 = document.getElementById("navdown2")
    console.log('ceau')
    if (nav1.style.display=="none" || nav2.style.display=="none"){
        nav1.style.display="flex";
        nav2.style.display="block";
    }
    else{
        nav1.style.display="none";
        nav2.style.display="none";
    }
}
hamburger.addEventListener('click', toggleMenu)
