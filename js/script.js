const instagramPosts = [
  {
    postId: 17,
    src: "img/75244375_192133251941032_3772343913511445825_n.jpg",
    comments: 7,
    likes: 570,
  },
  {
    postId: 23,
    src: "img/76946066_179253166521225_1419696646996098071_n.jpg",
    comments: 6,
    likes: 29,
  },
  {
    postId: 24,
    src: "img/81174287_147349863378682_4411481285333791200_n.jpg",
    comments: 9,
    likes: 47,
  },
  {
    postId: 25,
    src: "img/81708970_859953594461714_8343832212026796715_n.jpg",
    comments: 1,
    likes: 29,
  },
  {
    postId: 29,
    src: "img/89824771_2643731965858459_4986344224456240184_n.jpg",
    comments: 1,
    likes: 43,
  },
  {
    postId: 31,
    src: "img/91077257_103087541278664_7850612540502308415_n.jpg",
    comments: 3,
    likes: 40,
  },
];
const container = document.querySelector(".instagram-images");

// function that create the elements for the instagram panel
function createInstagramDisplay(insta) {
  // create elements
  const instaDiv = document.createElement("div");
  const instaImg = document.createElement("img");
  const instaPanel = document.createElement("div");
  const instaIcons = document.createElement("div");
  const instaEye = document.createElement("div");
  const instaComment = document.createElement("div");
  const instaHeart = document.createElement("div");
  const instaInstagram = document.createElement("div");

  // give the elements a class
  instaDiv.classList.add("instagram-image");
  instaPanel.classList.add("panel");
  instaIcons.classList.add("icons");
  instaEye.classList.add("eye");
  instaComment.classList.add("comment");
  instaHeart.classList.add("heart");
  instaInstagram.classList.add("instagram");

  // add the font awesome icons to the elements
  // and any content that is needed
  instaEye.innerHTML = "<i class='fa fa-eye'></i>";
  instaComment.innerHTML = `<span><i class='fas fa-comment'></i> ${insta.comments}</span>`;
  instaHeart.innerHTML = `<span><i class='fas fa-heart'></i> ${insta.likes}</span>`;
  instaInstagram.innerHTML = "<i class='fab fa-instagram'></i>";

  // add the image src to the src value of the element
  instaImg.src = insta.src;

  // adds the elements to the "container"
  instaIcons.appendChild(instaEye);
  instaIcons.appendChild(instaComment);
  instaIcons.appendChild(instaHeart);
  instaIcons.appendChild(instaInstagram);
  instaPanel.appendChild(instaIcons);
  instaDiv.appendChild(instaImg);
  instaDiv.appendChild(instaPanel);
  container.appendChild(instaDiv);
}

instagramPosts.forEach((post) => {
  createInstagramDisplay(post);
});
