console.log("Website Angkatan Santri Aktif");

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", function(){
  menu.classList.toggle("active");
});

// Ambil elemen lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// Ambil semua gambar anggota
const imgs = document.querySelectorAll(".lightbox-img");

imgs.forEach(img => {
  img.addEventListener("click", function(){
    lightbox.style.display = "block";
    lightboxImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

// Tutup lightbox
closeBtn.onclick = function() {
  lightbox.style.display = "none";
}

// Tutup saat klik di luar gambar
lightbox.addEventListener("click", function(e){
  if(e.target === lightbox) lightbox.style.display = "none";
});

// Ambil elemen lightbox galeri
const lightboxGaleri = document.getElementById("lightbox-galeri");
const lightboxGaleriImg = document.getElementById("lightbox-galeri-img");
const captionGaleri = document.getElementById("caption-galeri");
const closeGaleri = lightboxGaleri.getElementsByClassName("close")[0];

// Ambil semua gambar galeri
const galeriImgs = document.querySelectorAll(".gallery-img");

galeriImgs.forEach(img => {
  img.addEventListener("click", function(){
    lightboxGaleri.style.display = "block";
    lightboxGaleriImg.src = this.src;
    captionGaleri.innerHTML = this.alt;
  });
});

// Tutup lightbox
closeGaleri.onclick = function(){
  lightboxGaleri.style.display = "none";
}

// Tutup saat klik di luar gambar
lightboxGaleri.addEventListener("click", function(e){
  if(e.target === lightboxGaleri) lightboxGaleri.style.display = "none";
});