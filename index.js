const readline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}

async function start() {
    const content = {
        maximumSentences: 7
    };

    // injetando uma nova propriedade no objeto
    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();
    content.lang = askAndReturnLanguage();

    await robots.text(content);

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term:');
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of'];
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ');
        const selectedPrefixText = prefixes[selectedPrefixIndex];

        return selectedPrefixText;
    }

    function askAndReturnLanguage() {
        const languages = ['pt', 'en'];
        const selectedLanguageIndex = readline.keyInSelect(languages, 'Choose one language: ');
        const selectedLanguageText = languages[selectedLanguageIndex];
        
        return selectedLanguageText;
    }

    console.log(JSON.stringify(content, null, 4));
}

start();