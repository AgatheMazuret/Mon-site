import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const presentation = document.getElementById("presentation");
  const presentationSection = document.getElementsByClassName(
    "presentation-section"
  )[0];
  const projets = document.getElementById("projets");
  const projetsSection = document.getElementsByClassName("projets-section")[0];
  const cv = document.getElementById("cv");
  const cvSection = document.getElementsByClassName("cv-section")[0];

  // Faire en sorte que quand je clique sur Présentation Mes projets et Mon CV se mettent en display none
  presentation.addEventListener("click", () => {
    projetsSection.style.display = "none";
    cvSection.style.display = "none";
    presentationSection.style.display = "flex";
  });

  projets.addEventListener("click", () => {
    presentationSection.style.display = "none";
    cvSection.style.display = "none";
    projetsSection.style.display = "flex";
  });

  cv.addEventListener("click", () => {
    presentationSection.style.display = "none";
    projetsSection.style.display = "none";
    cvSection.style.display = "flex";
  });
});
