console.log('Hello there, am locked and loaded...');

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const address = search.value;

    messageOne.innerHTML = 'Loading results...'
    messageTwo.innerHTML = ''

    fetch('http://localhost:3000/weather?address='+address).then(response => {
        response.json().then(({ error, location, forecast }) => {
        if (error) {
            messageOne.innerHTML = `<span class="error">${error}</span>`;
        } else {
            messageOne.innerHTML = location
            messageTwo.innerHTML = forecast
        }
    })
})
})