const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayData(data.data.tools));
};
loadData();
const cardContainer = document.getElementById("card-container");
const displayData = (tools) => {
  const firstSixTools = tools.splice(0, 6);
  firstSixTools.forEach((tool) => {
    const { id, name, image, features, published_in } = tool;
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card  bg-base-100 shadow-xl">
            <figure class="p-4">
                <img src="${image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Features</h2>
                <ul>
                
                </ul>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
      `;
    console.log(5);
    cardContainer.appendChild(div);
  });
};
