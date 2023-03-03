const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayData(data.data.tools));
};
loadData();
const displayData = (tools) => {
  const firstSixTools = tools.splice(0, 6);
  firstSixTools.forEach((tool) => {
    const { id, name, image, features, published_in } = tool;

  });
};
