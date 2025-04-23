const track = document.getElementById('carouselTrack');

function getItemWidth() {
  return track.offsetWidth / 4;
}

let scrollPos = 0;

function autoSlide() {
  scrollPos += getItemWidth();
  if (scrollPos >= track.scrollWidth - track.clientWidth) {
    scrollPos = 0;
  }
  track.scrollTo({ left: scrollPos, behavior: 'smooth' });
}

function scrollCarousel(dir) {
  scrollPos += dir * getItemWidth();
  if (scrollPos < 0) scrollPos = 0;
  if (scrollPos > track.scrollWidth - track.clientWidth)
    scrollPos = track.scrollWidth - track.clientWidth;
  track.scrollTo({ left: scrollPos, behavior: 'smooth' });
}

setInterval(autoSlide, 1000); // autoplay every 2 seconds