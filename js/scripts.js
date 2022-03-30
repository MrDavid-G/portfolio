const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");

const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changelanguage = async (language) => {
  const requestJson = await fetch(`./language/${language}.json`);
  const texts = await requestJson.json();

  for (const textsToChange of textsToChange) {
    const section = textsToChange.dataset.section;
    const value = textsToChange.dataset.value;

    textsToChange.innerHTML = texts[section][value];
  }
};

flagsElement.addEventListener("click", (e) => {
  changelanguage(e.target.parentElement.dataset.language);
});

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (toggleIcon.src.includes("moon.svg")) {
    toggleIcon.src = "assets/icons/sun.svg";
    toggleText.textContent = "Light Mode";
  } else {
    toggleIcon.src = "assets/icons/moon.svg";
    toggleText.textContent = "Dark Mode";
  }
});

toggleColors.addEventListener("click", (e) => {
  rootStyles.setProperty("--primary-color", e.target.dataset.color);
});
