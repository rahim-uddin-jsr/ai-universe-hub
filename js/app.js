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
    const ol = document.createElement("ol");
    ol.setAttribute("id", "feature-container");
    for (const feature of features) {
      const li = document.createElement("li");
      li.innerText = feature;
      ol.appendChild(li);
    }
    // console.log(ol);
    div.innerHTML = `
        <div class="card  bg-base-100 shadow-xl">
            <figure class="p-6">
                <img src="${image}" alt="Shoes" class="rounded-xl w-[437px] h-[300px]" />
            </figure>
            <div id='card-body' class="card-body">
                <h2 class="card-title text-2xl">Features</h2>
                
                <hr class='my-6'>
                <div class="flex justify-between items-center">
                    <div >
                        <h2 class="card-title text-2xl mb-4">${name}</h2>
                        <p>
                        <i class="fa-solid fa-calendar-days"></i> ${published_in}
                        </p>
                    </div>
                    <div class="card-actions justify-end text-end">
                        <button class="btn hover:text-white text-primary border-0 hover: rounded-full  bg-secondary"><i class="font-extrabold fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
      `;
    cardContainer.appendChild(div);
    // document.getElementById("card-body").appendChild(ol);
  });
};
