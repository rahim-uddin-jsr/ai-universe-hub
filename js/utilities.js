// snipper
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

const sortByDate = (tools) => {
  const ascending = tools.sort((a, b) => {
    const aDate = new Date(a.published_in);
    const bDate = new Date(b.published_in);
    const firstDate = aDate / (1000 * 60 * 60 * 24);
    const secondDate = bDate / (1000 * 60 * 60 * 24);
    //   console.log(date / (1000 * 60 * 60 * 24));
    return secondDate - firstDate;
  });
  displayData(ascending);
};
