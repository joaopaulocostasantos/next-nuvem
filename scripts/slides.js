const slideData = [
  {
    src: "assets/videos/video-slide-01.mp4",
    user: "Leandro Cardoso",
    ocupation: "Header de Marketing",
  },
  {
    src: "assets/videos/video-slide-02.mp4",
    user: "Marcos Alves",
    ocupation: "SEO e Publicitário",
  },
  {
    src: "assets/videos/video-slide-03.mp4",
    user: "Eduarda Melo",
    ocupation: "Web Designer",
  },
  {
    src: "assets/videos/video-slide-04.mp4",
    user: "Roberto Alves",
    ocupation: "Analista de Dados",
  },
  {
    src: "assets/videos/video-slide-05.mp4",
    user: "Silva Moura",
    ocupation: "Jornalista",
  },
  {
    src: "assets/videos/video-slide-06.mp4",
    user: "Danilo Santos",
    ocupation: "Designer UX/UI",
  },
];

let index = 0;
const slidesPerView = 3;

function renderSlides() {
  const slidesContainer = document.querySelector(".slides");
  slidesContainer.innerHTML = "";
  for (let i = index; i < index + slidesPerView && i < slideData.length; i++) {
    slidesContainer.innerHTML += `
      <div class="slider">
        <video src="${slideData[i].src}" controls></video>
        <div class="slider-desc">
          <h4>${slideData[i].user}</h4>
          <div class="slider-line"></div>
          <p>${slideData[i].ocupation}</p>
        </div>
      </div>
    `;
  }
}

document.querySelector(".arrow-right-next").onclick = () => {
  if (index + slidesPerView < slideData.length) {
    index += slidesPerView;
    renderSlides();
  }
};

document.querySelector(".arrow-left-prev").onclick = () => {
  if (index - slidesPerView >= 0) {
    index -= slidesPerView;
    renderSlides();
  }
};

// Inicializa
renderSlides();
