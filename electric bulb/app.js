function start() {
    var bulb = document.querySelector(".image");
    bulb.setAttribute("src", "./assests/download.png");
    bulb.classList.add("on");     // Add the "on" class
    bulb.classList.remove("off");  // Remove the "off" class, if present
   var c = document.querySelector(".main")
   c.setAttribute("id", "change")
}

function off() {
    var bulb = document.querySelector(".image");
    bulb.setAttribute("src", "./assests/download (1).png");
    bulb.classList.add("off");     // Add the "off" class
    bulb.classList.remove("on");   // Remove the "on" class, if present
}

