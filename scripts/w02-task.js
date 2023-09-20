/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Shedrack Aimumwosa Falodun';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/WhatsApp Image 2023-03-13 at 5.05.59 PM.jpeg'

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `Year: ${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ['Fried Rice', 'Jollof Rice', 'Lasagna', 'Pasta'];
foodElement.innerHTML = favoriteFoods.join(', ');
const newFood = ['Beef Stew'];
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`