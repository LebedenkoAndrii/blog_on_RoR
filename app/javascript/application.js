// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import * as bootstrap from "bootstrap";

document.addEventListener("turbo:load", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    button.addEventListener("click", (event) => {
      event.stopPropagation();

      document.querySelectorAll(".dropdown-menu.show").forEach((openMenu) => {
        if (openMenu !== menu) {
          openMenu.classList.remove("show");
        }
      });

      menu.classList.toggle("show");
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
      menu.classList.remove("show");
    });
  });
});
