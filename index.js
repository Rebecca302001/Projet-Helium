window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let scrollPosition = window.scrollY;

    if (scrollPosition < 100) {
        navbar.style.backgroundColor = "gray";
    } else if (scrollPosition < 300) {
        navbar.style.backgroundColor = "skyblue";
    } else if (scrollPosition < 500) {
    //     navbar.style.backgroundColor = "red";
    // } else {
    //     navbar.style.backgroundColor = "purple";
   }  
});