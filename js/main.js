const form = document.getElementById('google-form')
const body = document.getElementById('main-container')

function getIputValue(e) {
    e.preventDefault();
    let searchValue = document.getElementById('search')
    if (searchValue.value === 'fer') {
        console.log('Happy Birthday');
        body.classList.add('party')
    } else {
        form.classList.add('bad-input')
        searchValue.value = ''
        setTimeout(() => form.classList.remove('bad-input'), 5000)
    }
}

form.addEventListener('submit', getIputValue);