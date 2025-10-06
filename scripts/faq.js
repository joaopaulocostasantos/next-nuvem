const questions = document.querySelectorAll(".faq-question");
const arrowFaq = document.querySelectorAll("#arrow-faq");

questions.forEach((q, i) => {
  q.addEventListener("click", (event) => {
    event.preventDefault();
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";

    // Troca o ícone
    arrowFaq[i].classList.toggle("fa-angle-up");
    arrowFaq[i].classList.toggle("fa-angle-down");
  });
});
