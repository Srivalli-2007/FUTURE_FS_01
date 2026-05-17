// Welcome Message

window.onload = function () {

    alert("Welcome to Nalli Srivalli Portfolio Website");

}

// Contact Form Message

document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message Sent Successfully!");

});