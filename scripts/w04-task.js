/* Profile Object */
const myProfile = {
    name: "Shedrack A. Falodun",
    photo: "images/WhatsApp Image 2023-03-13 at 5.05.59 PM.jpeg", 
    favoriteFoods: ["Jollof Rice", "Fried Chicken", "Fried Rice", "Pizza"],
    hobbies: ["Playing Soccer", "Watching Movies", "Watching Sports", "Gaming"],
    placesLived: []
  };
  
  const place1 = {
    place: "Lagos, NIgeria",
    length: "16 years"
  };
  
  const place2 = {
    place: "Atlanta, Georgia",
    length: "2 years"
  };
  
  const place3 = {
    place: "Rexburg, Idaho",
    length: "3 years"
  };
  
  myProfile.placesLived.push(place1, place2, place3);
  
  /* Populate Profile Object with placesLive objects */
  
  /* DOM Manipulation - Output */
  
  /* Name */
  const nameElement = document.getElementById("name");
  nameElement.textContent = myProfile.name;
  
  /* Photo with attributes */
  const photoElement = document.getElementById("photo");
  photoElement.alt = myProfile.name;
  
  /* Favorite Foods List*/
  const favoriteFoodsUl = document.getElementById("favorite-foods");
  
  myProfile.favoriteFoods.forEach((food) => {
    const liElement = document.createElement("li");
    liElement.textContent = food;
    favoriteFoodsUl.appendChild(liElement);
  });
  
  /* Hobbies List */
  const hobbiesUl = document.getElementById("hobbies");
  
  myProfile.hobbies.forEach((hobby) => {
    const liElement = document.createElement("li");
    liElement.textContent = hobby;
    hobbiesUl.appendChild(liElement);
  });
  
/* Places Lived DataList */
const dlElement = document.createElement("dl");

myProfile.placesLived.forEach((place) => {
  const dtElement = document.createElement("dt");
  const ddElement = document.createElement("dd");

  // Wrap the place name in <strong> tags for bold formatting
  const strongElement = document.createElement("strong");
  strongElement.textContent = place.place;

  dtElement.appendChild(strongElement);
  ddElement.textContent = place.length;

  dlElement.appendChild(dtElement);
  dlElement.appendChild(ddElement);
});

const placesLivedDl = document.getElementById("places-lived");
placesLivedDl.appendChild(dlElement);