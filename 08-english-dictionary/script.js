const searchInput = document.getElementById('search-input');
const searchSubmit = document.getElementById('search-submit');

const badRequestMessage = document.getElementById('bad-request-message');
const content = document.getElementById('content');
const word = document.getElementById('word');
const phonetic = document.getElementById('phonetic');
const audio = document.getElementById('audio');
const order = document.querySelector('.order');
const senseTitle = document.querySelector('.sense-title');
const definition = document.querySelector('.definition');
const example = document.querySelector('.example');
const synonyms = document.querySelector('.synonyms');
const antonyms = document.querySelector('.antonyms');


async function fetchApi() {
    audio.setAttribute('src', '');
    phonetic.textContent = '';
    synonyms.classList.add('hide');
    antonyms.classList.add('hide');
    definition.classList.add('hide');
    example.classList.add('hide');

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput.value}`;
    const result = await fetch(url).then((res) => res.json());

    if (!result.title) {
        content.classList.remove('hide');
        definition.classList.remove('hide');
        example.classList.remove('hide');
        badRequestMessage.classList.add('hide');

        word.textContent = result[0].word;
        definition.textContent = result[0].meanings[0].definitions[0].definition;
        senseTitle.textContent = result[0].meanings[0].partOfSpeech;
        example.textContent = result[0].meanings[0].definitions[0].example;

        if (result[0].phonetics.length) {
            phonetic.textContent = result[0].phonetics[0].text;
            audio.setAttribute('src', `${result[0].phonetics[0].audio}`);
        }

        if (result[0].meanings[0].synonyms.length) {
            synonyms.textContent = `Synonyms: ${String(result[0].meanings[0].synonyms)}`;
            synonyms.classList.remove('hide');
        }

        if (result[0].meanings[0].antonyms.length) {
            antonyms.textContent = `Antonyms: ${String(result[0].meanings[0].antonyms)}`;
            antonyms.classList.remove('hide');
        }
    } else {
        content.classList.add('hide');
        badRequestMessage.classList.remove('hide');
        badRequestMessage.textContent = result.message;
    }
}

searchSubmit.addEventListener('click', fetchApi);