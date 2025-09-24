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

window.addEventListener("scroll", () => {
  if (scrollY > 5) {
    nav.style.backdropFilter = "5px";
  }
});
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

let photo5 = document.querySelector(".photo5");
let photo6 = document.querySelector(".photo6");
let l = 0;

setInterval(() => {
  l += 1;
  if (l == 2) {
    photo5.style.transform = "translate(-265px)";
    photo6.style.transform = "translate(-260px)";
  }

  if (l > 4) {
    setTimeout(() => {
      photo5.style.transform = "translate(0)";
      photo6.style.transform = "translate(-0)";
    }, 500);
  }

  if (l > 4) {
    l = 0;
  }
}, 1000);

let navBar = document.querySelector(".navbar");

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
  { threshold: 0.5 }
);

observer.observe(competence);
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
let portfolio = document.querySelector(".portfolio");
setTimeout(() => {
  observer.observe(portfolio);
}, 50);

let mode = document.querySelector(".mode");
let soleil = document.querySelector(".soleil");
let lune = document.querySelector(".lune");
let overLay = document.querySelector(".overlay");
let m = 0;
mode.addEventListener("click", () => {
  soleil.classList.toggle("class_soleil");
  lune.classList.toggle("class_lune");
  overLay.classList.toggle("class_overlay");
  m += 1;
  boxs.forEach((box) => {
    box.classList.toggle("class_color");
    if (m % 2 != 0) {
      box.style.background = "#fffff0";
    } else {
      box.style.background = "linear-gradient(to top, #822cbb83, #320a6b80)";
    }
  });

  let li = document.querySelectorAll("li");
  li.forEach((l) => {
    l.style.background = m % 2 != 0 ? "transparent" : "default";
  });

  skills.forEach((skill) => {
    if (m % 2 != 0) {
      skill.style.background = "#fffff0";
      skill.style.color = "#000";
    } else {
      skill.style.background = "linear-gradient(to top, #882dc477, #320a6b7a)";
      skill.style.color = "aliceblue";
    }
  });

  etude_superieur.style.color = m % 2 != 0 ? "#57564F" : "white";
  etude_superieur.style.background = m % 2 != 0 ? "white" : "#7b4ebb50";
  hackathon.style.color = m % 2 != 0 ? "#57564F" : "white";
  hackathon.style.background = m % 2 != 0 ? "white" : "#7b4ebb50";
  marquant.style.color = m % 2 != 0 ? "#57564F" : "white";
  marquant.style.background = m % 2 != 0 ? "white" : "#7b4ebb50";

  epidemie.style.color = m % 2 != 0 ? "#57564F" : "white";
  epidemie.style.background =
    m % 2 != 0 ? "white" : "linear-gradient(to top, #6731ca6e, #320a6b8f)";
  taches.style.color = m % 2 != 0 ? "#57564F" : "white";
  taches.style.background =
    m % 2 != 0 ? "white" : "linear-gradient(to top, #6731ca6e, #320a6b8f)";
  portfolio.style.color = m % 2 != 0 ? "#57564F" : "white";
  portfolio.style.background =
    m % 2 != 0 ? "white" : "linear-gradient(to top, #6731ca6e, #320a6b8f)";

  let aPropos = document.getElementById("aPropos");
  let competences = document.getElementById("competence");
  let softSkills = document.getElementById("soft-skills");
  let parcours = document.getElementById("parcours");
  let projets = document.getElementById("projet");

  aPropos.style.color = m % 2 != 0 ? "#640D5F" : "#9768d8";
  competences.style.color = m % 2 != 0 ? "#640D5F" : "#9768d8";
  softSkills.style.color = m % 2 != 0 ? "#640D5F" : "#9768d8";
  parcours.style.color = m % 2 != 0 ? "#640D5F" : "#9768d8";
  projets.style.color = m % 2 != 0 ? "#640D5F" : "#9768d8";

  pp.style.color = m % 2 != 0 ? "#57564F" : "#9768d8";
  pp.style.background = m % 2 != 0 ? "white" : "#a87ee244";

  let ls = document.querySelectorAll(".l");
  ls.forEach((l) => {
    l.style.color = m % 2 != 0 ? "#57564F" : "#9768d8";
  });

  let fs = document.querySelectorAll(".f");
  fs.forEach((f) => {
    f.style.color = m % 2 != 0 ? "#57564F" : "white";
  });

  let moi = document.querySelector(".moi");
  moi.style.color = m % 2 != 0 ? "#640D5F" : "#9768d8";

  textImportant.style.color = m % 2 != 0 ? "#640D5F" : "#9768d8";
  textimportant.style.color = m % 2 != 0 ? "#640D5F" : "#9768d8";

  let footer = document.querySelector("footer");
  footer.style.background = m % 2 != 0 ? "white" : "#713eb9a1";
  // footer.style.backdropFilter = m % 2 != 0 ? "blur(10px)" : "blur(none)";
  let endContainer = document.querySelector(".end_container");
  endContainer.style.color = m % 2 != 0 ? "#57564F" : "white";

  let me = document.querySelector(".me");
  me.style.color = m % 2 != 0 ? "#640D5F" : "white";

  navBar.style.background = m % 2 != 0 ? "white" : "#320a6b";
  navBar.style.backdropFilter = m % 2 != 0 ? "blur(20px)" : "blur(20px)";
  let rivoA = document.getElementById("rivo_a");
  rivoA.style.color = m % 2 != 0 ? "#57564F" : "#E67514";

  nav.style.background = m % 2 != 0 ? "#fffff0" : "#320a6be0";
  nav.style.backdropFilter = m % 2 != 0 ? "blur(20px)" : "blur(20px)";
  let a = document.querySelectorAll("a");
  a.forEach((link) => {
    link.style.color = m % 2 != 0 ? "#57564F" : "#E67514";
  });

  boxiz.style.color = m % 2 != 0 ? "#57564F" : "#E67514";
  barre.style.color = m % 2 != 0 ? "#57564F" : "#E67514";
  barrs.forEach((bar) => {
    bar.style.color = m % 2 != 0 ? "#57564F" : "#E67514";
  });
  let nm = document.getElementById("nm");
  nm.style.background =
    m % 2 != 0 ? "transparent" : "linear-gradient(to right, #320A6B, #5d27a8)";

  let langageMaitriser = document.querySelectorAll(".langage_maitrise");
  langageMaitriser.forEach((langage) => {
    langage.style.background = m % 2 != 0 ? "#57564F" : "#fff";
  });
  autres.forEach((autre) => {
    autre.style.color = m % 2 != 0 ? "#57564F" : "#fff";
  });

  let totals = document.querySelectorAll(".totals");
  totals.forEach((total) => {
    total.style.background = m % 2 != 0 ? "#fff" : "rgba(78, 24, 148, 0.39)";
  });
  let iconProjet = document.querySelectorAll(".incons_du_projet");
  iconProjet.forEach((icon) => {
    icon.style.background = m % 2 != 0 ? "#ffffff70" : "#320a6bc7";
  });
  let icon_trophe = document.querySelectorAll(".icon_trophe");
  icon_trophe.forEach((icon) => {
    icon.style.color = m % 2 != 0 ? "#57564F" : "#FFBC4C";
  });

  let ttls = document.querySelectorAll(".ttls");
  ttls.forEach((ttl) => {
    ttl.style.transition = "2s";
    ttl.style.color = m % 2 != 0 ? "#640D5F" : "#9768d8";
  });

  let lml = document.getElementById("lml");
  lml.style.color = m % 2 != 0 ? "#640D5F" : "#491b8a";
});

let containerProgress = document.querySelector(".container_progress");
let progress = document.querySelector(".progress");
let span = document.querySelector(".span");
let count = 0;
console.log(count);


// body.style.opacity="0"

setInterval(() => {
  if (count < 100) {
    count += 1;
    progress.style.width = count + "%";
    span.textContent = count + "%";
  } else {
    setTimeout(() => {
      containerProgress.style.display = "none";
    }, 500);
  }
}, 20);

let devWeb = document.querySelector(".developpement_web");
let programmation = document.querySelector(".programmation");
let DB = document.querySelector(".base_de_donne");
let outilDedeveloppement = document.querySelector(".outilDedeveloppement");
let html = document.querySelector(".html");
let css = document.querySelector(".css");
let boostrap = document.querySelector(".boostrap");
let tailwind = document.querySelector(".tailwind");
let javascript = document.querySelector(".javascript");
let python = document.querySelector(".python");
let cPlus = document.querySelector(".cPlus");
let mySql = document.querySelector(".mySql");
let sqLite = document.querySelector(".sqLite");
let mAccess = document.querySelector(".mAccess");
let gitHub = document.querySelector(".gitHub");
let vsCode = document.querySelector(".vsCode");
const obsvervation1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target == devWeb) {
          html.style.width = "98%";
          css.style.width = "98%";
          boostrap.style.width = "50%";
          tailwind.style.width = "75%";
          javascript.style.width = "85%";
        }
      } else {
        html.style.width = "0%";
        css.style.width = "0%";
        boostrap.style.width = "0%";
        tailwind.style.width = "0%";
        javascript.style.width = "0%";
      }
    });
  },
  { threshold: 0.5 }
);

const obsvervation2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target == programmation) {
          python.style.width = "85%";
          cPlus.style.width = "45%";
        }
      } else {
        python.style.width = "0%";
        cPlus.style.width = "0%";
      }
    });
  },
  { threshold: 0.5 }
);

const obsvervation3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target == DB) {
          mySql.style.width = "55%";
          sqLite.style.width = "65%";
          mAccess.style.width = "55%";
        }
      } else {
        mySql.style.width = "0%";
        sqLite.style.width = "0%";
        mAccess.style.width = "0%";
      }
    });
  },
  { threshold: 0.5 }
);
const obsvervation4 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target == outilDedeveloppement) {
          gitHub.style.width = "70%";
          vsCode.style.width = "90%";
        }
      } else {
        gitHub.style.width = "0%";
        vsCode.style.width = "0%";
      }
    });
  },
  { threshold: 0.5 }
);
obsvervation1.observe(devWeb);
obsvervation2.observe(programmation);
obsvervation3.observe(DB);
obsvervation4.observe(outilDedeveloppement);

let autres = document.querySelectorAll(".autre_projet_container");
let obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("addcc");
      } else {
        entry.target.classList.remove("addcc");
      }
    });
  },
  { threshold: 0.7 }
);

autres.forEach((autre) => {
  obs.observe(autre);
});
