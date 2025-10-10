// Seleciona os elementos que exibem os valores dos planos
let planValueBusic = document.getElementById("value-plan-basic");
let planValueIntermediario = document.getElementById(
  "value-plan-intermediario"
);
let planValueAvancado = document.getElementById("value-plan-avancado");

// Seleciona os botões para alternar entre plano mensal e anual
let optionPlansAnnual = document.getElementById("option-plans-annual");
let optionPlansMonthly = document.getElementById("option-plans-monthly");

// Seleciona os botões de chamada para ação (WhatsApp) de cada plano
let ctaPlanBasic = document.getElementById("cta-plan-basic");
let ctaPlanIntermediario = document.getElementById("cta-plan-intermediario");
let ctaPlanAvancado = document.getElementById("cta-plan-avancado");

// Altera os valores exibidos dos planos e o estilo dos botões ao selecionar plano mensal
optionPlansMonthly.addEventListener("click", () => {
  planValueBusic.innerHTML = "25";
  planValueIntermediario.innerHTML = "39";
  planValueAvancado.innerHTML = "99";

  optionPlansMonthly.classList.add("active-plans");
  optionPlansAnnual.classList.remove("active-plans");

  optionPlansMonthly.style.color = "#fff";
  optionPlansAnnual.style.color = "#2ed667";
});

// Altera os valores exibidos dos planos e o estilo dos botões ao selecionar plano anual
optionPlansAnnual.addEventListener("click", () => {
  planValueBusic.innerHTML = "9";
  planValueIntermediario.innerHTML = "19";
  planValueAvancado.innerHTML = "38";

  optionPlansAnnual.classList.add("active-plans");
  optionPlansMonthly.classList.remove("active-plans");

  optionPlansAnnual.style.color = "#fff";
  optionPlansMonthly.style.color = "#2ed667";
});

// Abre o WhatsApp em nova aba ao clicar nos botões de cada plano
ctaPlanBasic.addEventListener("click", () => {
  window.open("https://wa.me/+5584986108527", "_blank");
});
ctaPlanIntermediario.addEventListener("click", () => {
  window.open("https://wa.me/+5584986108527", "_blank");
});
ctaPlanAvancado.addEventListener("click", () => {
  window.open("https://wa.me/+5584986108527", "_blank");
});
