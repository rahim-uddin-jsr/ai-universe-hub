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
  // console.log(features);

  // card 1 start
  // card 1 description
  document.getElementById("card1Description").innerText = description;

  // card 1 prices start
  const pricesContainer = document.getElementById("pricesContainer");
  pricesContainer.textContent = "";
  if (pricing) {
    for (let index = 0; index < pricing.length; index++) {
      const price = pricing[index];
      const pricesCard = document.createElement("div");
      pricesCard.classList.add(
        "bg-white",
        "p-2",
        "flex",
        "justify-center",
        "items-center",
        "font-bold",
        "rounded-lg"
      );

      let textColor = "text-green-500";
      if (index == 1) {
        textColor = "text-orange-500";
      } else if (index == 2) {
        textColor = "text-red-500";
      }
      pricesCard.innerHTML = `
    <h3 class='${textColor}'>${price.price}/ </br>${price.plan}</h3>
    `;

      pricesContainer.appendChild(pricesCard);
    }
  } else {
    const freePricing = [
      {
        plan: "Basic",
        price: "Free of Cost",
      },
      {
        plan: "Pro",
        price: "Free of Cost",
      },
      {
        plan: "Enterprise",
        price: "Free of Cost",
      },
    ];
    for (let index = 0; index < freePricing.length; index++) {
      const price = freePricing[index];
      const pricesCard = document.createElement("div");
      pricesCard.classList.add(
        "bg-white",
        "p-2",
        "flex",
        "justify-center",
        "items-center",
        "font-bold",
        "rounded-lg"
      );

      let textColor = "text-green-500";
      if (index == 1) {
        textColor = "text-orange-500";
      } else if (index == 2) {
        textColor = "text-red-500";
      }
      pricesCard.innerHTML = `
    <h3 class='${textColor}'>${price.price}/ </br>${price.plan}</h3>
    `;

      pricesContainer.appendChild(pricesCard);
    }
  }
  // card 1 prices end
  // feature card
  const detailsFeatureListContainer =
    document.getElementById("feature-card-ul");
  detailsFeatureListContainer.textContent = "";
  for (const key in features) {
    const featureItems = features[key];
    console.log(featureItems);
    const detailsFeatureList = document.createElement("li");
    detailsFeatureList.innerText = featureItems.feature_name;

    detailsFeatureListContainer.appendChild(detailsFeatureList);
  }

  //integrations card
  const detailsIntegrationsListContainer = document.getElementById(
    "integrations-card-ul"
  );
  detailsIntegrationsListContainer.textContent = "";
  if (integrations) {
    integrations.forEach((element) => {
      const detailsIntegrationsList = document.createElement("li");
      detailsIntegrationsList.innerText = element;
      detailsIntegrationsListContainer.appendChild(detailsIntegrationsList);
    });
  } else {
    const detailsIntegrationsList = document.createElement("li");
    detailsIntegrationsList.innerText = "No data found";
    detailsIntegrationsListContainer.appendChild(detailsIntegrationsList);
  }

  // card 1 end
  //modal card 2 start
  const modalCard2 = document.getElementById("modal-card-2");
  modalCard2.textContent = "";
  const image = document.createElement("img");
  image.classList.add("rounded-lg", "mb-6", "relative");
  image.src = image_link[0];
  modalCard2.appendChild(image);

  const accuracyText = document.createElement("p");
  accuracyText.classList.add(
    "bg-red-500",
    "text-white",
    "font-bold",
    "absolute",
    "md:p-3",
    "p-1",
    "rounded",
    "md:text-3xl",
    "text-2xl",
    "top-8",
    "right-8"
  );
  accuracyText.innerText = accuracy.score * 100 + "% accuracy";
  if (accuracy.score) {
    modalCard2.appendChild(accuracyText);
  }
  // example start

  // example question
  const exampleQuestion = document.createElement("h2");
  exampleQuestion.classList.add("text-2xl", "font-bold");
  exampleQuestion.innerText = input_output_examples
    ? input_output_examples[0].input
    : "Can you give any example?";

  // example answer
  const exampleAnswer = document.createElement("p");
  exampleAnswer.classList.add("text-4");
  exampleAnswer.innerText = input_output_examples
    ? input_output_examples[0].output
    : "No! Not Yet! Take a break!!!";
  modalCard2.appendChild(exampleQuestion);
  modalCard2.appendChild(exampleAnswer);

  //modal card 2 end

  const footerIntegrationsCard = document.createElement("div");
  document.getElementById("card1-Footer");
  // modal end
  handleSpinner(false);
};
