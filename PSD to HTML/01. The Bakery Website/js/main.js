


window.onscroll = scrollFunc;

function scrollFunc(nav) {
    console.log(window.scrollY);
    if (window.scrollY > 10) {
        console.log("da")

        document.getElementById("navbar").style.backgroundColor = "rgba(100, 100, 100, 0.980)";
        
    } else {
        document.getElementById("navbar").style.backgroundColor = "hsla(0, 0%, 27%, 0.5)";
    }
}

