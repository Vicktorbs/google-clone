const form = document.getElementById('google-form')
const body = document.getElementById('main-container')
const party = document.getElementById('party-section')
const footer = document.getElementById('footer')
const message = document.getElementsByClassName('text-hoe')
const imgHoe = document.getElementById('img-hoe')
const loader = document.getElementById('loader')
loader.style.display = 'none'

function getIputValue(e) {
    e.preventDefault();
    // console.log(message);
    let searchValue = document.getElementById('search')
    if (searchValue.value.toLowerCase().includes('fer' || 'fernanda' || 'maria fernanda' || 'maria fernanda audiffred jimenez' || 'maria' || 'maría fernanda' || 'maría' || 'maria fernanda Audiffred' || 'maría Fernanda audiffred jimenez' || 'maría fernanda audiffred' )) {
        // console.log('Happy Birthday');
        loader.style.display = 'block'
        searchValue.value = '❤️🎉 ' + searchValue.value + ' 🎈❤️'
        setTimeout(() => {
            console.log('loading');
            party.style.display = 'block'
            body.classList.add('party')
            footer.style.display = 'none'
            loader.style.display = 'none'
        }, 1500)
    } else {
        form.classList.add('bad-input')
        searchValue.value = ''
        setTimeout(() => form.classList.remove('bad-input'), 5000)
    }
}

imgHoe.addEventListener('click', () => {
    if (message[1].className.includes('active')) {
        console.log('in');
        for (let i = 0; i < message.length; i++) {
            message[i].classList.remove('active')
        }
    } else {
        for (let i = 0; i < message.length; i++) {
            message[i].classList.add('active')
        }
    }
})
form.addEventListener('submit', getIputValue);
