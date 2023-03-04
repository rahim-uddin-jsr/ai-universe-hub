const spinner = document.getElementById("spinner");
const modalSpinner = document.getElementById("modal-spinner");

function handleSpinner(loading) {
  if (loading) {
    spinner.classList.remove("hidden") ||
      modalSpinner.classList.remove("hidden");
  } else {
    spinner.classList.add("hidden") || modalSpinner.classList.add("hidden");
  }
}
