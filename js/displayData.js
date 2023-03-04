const displayData = (tools) => {
  tools.forEach((tool) => {
    const { id, name, image, features, published_in } = tool;
    const div = document.createElement("div");
    div.classList.add("card", "bg-base-100", "shadow-xl");
    // tools card 1 image
    const figure = document.createElement("figure");
    figure.classList.add("p-6");
    figure.innerHTML = `<img src="${image}" alt="Shoes" class="rounded-xl w-[437px] h-[300px]" />`;
    div.appendChild(figure);

    // tools card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "py-0");
    const cardHeader = document.createElement("h2");
    cardHeader.classList.add("card-title", "text-2xl");
    cardHeader.innerText = "Features";
    cardBody.appendChild(cardHeader);

    //  tools feature list
    const ul = document.createElement("ol");
    ul.classList.add("list-disc", "ml-5");
    for (let i = 0; i < features.length; i++) {
      const feature = features[i];
      const li = document.createElement("li");
      li.innerText = feature;
      ul.appendChild(li);
    }
    cardBody.appendChild(ul);
    div.appendChild(cardBody);

    //   tools card 1 footer
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("p-6");
    cardFooter.innerHTML = `
                <hr class='pb-4'>
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
    `;

    div.appendChild(cardFooter);
    cardContainer.appendChild(div);
    // spinner
    handleSpinner(false);
  });
};
