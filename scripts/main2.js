const slideGallery = {
  photosInfo,
  index: -1,
  nextPic() {
    this.index < this.photosInfo.length - 1 ? this.index++ : (this.index = 0);
    const displayImg = document.querySelector(".display-img");
    displayImg.innerHTML = `
    <img src='../images/${this.photosInfo[this.index].src}'>
      <div class ="details">
       <p>name: ${this.photosInfo[this.index].firstName} ${
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
  showPic(showCurrent) {
    const displayImg = document.querySelector(".display-img");
    displayImg.innerHTML = `
    <img src='../images/${this.photosInfo[showCurrent].src}'>
      <div class ="details">
       <p>name: ${this.photosInfo[showCurrent].firstName} ${
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
  test() {
    const galleryGrid = document.querySelector(".gallery-grid");

    photosInfo.forEach((element, showCurrent) => {
      const img = document.createElement("img");

      img.src = `./images/${element.src}`;
      galleryGrid.appendChild(img);

      img.addEventListener("click", function() {
        slideGallery.showPic(showCurrent);
        modalBoxOpen();
      });
      console.log(img, showCurrent);
    });
  }
};

slideGallery.test();
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
//Close modal function
const closeModal = function() {
  modal.style.display = "none";
};
const modalBoxOpen = function() {
  modal.style.display = "block";
};
//Event Listeners
nextBtn.addEventListener("click", nextPerson);
closeBtn.addEventListener("click", closeModal);

//Display all images on site load
