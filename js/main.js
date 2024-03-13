document.addEventListener("DOMContentLoaded", () => {
  transformBtnGroupToHorizontal();
  customizeJumbotronStyles();
  appendAdditionalItemsToListAndActivateFourth();
  reorderCardsCorrectly();
});

function transformBtnGroupToHorizontal() {
  const btnGroupVertical = document.querySelector(".btn-group-vertical");
  if (btnGroupVertical) {
    btnGroupVertical.classList.replace("btn-group-vertical", "btn-group");
    btnGroupVertical.style.overflow = "hidden";

    btnGroupVertical.querySelectorAll(".btn").forEach((button, index, buttons) => {
      button.style.marginRight = index < buttons.length - 1 ? "5px" : "0";
      button.style.borderRadius = "5px";
      button.style.fontWeight = "400";
    });
  }
}

function customizeJumbotronStyles() {
  const jumbotron = document.querySelector(".jumbotron");
  if (jumbotron) {
    jumbotron.classList.add("bg-secondary", "text-white", "text-right");
    const btnLearnMore = jumbotron.querySelector(".btn-primary");
    btnLearnMore?.classList.replace("btn-primary", "btn-success");
  }
}

function appendAdditionalItemsToListAndActivateFourth() {
  const listGroup = document.querySelector(".list-group");
  if (listGroup) {
    ["Quarto item", "Quinto item"].forEach(itemText => {
      const newItem = document.createElement("li");
      newItem.className = 'list-group-item';
      newItem.textContent = itemText;
      listGroup.appendChild(newItem);
    });

    const items = listGroup.querySelectorAll(".list-group-item");
    items.forEach((item, index) => item.classList.remove("active"));
    if (items.length >= 4) {
      items[3].classList.add("active");
    }
  }
}

function reorderCardsCorrectly() {
  const cardsHeader = Array.from(document.querySelectorAll("h3.display-6")).find(header => header.textContent.trim() === "Cards");

  if (!cardsHeader) return;
  const cardsRow = cardsHeader.closest(".row");

  const order = ["Natureza", "Animais", "Pessoas", "Tecnologia"];
  const cards = Array.from(cardsRow.querySelectorAll(".col-lg-3"));

  order.forEach(title => {
    const card = cards.find(card => card.querySelector(".card-title").textContent.trim() === title);
    if (card) {
      cardsRow.appendChild(card);

      if (title === "Animais") {
        const btn = card.querySelector(".btn");
        if (btn) {
          btn.classList.replace("btn-primary", "btn-success");
        }
      }
    }
  });
}