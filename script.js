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

// const form = document.getElementById("contactForm");
// const msg = document.getElementById("msg");

// form. addEventListener("submit", function(e) {
//     e.preventDefault();

//     fetch(form.action, {
//         method: "POST",
//         body: new FormData(form),
//         headers: {
//             "Accept": "application/json"
//         }
//     })
//     .then(() => {
//         msg.innerHTML = "✅ Thank you! Your message has been sent.";
//         msg.style.color = "green";
//         form.reset();
//     })
//     .catch(() => {
//         msg.innerHTML = "❌ Message not sent.";
//         msg.style.color = "red";
//     });
// });