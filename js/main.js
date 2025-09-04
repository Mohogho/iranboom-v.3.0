document.addEventListener("DOMContentLoaded", function () {
  const labels = document.querySelectorAll(".leftPanel label");

  labels.forEach((label) => {
    label.addEventListener("click", function (event) {
      const inputId = this.getAttribute("for");
      const input = document.getElementById(inputId);

      // جلوگیری از انتخاب دوباره همون input
      if (input.checked) {
        event.preventDefault();
        input.checked = false;
        this.querySelector("span").classList.remove("fa-minus");
        this.querySelector("span").classList.add("fa-plus");
        return;
      }

      // اول همه آیکون‌ها رو به fa-plus برگردون
      document.querySelectorAll(".leftPanel label span").forEach((icon) => {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      });

      // آیکون همین label رو تغییر بده
      const icon = this.querySelector("span");
      if (icon) {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
      }
    });
  });
});




function myFunction() {
  var x = document.getElementById("myLinks");
  x.classList.toggle("active");
}

document.addEventListener("click", function (event) {
  var x = document.getElementById("myLinks");
  var burgerBar = document.querySelector(".burger-bar");

  if (
    x.classList.contains("active") &&
    !burgerBar.contains(event.target) &&
    !x.contains(event.target)
  ) {
    x.classList.remove("active");
  }
});
