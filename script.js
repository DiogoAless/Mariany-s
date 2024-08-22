document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const sectionID = this.getAttribute("href").substring(1);
            const section = document.getElementById(sectionID);
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });
});
