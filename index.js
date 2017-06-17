//
// NAVIGATION BAR
//
function myFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}
