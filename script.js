let secondHand = document.querySelector('#seconds');
let minuteHand = document.querySelector('#minutes');
let hourHand = document.querySelector('#hour');
let date = document.querySelector('.date');

const time = () => {
    let getHours;
    let getSeconds;
    let getMinutes;

    setInterval(() => {
        let getTime = new Date();

        getHours = getTime.getHours();
        getSeconds = getTime.getSeconds();
        getMinutes = getTime.getMinutes();

        secondHand.style.transform = 'rotate(' + (6 * getSeconds + 180) + 'deg)';
        minuteHand.style.transform = `rotate(${((6 * getMinutes) + 180) + (0.1 * getSeconds)}deg)`;
        hourHand.style.transform = `rotate(${((30 * getHours) + 180) + (0.5 * getMinutes)}deg)`

    }, 1000)
}

time();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const userDate = () => {
    const currentDate = new Date();

    let month;
    let year;
    let day;
    let dateNum;

    month = currentDate.getMonth();
    year = currentDate.getFullYear();
    day = currentDate.getDay();
    dateNum = currentDate.getDate();

    console.log(months[month], year, days[day], dateNum);
    date.textContent = `${days[day]} ${dateNum}, ${year} ${months[month]}`;
}

userDate();