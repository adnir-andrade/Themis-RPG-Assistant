// Code is unorganized purposefully to comply with activities requirements
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
