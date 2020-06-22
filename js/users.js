let url = "https://jsonplaceholder.typicode.com/users";

// use fetch to get users from the api
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));

function displayUser(user) {
  const userImage = document.createElement("img");
  const userName = document.createElement("p");
  const userEmail = document.createElement("p");
  const userPhone = document.createElement("p");
  const userCity = document.createElement("p");
}
