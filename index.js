const add = document.querySelector(".add");
add.addEventListener("click", inputPopUp);
const input = document.querySelector(".input");
input.style.display = "none";
function inputPopUp() {
  const input = document.querySelector(".input");
  input.style.display = "block";
  input.style.textalign = "center";
  // input.style.backgroundColor="blue"
  input.addEventListener("input", () => {
    console.log(input.value);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        alert(`Welcome ${input.value}`);
      }
      input.style.display = "none";
    });
  });
}
const darkmode = document.querySelector(".darkmode");
const lightmode = document.querySelector(".lightmode");

darkmode.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  darkmode.style.display = "none";
  setTimeout(() => {
    lightmode.style.display = "inline-block";
  }, 100);
});

lightmode.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  lightmode.style.display = "inline-block";
  setTimeout(() => {
    lightmode.style.display = "none";
    darkmode.style.display = "inline-block";
  }, 2000);
});

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
