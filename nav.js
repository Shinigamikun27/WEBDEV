window.addEventListener("scroll", function() {
    const navigation = document.querySelector(".navigation");
    if (window.scrollY > 1) {
        navigation.classList.add("transparent");
    } else {
        navigation.classList.remove("transparent");
    }
});
