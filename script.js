let button = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200)
    {
        button.style.display = "block";

     } 
     
     else {button.style.display = "none";
 
    };
};

button.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"


    });
};