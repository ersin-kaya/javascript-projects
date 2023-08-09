const generateJokeButton = document.getElementById("generate-joke");
const joke = document.getElementById("joke-content");
const jokeButtonDefaultValue = "Generate Joke";
const loadingValue = "Loading...";

const apiKey = "yourApiKey";
const apiUrl = "apiUrl";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

function jokeButtonDisable() {
  generateJokeButton.disabled = true;
  generateJokeButton.textContent = loadingValue;
}

function jokeButtonEnable() {
  generateJokeButton.textContent = jokeButtonDefaultValue;
  generateJokeButton.disabled = false;
}

function setJokeContentForLoading() {
  joke.textContent = loadingValue;
  joke.classList.remove("display-none");
}

function setJokeButtonAndContentForLoading() {
  setJokeContentForLoading();
  jokeButtonDisable();
}

async function generateJoke() {
  try {
    setJokeButtonAndContentForLoading();

    const response = await fetch(apiUrl, options);
    const data = await response.json();
    // joke.textContent = data[0].joke;
    joke.textContent = "data[0].joke";

    jokeButtonEnable();
  } catch (error) {
    joke.textContent = "Try again later";
    jokeButtonEnable();
  }
}

generateJokeButton.addEventListener("click", generateJoke);
