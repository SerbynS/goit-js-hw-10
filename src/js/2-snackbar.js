import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
	event.preventDefault();

	const delay = parseInt(event.target.delay.value);
	const state = event.target.state.value;

	new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(delay);
			if (state === 'fulfilled') {
				resolve(delay);
			} else {
				reject(delay);
			}
		}, delay);
	})
		.then(delay => {
			iziToast.success({
				position: 'topRight',
				icon: '',
				message: `✅ Fulfilled promise in ${delay}ms`,
			});
		})
		.catch(delay => {
			iziToast.error({
				icon: '',
				position: 'topRight',
				message: `❌ Rejected promise in ${delay}ms`,
			});
		});
});
