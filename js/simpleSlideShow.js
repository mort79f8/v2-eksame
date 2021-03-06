// taken from https://www.youtube.com/watch?v=4YQ4svkETS0
// so credits goes to Traversy Media.

var i = 0; // Start Point
var images = []; // Images Array
var altText = []; // Alt text Array
var time = 3000; // Time Between Switch

// Image List
images[0] = "/v2-eksame/img/1.jpg";
images[1] = "/v2-eksame/img/2.jpg";
images[2] = "/v2-eksame/img/3.jpg";
images[3] = "/v2-eksame/img/4.jpg";
images[4] = "/v2-eksame/img/5.jpg";
images[5] = "/v2-eksame/img/6.jpg";

// Alt text List
altText[0] = "Forsiden af forretningen";
altText[1] = "kop med en slags urte te";
altText[2] = "klippe redskaber";
altText[3] = "vente sofa og sofa bord";
altText[4] = "billed af nogle produkter";
altText[5] = "billed af klippe stationerne";

// Change Image
function changeImg() {
  document.slide.src = images[i];
  document.slide.alt = altText[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;
