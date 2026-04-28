function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
  document.getElementById(pageId).classList.add('active-page');

  if (pageId === "gallery") {
    loadImages();
  }
}

function loadImages() {
  const gallery = document.querySelector("#gallery .row");

  gallery.innerHTML = "";

  for (let i = 0; i < 9; i++) {
    gallery.innerHTML += `
      <div class="col-md-4">
        <img src="https://source.unsplash.com/400x300/?food" class="gallery-img">
      </div>
    `;
  }
}
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
  document.getElementById(pageId).classList.add('active-page');
}
