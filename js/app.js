const cardContainer = document.getElementById("card-container");

loadData();
// sort data btn

document.getElementById("header-btn-container").innerHTML = `
        <button
          onclick="loadData(true,true)"
          class="btn text-xl sm:btn-sm md:btn-md lg:btn-lg border-0 text-white font-bold bg-primary rounded-2xl"
          >
          Sort By Date
        </button>     
`;
