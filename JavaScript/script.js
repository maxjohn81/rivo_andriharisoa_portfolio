let textimportant = document.querySelector(".textContent");
let texte = "Passionné par l'informatique";
let texte2 = "Le développement web";
let liste_textes = [...texte];
let i = 0;

setInterval(() => {
  if (i < liste_textes.length) {
    textimportant.textContent += liste_textes[i];
    i += 1;
  } else {
    textimportant.textContent = "";
    i = 0;
  }
}, 250);

// Barre de navigation
let boxiz = document.querySelector(".boxiz");
let nav = document.querySelector(".nav");
let barrs = document.querySelectorAll(".barr");
let barre = document.querySelector(".barre");
boxiz.addEventListener("click", () => {
  nav.classList.toggle("addClass");
  barrs.forEach((bar) => {
    bar.classList.toggle("change");
  });
  barre.classList.toggle("change1");
});

let photo1 = document.querySelector(".photo1");
let photo2 = document.querySelector(".photo2");

let j = 0;
setInterval(() => {
  j += 1;
  if (j == 2) {
    photo1.style.transform = "translate(-265px)";
    photo2.style.transform = "translate(-260px)";
  }

  if (j > 4) {
    setTimeout(() => {
      photo1.style.transform = "translate(0)";
      photo2.style.transform = "translate(-0)";
    }, 500);
  }

  if (j > 4) {
    j = 0;
  }
}, 2000);

let photo3 = document.querySelector(".photo3");
let photo4 = document.querySelector(".photo4");
let k = 0;

setInterval(() => {
  k += 1;
  if (k == 2) {
    photo3.style.transform = "translate(-265px)";
    photo4.style.transform = "translate(-260px)";
  }

  if (k > 4) {
    setTimeout(() => {
      photo3.style.transform = "translate(0)";
      photo4.style.transform = "translate(-0)";
    }, 500);
  }

  if (k > 4) {
    k = 0;
  }
}, 1500);

let navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add("addclass1");
  } else {
    navBar.classList.remove("addclass1");
  }
});

let boxs = document.querySelectorAll(".box");
let skills = document.querySelectorAll(".skills");
let textImportant = document.querySelector(".textImportant");
let etude_superieur = document.querySelector(".etude_superieur");
let hackathon = document.querySelector(".hackathon");
let marquant = document.querySelector(".marquant");
let pp = document.querySelector(".pp");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("addClass2");
      } else {
        entry.target.classList.remove("addClass2");
      }
    });
  },
  { threshold: 0.3 }
);
boxs.forEach((box) => {
  observer.observe(box);
});
skills.forEach((skill) => {
  observer.observe(skill);
});
observer.observe(pp);
observer.observe(textImportant);
observer.observe(etude_superieur);
observer.observe(marquant);
observer.observe(hackathon);

let taches = document.querySelector(".taches");
let epidemie = document.querySelector(".epidemie");
setTimeout(() => {
  observer.observe(epidemie);
}, 50);
setTimeout(() => {
  observer.observe(taches);
}, 550);