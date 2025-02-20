const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");
const dropdown = document.getElementById("customDropdown");

const OPTIONS_DATA_URL = "resources/data/data.json";

let metaData;

function getDropdownOptionCode(value, text) {
  return `<div class ='dropdown-option' data-value = '${value}'>${text}</div>`;
}

async function loadDropdownOptions() {
  try {
    const response = await fetch(OPTIONS_DATA_URL);
    if (!response.ok) {
      throw new Error(`Error loading data: ${response.status}`);
    }

    metaData = await response.json();
    createOptions();
  } catch {
    console.error("Error loading data from json", error.message);
  }
}

function createOptions() {
  console.log(metaData);

  for (let option of metaData) {
    const optionHTML = getDropdownOptionCode(option.value, option.text);
    dropdownOptions.insertAdjacentHTML("beforeend", optionHTML);
  }
}

dropdownButton.addEventListener("click", (event) => {
  event.stopPropagation();

  dropdown.classList.toggle("open");
});

dropdownOptions.addEventListener("click", (event) => {
  event.stopPropagation();
  const option = event.target.closest(".dropdown-option"); //checking click on option

  if (option) {
    const selectedValue = option.dataset.value;
    const selectedText = option.textContent;

    dropdownButton.textContent = selectedText;
    dropdown.classList.remove("open");
  }
});

document.addEventListener("click", () => {
  console.log("CLOSE");

  dropdown.classList.remove("open");
});

loadDropdownOptions();
