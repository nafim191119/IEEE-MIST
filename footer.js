document.getElementById("topButton").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});