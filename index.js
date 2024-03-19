function darkMode() {
  const navbar_input = document.getElementById("navbar-input");
  navbar_input.classList.toggle("dark-mode");

  const search_icon = document.querySelector(".search__icon");
  search_icon.classList.toggle("dark-mode");

  const dinnerContent = document.getElementById("dinner-content");
  dinnerContent.classList.toggle("dark-mode");

  const heading = dinnerContent.querySelector("h3");
  heading.classList.toggle("text-white");

  const darkMoonIcon = document.getElementById("dark-m");
  const isDarkMode = darkMoonIcon.classList.contains("fa-sun");

  if (isDarkMode) {
    darkMoonIcon.classList.remove("fa-sun");
    darkMoonIcon.classList.add("fa-moon");
  } else {
    darkMoonIcon.classList.remove("fa-moon");
    darkMoonIcon.classList.add("fa-sun");
  }
}


