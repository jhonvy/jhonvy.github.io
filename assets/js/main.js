/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

/*==================== REMOVE MENU MOBILE ====================*/

const navlink = document.querySelectorAll('.nav__link');

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	// when we click on each nav__link ,we remove the show-menu class
	navMenu.classList.remove('show-menu');
}

navlink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== ANIMATION LETTERS ====================*/

//Acontinuacion capturo todas mis letras y las guardo en un variable
const $anip = document.querySelectorAll('.blast');

//Luego cada vez que pongo mi mause sobre una letra,me agrega la clase animated
$anip.forEach((a) =>
	a.addEventListener('mouseover', () => {
		a.classList.add('animated');
	})
);

//Luego cada vez que quito el mause en una letra,me quita la clase animated
$anip.forEach((a) =>
	a.addEventListener('mouseleave', () => {
		setTimeout(() => {
			a.classList.remove('animated');
		}, 1000);
	})
);

/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll('.services__modal'),
	modalBtns = document.querySelectorAll('.services__button'),
	modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
	modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () => {
		modal(i);
	});
});

modalCloses.forEach((modalClose) => {
	modalClose.addEventListener('click', () => {
		modalViews.forEach((modalView) => {
			modalView.classList.remove('active-modal');
		});
	});
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.add('active-link');
		} else {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.remove('active-link');
		}
	});
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
	const nav = document.getElementById('header');
	// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 800) nav.classList.add('show_brackgroundNav');
	else nav.classList.remove('show_brackgroundNav');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');

	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 550) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== GSAP ANIMATION ====================*/

gsap.from('.home__data', { opacity: 0, duration: 2, delay: 0.8, y: 25 });
gsap.from('.home_title-super', { opacity: 0, duration: 2, delay: 0.9, y: 25 });
gsap.from('.home__subtitle', { opacity: 0, duration: 2, delay: 1, y: 25 });
gsap.from('.home__button', { opacity: 0, duration: 2, delay: 1.2, y: 25 });
gsap.from('.home__scroll', { opacity: 0, duration: 2, delay: 1.3, y: 25 });
gsap.from('.nav__logo', { opacity: 0, duration: 2, delay: 1.8, y: 25 });
gsap.from('.nav__item', {
	opacity: 0,
	duration: 2,
	delay: 1.9,
	y: 25,
	ease: 'expo.out',
	stagger: 0.2,
});
