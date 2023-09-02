const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");
const navList = document.querySelectorAll (".nav-list li");

const options = {
    threshold: "0.6", //0.6 === 60% of the section should be visible
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
    
    if (e.isIntersecting) {
        // CHANGING NAVBAR STYLE ON SCROLL TO NEXT SECTION
        if (e.target.id !== "base") {
            nav.classList.add("active");
        } else {
            nav.classList.remove("active");
        }

        // SECTION INDICATOR
        navList.forEach(link => {
            // To remover active class from other
            link.classList.remove("active");
            
            if (e.target.id === link.dataset.nav) {
                link.classList.add("active");
            }
        })
    }
    });

}, options);

sections.forEach(section => {
    observer.observe(section);
});