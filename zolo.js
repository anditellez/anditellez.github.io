const images = ['https://www.biodiversidad.gob.mx/media/1/biodiversidad/curiosos/Bosque-de-Chapultepec-8.jpg', 'https://www.biodiversidad.gob.mx/media/1/biodiversidad/curiosos/Zoologico2.jpg', 'https://www.biodiversidad.gob.mx/media/1/biodiversidad/curiosos/Zoologico.jpg', 'https://www.biodiversidad.gob.mx/media/1/biodiversidad/curiosos/Lobo_mexicano.jpg', 'https://imgs.search.brave.com/Z7nvsbDCynVcal4NHxAkhuFhHVfL8PUR1biLKyHOkvM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hLnRy/YXZlbC1hc3NldHMu/Y29tL2ZpbmR5b3Vy/cy1waHAvdmlld2Zp/bmRlci9pbWFnZXMv/cmVzNDAvMTY4MDAw/LzE2ODA1MS1NZXhp/Y28tQ2l0eS5qcGc'];
let currentIndex = 0;
function changeImage() {
const img = document.getElementById('fashion-image');
img.classList.remove('fade-in');
img.classList.add('fade-out');
setTimeout(() => {
currentIndex = (currentIndex + 1) % images.length;
img.src = images[currentIndex];
img.classList.remove('fade-out');
img.classList.add('fade-in');
}, 1100);
}
setInterval(changeImage, 7000);