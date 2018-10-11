const slideGallery = {
  photosInfo,
  index: -1,
  //show next photo in Modal
  nextPic() {
    this.index < this.photosInfo.length - 1 ? this.index++ : (this.index = 0);
    const displayImg = document.querySelector(".display-img");
    displayImg.innerHTML = `
    <img src='../images/${this.photosInfo[this.index].src}'>
      <div class ="details">
       <p class='fullName'>${this.photosInfo[this.index].firstName} ${
      this.photosInfo[this.index].lastName
    }</p>
       <p>Title: ${this.photosInfo[this.index].title}</p>
       <p>Nationality: ${this.photosInfo[this.index].nationality}</p>
       <p>Skils: ${this.photosInfo[this.index].skills}</p>
       <p>Why software developer: 
       ${this.photosInfo[this.index].whySoftwareDeveloper}</p>
       <p>Vision: ${this.photosInfo[this.index].longTermVision}</p>
       <p>Motivation: ${this.photosInfo[this.index].motivatesMe}</p>
       <p>Favorite Quote: ${this.photosInfo[this.index].favoriteQuote}</p>
       <p>Date joined: ${this.photosInfo[this.index].joinedOn}</p>
      </div>`;
  },
  // Show clicked photos in Modal
  showPic(showCurrent) {
    const displayImg = document.querySelector(".display-img");
    displayImg.innerHTML = `
    <img src='../images/${this.photosInfo[showCurrent].src}'>
      <div class ="details">
       <p class='fullName'>${this.photosInfo[showCurrent].firstName} ${
      this.photosInfo[showCurrent].lastName
    }</p>
       <p>Title: ${this.photosInfo[showCurrent].title}</p>
       <p>Nationality: ${this.photosInfo[showCurrent].nationality}</p>
       <p>Skils: ${this.photosInfo[showCurrent].skills}</p>
       <p>Why software developer: 
       ${this.photosInfo[showCurrent].whySoftwareDeveloper}</p>
       <p>Vision: ${this.photosInfo[showCurrent].longTermVision}</p>
       <p>Motivation: ${this.photosInfo[showCurrent].motivatesMe}</p>
       <p>Favorite Quote: ${this.photosInfo[showCurrent].favoriteQuote}</p>
       <p>Date joined: ${this.photosInfo[showCurrent].joinedOn}</p>
      </div>`;
  },
  // Initialize Grid to display all photos and attach event listener
  // to every photo
  initializeGrid() {
    const galleryGrid = document.querySelector(".gallery-grid");

    photosInfo.forEach((element, showCurrent) => {
      // const img = document.createElement("img");
      const imgDiv = document.createElement("div");
      imgDiv.className = "img-div";
      // img.src = `./images/${element.src}`;
      // galleryGrid.appendChild(img);
      imgDiv.innerHTML = `
        <img src = "./images/${element.src}">
        <div class="slideup">
          <i class="fas fa-eye"></i>
          <span class="slideup-name">
            ${element.firstName}
          </span>
        </div>
        `;
      galleryGrid.appendChild(imgDiv);

      imgDiv.addEventListener("click", function() {
        slideGallery.showPic(showCurrent);
        modalBoxOpen();
      });

      // img.addEventListener("click", function() {
      //   slideGallery.showPic(showCurrent);
      //   modalBoxOpen();
      // }
      // );
      //console.log(img, showCurrent);
    });
  }
};

slideGallery.initializeGrid();
//Get modal
const modal = document.querySelector(".modal");
//Get close button
const closeBtn = document.querySelector(".closeBtn");
//Get next button
const nextBtn = document.querySelector(".nextBtn");

//Get next Image
const nextPerson = function() {
  slideGallery.nextPic();
};
// Open modal box
const modalBoxOpen = function() {
  modal.style.display = "block";
};
//Close modal function
const closeModal = function() {
  modal.style.display = "none";
};
//Close modal on Outside click
const outsideClick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
//Event Listeners
nextBtn.addEventListener("click", nextPerson);
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", outsideClick);
