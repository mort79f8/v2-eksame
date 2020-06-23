const url = "https://jsonplaceholder.typicode.com/users";
const container = document.querySelector(".container");

// use fetch to get users from the api
fetch(url)
  .then((res) => res.json())
  .then((data) => displayUser(data))
  .catch((err) => console.log(err));

function displayUser(data) {
  data.forEach((user) => {
    createUserDisplay(user);
  });
}

function createUserDisplay(user) {
  const userArticle = document.createElement("article");
  const userImage = document.createElement("img");
  const userName = document.createElement("p");
  const userEmail = document.createElement("p");
  const userPhone = document.createElement("p");
  const userCity = document.createElement("p");
  const userNameText = document.createTextNode(user.name);
  const userEmailText = document.createTextNode(user.email);
  const userPhoneText = document.createTextNode(user.phone);
  const userCityText = document.createTextNode(user.address.city);
  userImage.src = "./img/randomUser.svg";
  userName.appendChild(userNameText);
  userEmail.appendChild(userEmailText);
  userPhone.appendChild(userPhoneText);
  userCity.appendChild(userCityText);
  userArticle.appendChild(userImage);
  userArticle.appendChild(userName);
  userArticle.appendChild(userEmail);
  userArticle.appendChild(userPhone);
  userArticle.appendChild(userCity);
  container.appendChild(userArticle);
}
