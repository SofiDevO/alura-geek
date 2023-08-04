
const d = document;
const button = d.querySelector('.toogleBtn');
const iconoMoon = d.querySelector(".fa-moon")
let darkModeState = false;

// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");

// Toggles the "dark-mode" class
export default function toggleDarkMode(state) {
  document.documentElement.classList.toggle("dark-mode", state);
  darkModeState = state;  
  if(document.documentElement.classList.contains("dark-mode")){
        iconoMoon.classList.remove("fa-moon");
        iconoMoon.classList.add("fa-sun");
      }else{
        iconoMoon.classList.remove("fa-sun");
        iconoMoon.classList.add("fa-moon");
      } 
    }
  
// Sets localStorage state
function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}

// Initial setting
toggleDarkMode(useDark.matches);
toggleDarkMode(localStorage.getItem("dark-mode") == "true");

// Listen for changes in the OS settings.
// Note: the arrow function shorthand works only in modern browsers,
// for older browsers define the function using the function keyword.
useDark.addListener((evt) => toggleDarkMode(evt.matches));

// Toggles the "dark-mode" class on click and sets localStorage state
button.addEventListener("click",() => {
    darkModeState = !darkModeState;

  toggleDarkMode(darkModeState);
  setDarkModeLocalStorage(darkModeState);
});




    