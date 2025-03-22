// Show "Motive 2" button when "Click to View Motive" is clicked
document.getElementById("viewMotiveBtn").addEventListener("click", function() {
    document.getElementById("motive2Box").classList.remove("hidden");
});

// Redirect to motive.html when "Motive 2" is clicked
document.getElementById("motive2Btn").addEventListener("click", function() {
    window.location.href = "motive.html";
});

// Surprise Section Toggle
document.getElementById("revealBtn").addEventListener("click", function() {
    document.getElementById("hiddenMessage").classList.toggle("hidden");
});
document.addEventListener("DOMContentLoaded", function () {
    const showImagesBtn = document.getElementById("showImagesBtn");
    const imageContainer = document.getElementById("imageContainer");

    showImagesBtn.addEventListener("click", function () {
        // Toggle the visibility of images
        imageContainer.classList.toggle("hidden");
    });
});
