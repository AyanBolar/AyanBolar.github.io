window.onscroll = function() {
    stickyNav();
};

var nav = document.querySelector('header');
var sticky = nav.offsetTop;

function stickyNav() {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}
