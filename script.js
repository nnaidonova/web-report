document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".tab-section");
  const links = document.querySelectorAll("aside .oval-button");

  // сховати всі секції
  sections.forEach((sec) => sec.classList.remove("active"));

  // показати першу секцію за замовчуванням
  if (sections.length > 0) {
    sections[0].classList.add("active");
  }

  // зробити першу кнопку активною
  links.forEach((link) => link.classList.remove("primary"));
  if (links.length > 0) {
    links[0].classList.add("primary");
  }

  // обробка кліків по меню зліва
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        e.preventDefault();

        // сховати всі вкладки
        sections.forEach((sec) => sec.classList.remove("active"));

        // показати вибрану
        targetSection.classList.add("active");

        // підсвітити активну кнопку
        links.forEach((l) => l.classList.remove("primary"));
        this.classList.add("primary");
      }
    });
  });
});
