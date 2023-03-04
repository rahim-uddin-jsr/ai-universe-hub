const loadDetails = (id) => {
  handleSpinner(true);
  let newId;
  if (id <= 9) {
    newId = "0" + id;
  } else {
    newId = id;
  }
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${newId}`)
    .then((res) => res.json())
    .then((details) => displayDetails(details.data));
};
