// The code is purposely disorganized to comply with the activity's requirements

// Sorting alphabetically
const races = ["Human", "Dwarf", "Elf", "Orc", "Malit", "Ramadriin"];
const raceDropdown = document.getElementById("race-dropdown");

races.sort(function (raceA, raceB) {
  if (raceA < raceB) return -1;

  if (raceA > raceB) return 1;

  return 0;
});

races.forEach((race) => {
  const option = document.createElement("option");
  option.text = race;
  option.value = race.toLowerCase();
  raceDropdown.add(option);
});

// Dynamically creating options for a dropdown using a function that calls another function
function createOptions(start, end, selectDropdown, select) {
  let selectedDropdown = selectDropdown(select);

  for (let i = start; i <= end; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectedDropdown.appendChild(option);
  }
}

function selectDropdownById(selectId) {
  return document.getElementById(selectId);
}
createOptions(1, 20, selectDropdownById, "character-dropdown");
createOptions(1, 10, selectDropdownById, "level-dropdown");

// Making a mistake, aka, using an ID to select an element
let secondLevelDropdown = thisIsTotallyNotRecommended;
for (let i = 1; i <= 10; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  secondLevelDropdown.appendChild(option);
}
