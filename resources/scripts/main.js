const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");
const dropdown = document.getElementById("customDropdown");

const OPTIONS_DATA_URL = "resources/data/data.json";

function createOption(optionData) {
  return `<div class ='dropdown-option' data-value='${optionData.value}'>${optionData.text}</div>`;
}

async function loadDropdownOptions() {
  try {
    const response = await fetch(OPTIONS_DATA_URL);

    if (!response.ok) {
      throw new Error(`Error loading data: ${response.status}`);
    }

    return await response.json();

  } catch {
    console.error("Error loading data from json", error.message);
  }
}

async function createOptions() {
  const optionsData = await loadDropdownOptions();

  for (let option of optionsData) {
    dropdownOptions.insertAdjacentHTML("beforeend", createOption(option));
  }
}

function getClosestDropdownOption(event) {
  return event.target.closest(".dropdown-option");
}

dropdownOptions.addEventListener("click", (event) => {
  event.stopPropagation();
  const option = getClosestDropdownOption(event);

  if (!option) {
    return;
  }

  dropdownButton.textContent = option.textContent;
  dropdown.classList.remove("open");
});

document.addEventListener("click", () => {
  dropdown.classList.remove("open");
  // const allDropdowns = [];

  // allDropdowns.forEach(dropdown => {
  //   dropdown.close();
  // })
});

dropdownButton.addEventListener("click", (event) => {
  event.stopPropagation();

  dropdown.classList.toggle("open");
});

createOptions();
