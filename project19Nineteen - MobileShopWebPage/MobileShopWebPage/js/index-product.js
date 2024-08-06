const imageUrls = [
  { path: "../image/mobile-img-1.jpeg", title: "MobileOne", price: "$800" },
  { path: "../image/mobile-img-2.jpeg", title: "MobileTwo", price: "$750" },
  { path: "../image/mobile-img-3.jpeg", title: "MobileThree", price: "$1000" },
  { path: "../image/mobile-img-4.jpeg", title: "MobileFour", price: "$600" },
  { path: "../image/mobile-img-5.jpeg", title: "MobileFive", price: "$1200" },
  { path: "../image/mobile-img-6.jpeg", title: "MobileSix", price: "$550" },
  { path: "../image/mobile-img-7.jpeg", title: "MobileSeven", price: "$650" },
  { path: "../image/mobile-img-8.jpeg", title: "MobileEight", price: "$800" },
  { path: "../image/mobile-img-9.jpeg", title: "MobileNine", price: "$950" },
  { path: "../image/mobile-img-10.jpeg", title: "MobileTen", price: "$1000" },
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

let currentIndex = 0;
function loadMore() {
  const galleryContainer = document.getElementById("product-container");
  const elementsToAdd = 3;

  for (let i = 0; i < elementsToAdd; i++) {
    const newCol = document.createElement("div");
    newCol.className = "col";

    const imageData = getRandomImage();

    newCol.innerHTML = `
            <div class="card shadow-sm">
            <img src="${imageData.path}" alt="img" class="bd-placeholder-img card-img-top" width="100%" height="225"
            style="object-fit: contain;">
                <h3>${imageData.title}</h3>
                <p>${imageData.price}</p>
            </div>
        `;

    galleryContainer.appendChild(newCol);
    currentIndex++;
  }

  const maxElements = 30;

  if (currentIndex >= maxElements) {
    document.querySelector(".load-button").style.display = "none";
  }
}
