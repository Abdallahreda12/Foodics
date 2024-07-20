// start rating sec
let ratings = [
  (user1 = {
    comment:
      "Foodics restaurant RMS - cloud POS system is just perfect. It comes with more features than any other system. It looks beautiful, easy-to-use, with great customer support.",
    logo: "Ribs.jpg",
    name: "Homoud Al Homoudi",
    firm: "7Ribs",
  }),
  (user2 = {
    comment:
      "We have tried many systems before but they did not fully meet our needs. Since adopting Foodics, we have found solutions for cost, inventory, and analytics.",
    logo: "Koobs-Cafe-150x150-1.jpg",
    name: "Hussein Al Mousawi",
    firm: "Koobs-Cafe",
  }),
  (user3 = {
    comment:
      "Very easy to use! It connects all activity centers/ branches in one platform. We appreciate the efforts of the Foodics technical support's quick to respond.",
    logo: "mezaj-1.jpg",
    name: "Ahmad Omran",
    firm: "mezaj",
  }),
  (user4 = {
    comment:
      "We extend our warmest gratitude to the Foodics company for their sincerity, professionalism, and technical support.",
    logo: "Chefs.jpg",
    name: "Youssef AlMokhtar AlJabri",
    firm: "Chef's Restaurant",
  }),
  (user5 = {
    comment:
      "Foodics cloud POS has everything we need. A good user interface and friendly navigation make it easy for people to course through it.",
    logo: "wqw-01.jpg",
    name: "Anas Galmouss",
    firm: "Food Gate Co.",
  }),
  (user6 = {
    comment:
      "Foodics is excellent! It allows us to monitor and manage our branches efficiently. The after-sales service is fast and the team is responsive.",
    logo: "shams-80x80-1.jpg",
    name: "Muhammad Abu Shawarib",
    firm: "Shams",
  }),
];

function craateTextBox(userData) {
  let commendSec = document.querySelector(".commends");

  let commendBox = document.createElement("div");
  commendBox.setAttribute("class", "commend-box");

  let userCommend = document.createElement("p");
  userCommend.innerText = userData.comment;

  let ownerShip = document.createElement("div");
  ownerShip.setAttribute("class", "ownerShip");

  let logo = document.createElement("img");
  logo.src = `/images/HomePage/${userData.logo}`;

  let dataOfOwner = document.createElement("div");
  dataOfOwner.setAttribute("class", "data-owner");

  let firstPInDataOwner = document.createElement("p");
  firstPInDataOwner.innerText = userData.name;

  let SecondPInDataOwner = (document.createElement("p").innerText =
    userData.firm);

  commendSec.append(commendBox);
  commendBox.append(userCommend);
  commendBox.append(ownerShip);
  ownerShip.append(logo);
  ownerShip.append(dataOfOwner);
  dataOfOwner.append(firstPInDataOwner);
  dataOfOwner.append(SecondPInDataOwner);
}

for (let index = 0; index < ratings.length; index++) {
  craateTextBox(ratings[index]);
}
// end rating sec
