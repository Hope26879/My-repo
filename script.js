const facts = [
  'Honey never spoils; archaeologists have found edible honey in ancient Egyptian tombs.',
  'A single strand of spaghetti is called a "spaghetto."',
  'Octopuses have three hearts and blue blood.',
  'Bananas are berries, while strawberries are not.',
  'A day on Venus is longer than a year on Venus.',
  'The first computer programmer was Ada Lovelace, born in 1815.',
  'Koalas have fingerprints that are nearly identical to human fingerprints.',
  'There are more possible iterations of a game of chess than atoms in the observable universe.',
  'Wombat poop is cube-shaped, which helps it stay in place.',
  'A group of flamingos is called a "flamboyance."',
  'The Eiffel Tower can be 15 cm taller during hot days due to thermal expansion.',
  'A bolt of lightning is about five times hotter than the surface of the sun.',
  'The shortest war in history lasted 38 to 45 minutes between Britain and Zanzibar in 1896.',
  'Sharks have been around longer than trees.',
  'There are more trees on Earth than stars in the Milky Way galaxy.',
];

const factText = document.getElementById('factText');
const newFactBtn = document.getElementById('newFactBtn');
const copyFactBtn = document.getElementById('copyFactBtn');

function showRandomFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factText.textContent = facts[randomIndex];
}

function copyFact() {
  const text = factText.textContent;
  if (!navigator.clipboard) {
    alert('Clipboard access is not supported in this browser.');
    return;
  }
  navigator.clipboard.writeText(text).then(() => {
    copyFactBtn.textContent = 'Copied!';
    setTimeout(() => { copyFactBtn.textContent = 'Copy Fact'; }, 1500);
  }).catch(() => {
    alert('Unable to copy the fact.');
  });
}

newFactBtn.addEventListener('click', showRandomFact);
copyFactBtn.addEventListener('click', copyFact);
showRandomFact();