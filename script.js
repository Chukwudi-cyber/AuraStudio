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

form.addEventListerner("submit", function (e) {
    e.preventDefault();

    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
            Accept: "application/json"
        }
    })
    .then (function () {
        alert("✅ Thank you! Your message has been sent successfully.");

    })
    .catch(function () {
        alert("❌ Message not sent.");
    });
});