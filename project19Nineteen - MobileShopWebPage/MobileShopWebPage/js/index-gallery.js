const imageUrls = [
    "../image/shop-img3.jpeg",
    "../image/shop-img2.jpeg",
    "../image/shop-img1.jpeg"  
  ];
  
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  }
  
  let currentIndex = 0; 
  function loadMore() {
    const galleryContainer = document.getElementById("gallery-container");
    const elementsToAdd = 3;
  
    for (let i = 0; i < elementsToAdd; i++) {
      const newCol = document.createElement("div");
      newCol.className = "col";
  
      const imageData = getRandomImage()
  
      newCol.innerHTML = `
              <div class="card shadow-sm">
              <img src="${imageData}" alt="img" class="bd-placeholder-img card-img-top" width="100%" height="225"
              style="object-fit: contain;">
              </div>
          `;
  
      galleryContainer.appendChild(newCol);
      currentIndex++;
    }
  
    const maxElements = 18; 
  
    if (currentIndex >= maxElements) {
      document.querySelector(".load-button").style.display = "none";  }
  }
  