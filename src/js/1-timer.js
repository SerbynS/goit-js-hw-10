import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;

const datetimeInput = document.querySelector('input#datetime-picker');
const startButton = document.querySelector('button');

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		if (selectedDates[0] < new Date()) {
			iziToast.error({
				backgroundColor: '#ef4040',
				progressBarColor: '#b51b1b',
				overlayColor: '#ffbebe',
				iconColor: '#ffffff',
				icon: 'fas fa-times',
				titleColor: '#ffffff',
				title: 'Error',
				messageColor: '#ffffff',
				theme: 'dark',
				position: 'topRight',
				message: 'Please choose a date in the future',
			});
			startButton.disabled = true;
		} else {
			userSelectedDate = selectedDates[0];
			startButton.disabled = false;
		}
	},
};

flatpickr(datetimeInput, options);

startButton.addEventListener('click', () => {
	if (!userSelectedDate) {
		return;
	}
	datetimeInput.disabled = true;
	startButton.disabled = true;

	setInterval(() => {
		const timeDifference = userSelectedDate - new Date();

		if (timeDifference <= 0) {
			datetimeInput.disabled = false;
			return;
		}

		const time = convertMs(timeDifference);
		updateTimerDisplay(time);
	}, 1000);
});

function convertMs(ms) {
	// Number of milliseconds per unit of time
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	// Remaining days
	const days = Math.floor(ms / day);
	// Remaining hours
	const hours = Math.floor((ms % day) / hour);
	// Remaining minutes
	const minutes = Math.floor(((ms % day) % hour) / minute);
	// Remaining seconds
	const seconds = Math.floor((((ms % day) % hour) % minute) / second);

	return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
	return String(value).padStart(2, '0');
}

function updateTimerDisplay({ days, hours, minutes, seconds }) {
	daysEl.textContent = addLeadingZero(days);
	hoursEl.textContent = addLeadingZero(hours);
	minutesEl.textContent = addLeadingZero(minutes);
	secondsEl.textContent = addLeadingZero(seconds);
}
