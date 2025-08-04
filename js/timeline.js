let timelineHTML = " ";
let imagesHTML = "";

content.forEach((activity) => {
  timelineHTML += `<div class="container ${activity.orientation}">
        <div class="content">
          <h2>${activity.title}</h2>
          <div class="image-container">`;

  activity.images.forEach((image) => {
    timelineHTML += `<img src="images/${image}.jpg"
    class="image"
    id="${image}"
    onclick=" 
    var modal = document.getElementById('img-modal'); 
    var modalImg = document.getElementById('img01');
    modal.style.display = 'block';
    modalImg.src = this.src;"
    >`;
  });

  timelineHTML += `</div>
        </div>
      </div>`;
});

document.querySelector(".timeline").innerHTML = timelineHTML;

var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("img-modal");
span.onclick = function () {
  modal.style.display = "none";
};
