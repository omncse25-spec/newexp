function loadImages() {
  const galleryContainer = document.querySelector("#gallery .row");

  galleryContainer.innerHTML = "";

  for (let i = 0; i < 9; i++) {
    galleryContainer.innerHTML += `
      <div class="col-md-4">
        <img src="https://source.unsplash.com/400x300/?food" class="gallery-img">
      </div>
    `;
  }
}
