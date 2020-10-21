$(document).on("click", ".nav-item, .nav-link, .dropdown-item", (e) => {
  $(".nav-item, .nav-link, .dropdown-item").removeClass("active");
  e.target.classList.add("active");
});
