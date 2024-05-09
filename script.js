let lastScrollPosition = window.scrollY;

window.addEventListener("scroll", () => {
    let currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        console.log("Scrolling down");
        document.body.style.backgroundColor="#FA7070";
    } else if (currentScrollPosition < lastScrollPosition) {
        console.log("Scrolling up");
        document.body.style.backgroundColor="#C6EBC5";
    }

    lastScrollPosition = currentScrollPosition;
});
