const shareButton = document.querySelector("#button")
const closeButton = document.querySelector("#button-close")
const shareSection = document.querySelector('.share-section')
const profileSection = document.querySelector('.profile')

shareButton.addEventListener("click", () => {
	shareSection.classList.remove('hidden');
	profileSection.classList.add('hidden');
	shareSection.style.display = 'flex';
});

closeButton.addEventListener("click", () => {
	shareSection.classList.add('hidden');
	profileSection.classList.remove('hidden');
	shareSection.style.display = 'none';
});
