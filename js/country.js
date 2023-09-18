const language = prompt("Which language do you prefer?");
const isIsland = prompt("Is the country an island? (true or false)");
const population = parseInt(prompt("What is the population of the country?"));
const country = prompt("Enter the country name:");

if (language === "English" && !isIsland && population < 50000000) {
  console.log(`You should live in ${country}.`);
} else {
  console.log(`${country} does not meet your criteria.`);
}
