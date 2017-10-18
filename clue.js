// Iteration 1 - Creating the cards
const characters = [
  {
    nickname: "Mr Green",
    firstName: "Jacob",
    lastName: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur",
  },
  {
    nickname: "Dr Orchid",
    firstName: "Doctor",
    lastName: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist",
  },
  {
    nickname: "Prof Plum",
    firstName: "Victor",
    lastName: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer",
  },
  {
    nickname: "Miss Scarlet",
    firstName: "Kasandra",
    lastName: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past,",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor",
  },
  {
    nickname: "Mrs Peacock",
    firstName: "Eleanor",
    lastName: "Peacock",
    color: "blue",
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité",
  },
  {
    nickname: "Mr Mustard",
    firstName: "Jack",
    lastName: "Mustard",
    color: "yellow",
    description:
      "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player",
  },
];

const weapons = [
  "Rope",
  "Knife",
  "Candlestick",
  "Dumbbell",
  "Poison",
  "Axe",
  "Bat",
  "Trophy",
  "Pistol",
];

const rooms = [
  "Dinning Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio",
];

// Iteration 2 - Creating and revealing the mystery
function randomSelector(array) {
  return Math.floor(Math.random() * array.length);
}

function pickMistery(characterArray, weaponArray, roomArray) {
  return {
    character: characterArray[randomSelector(characterArray)].nickname,
    weapon: weaponArray[randomSelector(weaponArray)],
    room: roomArray[randomSelector(roomArray)],
  };
}

function revealMistery(mistery) {
  console.log(
    `Character: ${mistery.character}, Weapon: ${mistery.weapon}, Room: ${mistery.room}`,
  );
}

const misteryEnvelope = pickMistery(characters, weapons, rooms);
revealMistery(misteryEnvelope);
