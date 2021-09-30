import "./style.css";

import Chance from "chance";
const chance = new Chance();

window.addEventListener("load", (event) => {
  console.log(event);
  let firstNameGenerator = chance.first();
  let middleNameGenerator = chance.first();
  let lastNameGenerator = chance.last();
  let yearGenerator = chance.year({ min: 1900, max: 2000 });
  let emailGenerator = chance.email();
  let jobGenerator = chance.profession();
  let telGenerator = chance.phone();
  let numberGenerator = chance.integer({ min: -999, max: 999 });
  let cityGenerator = chance.city();
  let animalGenerator = chance.animal();
  let avatarGenerator = chance.avatar({ protocol: "https" });
  let colorGenerator = chance.color();

  document.querySelector("#app").innerHTML = `
<main>
<img class="mainimg" src=${avatarGenerator} alt="Selfhtml">
<h1> ${firstNameGenerator} ${middleNameGenerator} ${lastNameGenerator} </h1>
<div>
<p><img class="icon" src="images/phone-icon.png" width= 15> ${telGenerator}</p>
<p><img class="icon" src="images/email-icon.jpeg" width = 15> ${emailGenerator}</p>
</div>
<div>
<p>
Hallo! My name is ${firstNameGenerator} and I am a ${jobGenerator}.
I was born in the year of ${yearGenerator} in the city of ${cityGenerator}.
My favorite animal is ${animalGenerator}. But I love numbers! My favorite one is ${numberGenerator}.
</p>
</div>
</main>
`;
  document.querySelector("img").style.border = "thick solid";
  document.querySelector("img").style.borderRadius = "50%";
  document.querySelector("img").style.borderColor = colorGenerator;
});
