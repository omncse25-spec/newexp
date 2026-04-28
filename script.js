// PAGE SWITCH FUNCTION
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
  document.getElementById(pageId).classList.add('active-page');

  // Jab gallery open hogi tab images load hongi
  if (pageId === "gallery") {
    loadImages();
  }
}

// GALLERY API FUNCTION
async function loadImages() {
  const galleryContainer = document.querySelector("#gallery .row");

  galleryContainer.innerHTML = "Loading...";

  try {
    const response = await fetch(
      "https://api.unsplash.com/photos/random?count=9&client_id=YOUR_ACCESS_KEY"
    );

    const data = await response.json();

    galleryContainer.innerHTML = "";

    data.forEach(img => {
      galleryContainer.innerHTML += `
        <div class="col-md-4">
          <img src="${img.urls.regular}" class="gallery-img">
        </div>
      `;
    });

  } catch (error) {
    galleryContainer.innerHTML = "Failed to load images 😢";
    console.log(error);
  }
}
