const wheelBtn = document.querySelector('.wheel__btn');
let isFirstSpin = true;

const spin = () => {
	const img = document.querySelector('.wheel__item-img');
	const dishes = [
		{
			name: 'duo',
			fromTo: [0, 0.33],
			rotate: '3364',
			img: './src/img/coupon.png',
		},
		{
			name: 'trio',
			fromTo: [0.34, 0.66],
			rotate: '3550',
			img: './src/img/coupon.png',
		},
		{
			name: 'family',
			fromTo: [0.67, 1],
			rotate: '3475',
			img: './src/img/coupon.png',
		},
	];

	let rotateValue;
	let currentDish = null;
	if (isFirstSpin) {
		// Force the first spin to lose by setting a rotation value outside any of the dish ranges
		rotateValue = '4250';  // Adjust this value to ensure it's outside the winning ranges
	} else {
		const randomValue = Math.random().toFixed(2);
		currentDish = dishes.find(dish => randomValue >= dish.fromTo[0] && randomValue <= dish.fromTo[1]);
		rotateValue = currentDish.rotate;
	}

	console.log(rotateValue);
	img.style.transform = `rotate(${rotateValue}deg)`;

	return currentDish;
};

wheelBtn.addEventListener('click', (e) => {
	const dish = spin();
	e.target.disabled = true;
	e.target.classList.add('disabled');

	setTimeout(() => {
		openGame();
		if (isFirstSpin) {
			closeMain();
			modalLose();
			isFirstSpin = false;  // Set to false after the first spin
			e.target.disabled = false;
			e.target.classList.remove('disabled');
		} else {
			closeMain();
			modalWin(dish.img);
		}
	}, 5500);
});