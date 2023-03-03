const cardContainer = document.getElementById("card-container");
const loadData = (fistSix = true) => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => {
      if (fistSix) {
        displayData(data.data.tools.splice(0, 6));
      } else {
        cardContainer.textContent = "";
        displayData(data.data.tools);
        document.getElementById("btn-see-more").classList.add("hidden");
      }
    });
};
loadData();
const loadDetails = (id) => {
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
const displayData = (tools) => {
  //   let Tools = tools.splice(0, 6);
  //   Tools = tools;
  tools.forEach((tool) => {
    const { id, name, image, features, published_in } = tool;
    const div = document.createElement("div");
    const ol = document.createElement("ol");
    ol.setAttribute("id", "feature-container");
    for (const feature of features) {
      const li = document.createElement("li");
      li.innerText = feature;
      ol.appendChild(li);
    }
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
                        <label for="my-modal-5" onclick="loadDetails(${id})" class="btn btn-circle hover:text-white text-primary border-0  bg-secondary"><i class="font-extrabold fa-solid fa-arrow-right"></i></label>
                    </div>
                </div>
            </div>
        </div>
      `;
    cardContainer.appendChild(div);
    // document.getElementById("card-body").appendChild(ol);
  });
};

const displayDetails = (detailsData) => {
  const {
    description,
    pricing,
    accuracy,
    features,
    integrations,
    image_link,
    input_output_examples,
  } = detailsData;
  const div = document.createElement("div");
  //   modal start
  div.innerHTML = `
      
      `;
  // modal end
  document.getElementById("modal").appendChild(div);
};
