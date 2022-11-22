(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    sendModalBtn: document.querySelector("[data-modal-send]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal, toggleModall);
  refs.closeModalBtn.addEventListener("click", toggleModal, toggleModall);
  refs.sendModalBtn.addEventListener("click", toggleModal, toggleModall);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function toggleModall() {
    refs.modal.classList.toggle("modal-window--hidden");
  }
})();