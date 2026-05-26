// Welcome Message

window.onload = function () {

    alert("Welcome to Nalli Srivalli Portfolio Website");

}

// Initialize EmailJS

emailjs.init("p1lC_jItNs8Ic4CGW");

// Contact Form

document
.getElementById("contact-form")

.addEventListener("submit", function(event){

    event.preventDefault();

    emailjs.sendForm(
        "service_3orgxp2",
        "template_kqhg7pl",
        this
    )

    .then(function(){

        alert("Message Sent Successfully!");

    },

    function(error){

        alert("Failed to Send Message");

        console.log(error);

    });

});
