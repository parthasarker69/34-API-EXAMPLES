const loadQuetes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => showQuotes(data))
}

const showQuotes = qoute => {
    document.getElementById('qoutes').innerText = qoute.quote;
}