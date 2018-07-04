const toggleButton = document.getElementsByClassName("toggle")[0];
const nav = document.getElementsByClassName("nav")[0];

toggleButton.addEventListener("click", () => {
    if( nav.style.display != "flex" ) {
        nav.style.display = "flex";
    } else if ( nav.style.display == "flex" ) {
        nav.style.display = "none";
    }
});