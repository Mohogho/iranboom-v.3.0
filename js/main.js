document.addEventListener("DOMContentLoaded", function () {
    const labels = document.querySelectorAll(".leftPanel label");

    labels.forEach(label => {
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
            document.querySelectorAll(".leftPanel label span").forEach(icon => {
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
// getBtns.forEach(btn =>{
//     btn.addEventListener('click', (e) => {
//
//         const index = btn.id.replace('btn', '');
//
//         const relatedSpan = document.getElementById(`span${index}`);
//         const relatedLabel = document.getElementById(`label${index}`);
//
//         relatedLabel.classList.remove('fa-plus')
//         relatedLabel.classList.add('fa-minus')
//
//         relatedSpan.style.display = 'block'
//     })
// })
 function myFunction() {
      var x = document.getElementById("myLinks");
      if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
        a.style.color = "white" ;
      }
    }
    document.addEventListener("click", function(event) {
      var x = document.getElementById("myLinks");
      var burgerBar = document.querySelector(".burger-bar"); 
      if (x.style.display === "flex" && !burgerBar.contains(event.target)) {
        x.style.display = "none";
      } });
