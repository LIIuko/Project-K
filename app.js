gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const startAnimation = (entries, observer) => {
	entries.forEach(entry => {
		if(entry.target.classList.contains("f1")){
			entry.target.classList.toggle("footer__first", entry.isIntersecting);
		} else{
			entry.target.classList.toggle("footer__sleep", entry.isIntersecting);
		}
	});
};

const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: '0px', threshold: 1 };

const elements = document.querySelectorAll('.footer');

elements.forEach(el => {
	observer.observe(el, options);
  });

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.bg__video', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.bg__video',
			start: 'center',
			end: '1000',
			scrub: true
		}
	})


	let itemsL = gsap.utils.toArray('.flex__left')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.flex__right')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

	gsap.fromTo('.footer__first', {}, {
		scale: 1, y: 0,
		scrollTrigger: {
			trigger: '.money',
			start: '-1000',
			end: '500',
			scrub: true
		}
	})

	gsap.fromTo('.money', { scale: 0.5, y: -300 }, {
		scale: 1, y: 0,
		scrollTrigger: {
			trigger: '.money',
			start: '-1000',
			end: '500',
			scrub: true
		}
	})
}
