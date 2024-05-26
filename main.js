const shareButton = document.querySelector("#button");
const closeButton = document.querySelector("#button-close");
const shareSection = document.querySelector(".share-section");
const profileSection = document.querySelector(".profile");
const triangle = document.querySelector(".triangle");

shareButton.addEventListener("click", () => {
    if (window.innerWidth >= 600) {
        triangle.classList.remove('hidden');
        closeButton.classList.remove('hidden');
        shareSection.style.display = 'flex';
	closeButton.style.display = 'flex';
	triangle.style.display = 'flex';
    } else {
        shareSection.classList.remove('hidden');
        profileSection.classList.add('hidden');
        shareSection.style.display = 'flex';
    }
});

closeButton.addEventListener("click", () => {
    if (window.innerWidth >= 600) {
        shareSection.classList.add('hidden');
        triangle.classList.add('hidden');
        closeButton.classList.add('hidden');
	    shareSection.style.display = 'none';
	    closeButton.style.display = 'none';
	    triangle.style.display = 'none';
    } else {
        shareSection.classList.add('hidden');
        profileSection.classList.remove('hidden');
        shareSection.style.display = 'none';
    }
});
