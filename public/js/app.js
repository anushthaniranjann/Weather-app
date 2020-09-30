//client side js which is going to use in the server
console.log('Client side javascript file is loaded')


const weatherForm = document.querySelector('form')

//to display info about what the user searches
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// run when someone submits&client side code
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = search.value

messageOne.textContent = 'Loading...'
messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })

})