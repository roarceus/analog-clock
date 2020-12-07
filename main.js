setInterval(setClock, 1000);
const hourHand = document.querySelector('#hour-hand');
const minuteHand = document.querySelector('#minute-hand');
const secondHand = document.querySelector('#second-hand');
const clock = document.querySelector('#clock');
const button = document.querySelector('#dark-btn');

function setClock() {
    const date = new Date();
    const seconds = date.getSeconds() / 60; 
    const minutes = (seconds + date.getMinutes()) / 60; 
    const hours = (minutes + date.getHours()) / 12;
    const intHours = date.getHours();
    console.log(intHours)
    rotateTime(hourHand, hours);
    rotateTime(minuteHand, minutes);
    rotateTime(secondHand, seconds);
    displayImage(intHours);
}

function rotateTime(handElement, rotationDeg) {
    handElement.style.setProperty('--rotation', rotationDeg * 360)
}

function displayImage(intHours) {
    if (intHours >= 6 && intHours < 12) {
        document.querySelector('#main').classList.add('morning', 'coverImg');
    } else if (intHours >= 12 && intHours < 18) {
        document.querySelector('#main').classList.add('afternoon', 'coverImg');
    } else if (intHours >= 18 && intHours < 21) {
        document.querySelector('#main').classList.add('evening', 'coverImg');
    } else if (intHours >= 21 || intHours < 6) {
        document.querySelector('#main').classList.add('night', 'coverImg');
    }
}

document.querySelector('#dark-btn').addEventListener('click', function() {
    if (document.querySelector('#dark-btn').textContent === 'Dark Mode') {
        document.querySelector('#dark-btn').innerHTML = 'Light Mode';
        button.classList.remove('dark');
        button.classList.add('light');
        clock.classList.add('dark-mode');
    } else if (document.querySelector('#dark-btn').textContent === 'Light Mode') {
        document.querySelector('#dark-btn').innerHTML = 'Dark Mode';
        button.classList.remove('light');
        button.classList.add('dark');
        clock.classList.remove('dark-mode');
    }
})

setClock();