// JavaScript for scrolling text
let marqueeContainer = document.getElementById('marqueeContainer');

marqueeContainer.innerHTML += marqueeContainer.innerHTML;

function animateMarquee() {
  marqueeContainer.scrollLeft += 1;
  if (marqueeContainer.scrollLeft % (marqueeContainer.scrollWidth / 2) === 0) {
    setTimeout(() => {
      marqueeContainer.scrollLeft = 0;
    }, 2000); // Adjust the delay as needed
  }
}

setInterval(animateMarquee, 25); // Adjust the interval for smoother scrolling