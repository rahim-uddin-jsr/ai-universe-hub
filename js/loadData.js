const loadData = (displayAll = false) => {
  handleSpinner(true);
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => {
      let tools = data.data.tools;

      if (!displayAll) {
        displayData(tools.splice(0, 6));
      } else {
        cardContainer.textContent = "";
        displayData(tools);
        document.getElementById("btn-see-more").classList.add("hidden");
      }
    });
};
