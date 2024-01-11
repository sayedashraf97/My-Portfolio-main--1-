// Add your JavaScript code here
window.addEventListener('scroll', function () {
    var header = document.querySelector('.navbar');
    var top = window.scrollY;

    if (top >= 100) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
});
