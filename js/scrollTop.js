function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
window.onscroll = function () {
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};