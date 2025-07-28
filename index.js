const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModal = () =>
{
    console.log('Modal is open');
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

const closeModal = () => {
    console.log("modal is closed");
    modal.classList.remove("active");
    modal.classList.remove("overlayactive");

};

