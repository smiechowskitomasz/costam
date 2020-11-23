$(document).ready(function() {
  $('a[href^="#"]').on("click", function(event) {
    var target = $($(this).attr("href"));

    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
    }
  });
});

window.sr = ScrollReveal();

sr.reveal(".animation", {
  duration: 2000
});

var imageUrls = [
  'url("img/img-0020.jpg")',
  'url("img/img-0024-17.jpg")',
  'url("img/img-0025-15.jpg")',
  'url("img/img-0027-19.jpg")',

  'url("img/img-0029-13.jpg")',
  'url("img/img-0064_7.jpg")',
  'url("img/img-0068-10.jpg")',
  'url("img/img-0080-11.jpg")',

  'url("img/img-0133_3.jpg")',
  'url("img/img-0134_3.jpg")',
  'url("img/img-0139-7.jpg")',
  'url("img/img-0168.jpg")',
  'url("img/img-0171.jpg")',
  'url("img/img-0172.jpg")',
  'url("img/img-0191.jpg")',
  'url("img/img-0198.jpg")'
];

var imageNumber = imageUrls.length;

function imagePop(id) {
  document.getElementById("imagePopId").style.display = "flex";
  document.getElementsByTagName("body")[0].style.overflowY = "hidden";

  var imageName = document.getElementById(id + "-image").style.backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  document.getElementsByClassName("imageContain")[0].style.animation =
    "he 800ms forwards";

  document.getElementsByClassName("imageContain")[0].style.backgroundImage =
    imageUrls[imageIndex];
}

function imageChange(id) {
  var imageName = document.getElementById(id).style.backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  if (imageIndex >= imageNumber - 1) imageIndex = 0;
  else imageIndex++;

  document.getElementById(id).style.backgroundImage = imageUrls[imageIndex];
}

function imageMoveLeft() {
  var imageName = document.getElementById("imageContainId").style
    .backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  if (imageIndex <= 0) imageIndex = imageNumber - 1;
  else imageIndex--;

  document.getElementById("imageContainId").style.backgroundImage =
    imageUrls[imageIndex];
}

function imageMoveRight() {
  var imageName = document.getElementById("imageContainId").style
    .backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  if (imageIndex >= imageNumber - 1) imageIndex = 0;
  else imageIndex++;

  document.getElementById("imageContainId").style.backgroundImage =
    imageUrls[imageIndex];
}

function imagePopNone() {
  document.getElementsByClassName("imagePop")[0].style.display = "none";
  document.getElementsByTagName("body")[0].style.overflowY = "scroll";
}
