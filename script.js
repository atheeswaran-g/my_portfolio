const uname = "Atheeswaran";
const nameContainer = document.querySelector(".name");

uname.split("").forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${index * 0.3}s`;
    nameContainer.appendChild(span);
});


const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

function showImage(src) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = src; // Set the image source
    modal.classList.add("active"); // Show the modal
}

function hideImage() {
    const modal = document.getElementById("imageModal");
    modal.classList.remove("active"); // Hide the modal
}
