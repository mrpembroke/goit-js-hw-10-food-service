// import hbs from "./templates/menu-items";
// console.log(hbs);
import './css/styles.css'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    body: document.querySelector('body'),
    themeToggle: document.querySelector('#theme-switch-toggle'),
}

refs.themeToggle.addEventListener('change', onThemeColorChange);

function onThemeColorChange(e) {
  // console.log(e.target.checked);
  const themeColor = e.target.checked ? Theme.DARK : Theme.LIGHT;
  localStorage.setItem("theme", themeColor);

  updateThemeColor();
}

function updateThemeColor(e) {
  const currentThemeColor = localStorage.getItem('theme');

  if (currentThemeColor === Theme.DARK) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    refs.themeToggle.checked = true;
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
  }
}

updateThemeColor();

