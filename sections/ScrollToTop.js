// Declar variabila. 
const scrollToTopButton = document.querySelector(".scroll-to-top");


// Creez functia scroll.
scrollToTopButton.addEventListener("click", function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

document.addEventListener("scroll", function(){
    const windowHeight = window.innerHeight/2;
    if(window.scrollY > windowHeight){
        scrollToTopButton.style.visibility = "visible";

} else {
    scrollToTopButton.style.visibility = "hidden";
}
});