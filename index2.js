function openLightbox(src, caption) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox-caption").innerText = caption;
  document.getElementById("lightbox").classList.remove("hidden");
  document.getElementById("lightbox").classList.add("flex");
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("flex");
  document.getElementById("lightbox").classList.add("hidden");
}

