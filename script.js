var i = 0;
var z = 1;
var d = 0;
var y = 0;
var images = [];
var time = 5000;
const arrowScroll = document.getElementsByClassName("arrow");
var container = document.querySelector(".body-container");

images[0] = "farm1.webp";
images[1] = "farm2.jpg";
images[2] = "farm3.jpg";
images[3] = "farm4.jpg";

function scrollDown() {
  container.scrollIntoView(true, { block: "end", behavior: "smooth" });
  console.log("YEAh");
}
function chImg() {
  document.slide2.src = images[y];

  document.slide1.src = images[i];
  if (z < 1) {
    if (y < images.length - 1) {
      y++;
    } else {
      y = 0;
    }
  }
  if (d < 1) {
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
  }
  z++;
  d++;
  if (d > 1) {
    d = 0;
  }
  if (z > 1) {
    z = 0;
  }
  setTimeout("chImg()", time);
}
window.onload = chImg;
