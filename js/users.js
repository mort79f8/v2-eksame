const url = "https://jsonplaceholder.typicode.com/users";
const container = document.querySelector(".container");

// use fetch to get users from the api
fetch(url)
  .then((res) => res.json())
  .then((data) => displayUser(data))
  .catch((err) => console.log(err));

// function to loop through the users
function displayUser(data) {
  data.forEach((user) => {
    createUserDisplay(user);
  });
}

// function to create the display used by displayUser() takes a user as an argument.
function createUserDisplay(user) {
  //creates the different elements
  const userArticle = document.createElement("article");
  const userImage = document.createElement("img");
  const userName = document.createElement("p");
  const userEmail = document.createElement("p");
  const userPhone = document.createElement("p");
  const userCity = document.createElement("p");
  const hr = document.createElement("hr");

  // create the content for the different elements
  const userNameText = "<span>Brugernavn: </span>" + user.name;
  const userEmailText = "<span>Email: </span>" + user.email;
  const userPhoneText = "<span>Telefon: </span>" + user.phone;
  const userCityText = "<span>By: </span>" + user.address.city;

  // add the content to the elements
  userImage.src = "./img/randomUser.svg";
  userName.innerHTML = userNameText;
  userEmail.innerHTML = userEmailText;
  userPhone.innerHTML = userPhoneText;
  userCity.innerHTML = userCityText;

  userArticle.appendChild(userImage);
  userArticle.appendChild(hr);
  userArticle.appendChild(userName);
  userArticle.appendChild(userEmail);
  userArticle.appendChild(userPhone);
  userArticle.appendChild(userCity);
  container.appendChild(userArticle);
}
