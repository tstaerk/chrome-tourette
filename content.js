// List of random words to insert
const randomWords = ["idiot", "fool", "moron", "coward", "git"];

// Function to get a random word
function getRandomWord() 
{
  return randomWords[Math.floor(Math.random() * randomWords.length)];
}

// Function to insert a random word
function insertRandomWords() 
{
  const elements = document.querySelectorAll("p, h1, h2, h3, span, a");

  elements.forEach((element) => 
  {
    // Skip elements that are too small or have no text
    if (!element.textContent.trim() || element.textContent.length < 10) return;

    const words = element.textContent.split(" ");
    const randomIndex = Math.floor(Math.random() * words.length);
    words.splice(randomIndex, 0, getRandomWord());
    element.textContent = words.join(" ");
  });
}

// Run the script after the page loads
window.addEventListener("load", insertRandomWords);
