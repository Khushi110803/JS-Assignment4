// app.js
async function searchWord() {
    const wordInput = document.getElementById('wordInput');
    const resultContainer = document.getElementById('result');

    const word = wordInput.value.trim();

    if (word === '') {
        alert('Please enter a word.');
        return;
    }

    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();

        if (response.ok) {
            displayResult(data);
        } else {
            resultContainer.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        resultContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function displayResult(data) {
    const resultContainer = document.getElementById('result');
    const meanings = data[0].meanings;

    let html = '<h2>Meanings:</h2>';

    meanings.forEach((meaning) => {
        html += `<p><strong>${meaning.partOfSpeech}</strong>: ${meaning.definitions[0].definition}</p>`;
    });

    

    resultContainer.innerHTML = html;
}
