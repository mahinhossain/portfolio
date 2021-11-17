// const axios = require("axios");
document.getElementById("mybtn").addEventListener("click", async (event) => {
  //   import axios from "axios";
  event.preventDefault();
  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  //   const serverUrl = "http://localhost:5000";
  const serverUrl = "https://messforportfolio.herokuapp.com/post";

  const data = {
    username: username,
    email: email,
    subject: subject,
    message: message,
  };

  console.log("username :>> ", data);

  await axios
    .post(serverUrl + "/post", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});
// document.getElementById("mybtn").addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("username :>> ", username);
//   axios
//     .post(serverUrl, {
//       username,
//       email,
//       subject,
//       message,
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });

// fetch("http://example.com/movies.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
