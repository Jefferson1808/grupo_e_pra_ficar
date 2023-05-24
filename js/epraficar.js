
const arrayHeight = document.getElementsByClassName('height-nav');
const navHeight = document.getElementsByTagName('nav')[0].clientHeight;

for (let navHeightObj of arrayHeight)
    navHeightObj.style.height = navHeight + 'px';

function abrirMenu() {
    const botoesMenu = document.getElementById('botoesMenu');

    botoesMenu.className = botoesMenu.className.includes('responsivo') ? '' : 'responsivo'
};



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

