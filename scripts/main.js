console.log(photosInfo);

const previousEventHandler = function() {
  const image = document.querySelector(".overlay-image");
  let imageId = image.getAttribute("key");
  let newImageId = Number(imageId) - 1;
  image.src = `./images/${photosInfo[newImageId].src}`;
  image.setAttribute("key", newImageId);
};

const nextEventHandler = function() {
  const image = document.querySelector(".overlay-image");
  let imageId = image.getAttribute("key");
  let newImageId = Number(imageId) + 1;
  image.src = `./images/${photosInfo[newImageId].src}`;
  image.setAttribute("key", newImageId);
};

const lightBox = function(id, imgUrl) {
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  const main = document.querySelector(".main-display");
  main.appendChild(overlay);

  const photoId = Number(id);
  const image = document.createElement("img");
  image.className = "overlay-image";
  image.src = `./images/${photosInfo[photoId].src}`;
  image.setAttribute("key", id);

  const prev = document.createElement("button");
  const next = document.createElement("button");

  prev.addEventListener("click", previousEventHandler);
  next.addEventListener("click", nextEventHandler);

  prev.innerHTML = "Prev";
  next.innerHTML = "Next";

  overlay.appendChild(prev);
  overlay.appendChild(next);
  overlay.appendChild(image);

  console.log(id);
  console.log(imgUrl);
};

const modalBox = function() {
  photosInfo.forEach((element, index) => {
    const image = document.createElement("div");
    const modalContent = document.querySelector(".modal-content");
    modalContent.appendChild(image);
    image.innerHTML = `<img src = '../images/${element.src}'> 
    <div> <p>firstname: ${element.firstName}</p>
    
    
    </div>`;
  });
};
modalBox();

const mosaic = document.querySelector(".gallery-grid");
photosInfo.forEach((element, index) => {
  mosaic.innerHTML += `<div class="photo" id="${index}" onclick="lightBox(${index},'./images/${
    element.src
  }')"><img src="./images/${element.src}" alt="${element.alt}"></div>`;
});

const selectedPhoto = document.querySelector(".photo");

// document.addEventListener("click", function() {
//   const overlay = document.createElement("div");
//   overlay.className = "overlay";
//   const main = document.querySelector(".main-display");
//   main.appendChild(overlay);
// });
