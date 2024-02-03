/** @format */
// CONSTANTS
const MONTHS = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];
///////////////////////////////////////////////////////////
// Elements
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const clockWise = document.querySelector('.clockWise');
const clockCenter = document.querySelector('.clock-center-l2');
const amPm = document.querySelector('.am-pm');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const mode = document.querySelector('.mode');
const modeImage = document.querySelector('.button img');
///////////////////////////////////////////////////////////
// Variables
let monthString;
///////////////////////////////////////////////////////////
// Function;
const setDate = () => {
	const now = new Date();
	// Seconds
	const seconds = now.getSeconds();
	const secondesDegres = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondesDegres}deg)`;

	// Minutes
	const minutes = now.getMinutes();
	const minutesDegres = (minutes / 60) * 360 + 90;
	minuteHand.style.transform = `rotate(${minutesDegres}deg)`;

	// Hours
	const hours = now.getHours();
	const hoursDegres = (hours / 12) * 360 + 90;
	hourHand.style.transform = `rotate(${hoursDegres}deg)`;

	//Change the Am or Pm time
	if (hours > 12) {
		amPm.textContent = 'PM';
	} else {
		amPm.textContent = 'AM';
	}

	// make the time numbers to fixed 2 digits
	time.textContent = `${
		(hours < 10 && hours > 0) || (hours > 12 && hours < 22) ? '0' : ''
	}${hours == '0' ? hours + 12 : hours > 12 ? hours - 12 : hours} : ${
		minutes < 10 ? '0' + minutes : minutes
	}`;

	// get the name of month
	MONTHS.forEach((month, index) => {
		if (now.getMonth() == index) {
			monthString = month;
		}
	});
	date.textContent = `${now.getDate()} ${monthString} , ${now.getFullYear()}`;
};

//Change the Mode
const changeMode = () => {
	if (mode.classList.contains('dark')) {
		modeImage.src = './moon.svg';
		document.querySelector("link[rel~='icon']").href = './sun.svg';
		document.title = 'Light Mode';
	} else {
		modeImage.src = './sun.svg';
		document.querySelector("link[rel~='icon']").href = './moon.svg';
		document.title = 'DarkMode';
	}
	document.body.classList.toggle('dark');
	mode.classList.toggle('dark');
	time.classList.toggle('dark-time');
	amPm.classList.toggle('dark-sm-text');
	date.classList.toggle('dark-sm-text');
	hourHand.classList.toggle('dark-hand');
	minuteHand.classList.toggle('dark-hand');
	clockCenter.classList.toggle('dark-clock-center-l2');
	clockCenter.classList.toggle('dark-clockWise');
};

setInterval(setDate, 1000);
mode.addEventListener('click', changeMode);
