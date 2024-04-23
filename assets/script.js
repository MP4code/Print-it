const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span> en boutique et en ligne </span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let index = 0;
const dots = document.querySelector(".dots");

const generateDots = () => {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    if (i === index) {
      dot.className = "dot dot_selected";
    } else {
      dot.className = "dot";
    }
    dots.appendChild(dot);
  }
};

generateDots();

const arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", function () {
  index = index + 1;
  if (index > slides.length - 1) {
    index = 0;
  }
  const image = document.querySelector("#banner img");
  const texte = document.querySelector("#banner p");
  texte.innerHTML = slides[index].tagLine;
  image.src = "./assets/images/slideshow/" + slides[index].image;
  dots.innerHTML = "";
  generateDots();
});

const arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", function () {
  index = index - 1;
  if (index < 0) {
    index = slides.length - 1;
  }

  const image = document.querySelector("#banner img");
  const texte = document.querySelector("#banner p");
  texte.innerHTML = slides[index].tagLine;
  image.src = "./assets/images/slideshow/" + slides[index].image;
  dots.innerHTML = "";
  generateDots();
});
