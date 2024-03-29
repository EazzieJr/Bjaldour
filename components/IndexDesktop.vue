<template>
	<div class="IndexDesktop">
		<section class="Hero">
			<div class="Container">
				<div class="Image">
					<img src="/images/hero-image.png" alt="">
				</div>

				<div class="TextArrow">
					<h1>
						Bjaldour
					</h1>

					<div class="OverflowDecoy">
						<img src="/svg/arrow-down.svg" alt="">
					</div>
				</div>
			</div>
		</section>

		<section class="About">
			<div class="Container">
				<Tag text="About" />

				<div class="Content">
					<div class="Texts">
						<span>
							The leading AI company driving innovation through state-of-the-art AI, ML, and DL technologies. Our
							groundbreaking SaaS products and tech hardware solutions are designed to supercharge your business and
							propel you ahead of the competition.
						</span>

						<p>
							Welcome to Bjaldour, where cutting-edge AI technology meets innovative SaaS products and tech hardware
							solutions. We're revolutionizing industries by harnessing the power of artificial intelligence, machine
							learning, and deep learning to create products that drive meaningful change. Explore our website and unlock
							a world of possibilities for your business.
						</p>
					</div>

					<ul>
						<li>
							<img src="/svg/tiny-star.svg" alt="">

							<span>
								Learn More About Us
							</span>
						</li>

						<li>
							<img src="/svg/tiny-star.svg" alt="">

							<span>
								Find out more about our engineering background
							</span>
						</li>

						<li>
							<img src="/svg/tiny-star.svg" alt="">

							<span>
								Research and development team
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="AIML">
			<div class="Animation">
				<div class="DottedCircle center">
					<svg viewBox="0 0 424 424" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="212" cy="212" r="211.5" stroke="black" stroke-dasharray="8 8" />
					</svg>

				</div>

				<div class="Container">
					<div class="AI">
						<div class="Top start">
							<h2>
								Artificial
								<span class="ImageSpan">
									<img src="/images/projects/casper.png" alt="">

									<span>
										Casper.Ai
									</span>
								</span>

								Inteligence
							</h2>
						</div>
					</div>

					<div class="ML">
						<div class="Top start">
							<h2>
								Machine
								<span>
									<img src="/images/ml.png" alt="">

									<span>
										Casper.Ai
									</span>
								</span>

								Learning
							</h2>
						</div>
					</div>
				</div>

				<div class="AITexts">
					<div class="OverflowDecoy">
						<div class="WholeText start">
							<span>
								#01
							</span>

							<span>
								AI
							</span>
						</div>
					</div>

					<p>
						With a team of top-tier AI experts and engineers, we are dedicated to developing cutting-edge products that
						empower businesses to thrive in the digital era. Our mission is to provide you with the tools and technologies
						you need to innovate, automate, and succeed.
					</p>
				</div>
			</div>

			<div class="Lines">
				<div class="Line"></div>
				<div class="Line"></div>
				<div class="Line"></div>
				<div class="Line"></div>
				<div class="Line"></div>
				<div class="Line"></div>
			</div>

			<div class="LinesFiller"></div>
		</section>

		<section class="Solutions">
			<div class="Container">
				<div class="Top">
					<div class="top">
						<h3>
							Solutions
						</h3>
					</div>

					<div class="mid">
						<span>
							Revolutionize Your Business with Our AI Solutions
						</span>
					</div>

					<div class="bottom end">
						<div class="Container">
							<div class="Texts">
								<p>
									Bjaldour offers a range of AI-powered solutions tailored to meet the unique needs of various industries.
									From predictive analytics and natural language processing to computer vision and robotic automation, our
									products are designed to enhance productivity, streamline processes, and drive growth. <br>
								</p>

								<span>
									Discover how our solutions can help you unlock new opportunities and achieve unparalleled success.
								</span>
							</div>

							<ul class="start">
								<li>
									<img src="/svg/tiny-star-white.svg" alt="">

									<span>
										Explore Our Solutions
									</span>
								</li>

								<li>
									<img src="/svg/tiny-star-white.svg" alt="">

									<span>
										Research and development team
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="Projects start">
					<div v-for="(project, index) in projects" :key="project.title" class="Project center"
						:class="{ 'selected': project.title === selected }" @click="highlightProject(project.title, index)">
						<img :src="`/images/projects/${project.src}.png`" :alt="`An Image for ${project.title}`">

						<div class="OverflowDecoy">
							<span>
								{{ project.title }}
							</span>
						</div>
					</div>
				</div>

				<div class="Bottom">
					<div class="OverflowDecoy">
						<span>
							Clients using our <br> solutions
						</span>
					</div>

					<div class="Clients start">
						<img v-for="(client, index) in clients" :key="index" :src="`/images/clients/${client}.png`"
							:alt="`A small sized logo of ${client}`">
					</div>
				</div>
			</div>
		</section>

		<section class="Insights">
			<div class="Container">
				<div class="Texts">
					<div class="OverflowDecoy">
						<h4>
							We have helped over 500+ businesses generate over $500m revenue using our AI/ML models
						</h4>
					</div>

					<div class="OverflowDecoy trigger">
						<p>
							From predictive analytics and natural language processing to computer vision and robotic automation, our
							products are designed to enhance productivity, streamline processes, and drive growth.
						</p>
					</div>

					<div class="Action start">
						<img src="/svg/tiny-star-white.svg" alt="">

						<span>
							See our yearly insights
						</span>
					</div>
				</div>

				<div class="Image">
					<img src="/images/insights-image.png" alt="">
				</div>
			</div>
		</section>

		<section class="Testimonials">
			<div class="Container">
				<Tag text="Testimonials" />

				<div class="Content">
					<div v-for="(testimony, index) in testimonials" :key="index" class="Testimony">
						<p>
							{{ testimony.testimony }}
						</p>

						<span>{{ testimony.name }}, {{ testimony.title }}</span>
					</div>

					<div class="WWU start">
						<img src="/svg/tiny-star.svg" alt="">

						<span>
							Let’s work together
						</span>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
import JellyEffect from '../animations/jelly'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default {
	data() {
		return {
			testimonials: [
				{
					testimony: "Working with Bjaldour has been a game-changer for our organization. Their AI solutions have revolutionized our operations and helped us achieve unprecedented levels of efficiency and growth.",
					name: "John Doe",
					title: "CEO of ABC Corporation"
				},
				{
					testimony: "Working with Bjaldour has been a game-changer for our organization. Their AI solutions have revolutionized our operations and helped us achieve unprecedented levels of efficiency and growth.",
					name: "John Doe",
					title: "CEO of ABC Corporation"
				},
				{
					testimony: "Thanks to Bjaldour, we were able to automate critical processes and make data-driven decisions with ease. Their solutions have truly transformed the way we do business.",
					name: "John Doe",
					title: "CEO of ABC Corporation"
				},
			],

			projects: [
				{
					title: "Scant.AI",
					src: "casper"
				},

				{
					title: "Luna.AI",
					src: "luna"
				},

				{
					title: "Casper.AI",
					src: "casper"
				}
			],

			clients: [
				"virgin",
				"disney",
				"hersheys",
				"andela",
				"brooklyn",
				"virgin",
				"disney",
				"hersheys",
				"andela",
				"brooklyn",
				"virgin",
				"disney",
				"hersheys",
				"andela",
				"brooklyn",
				"virgin",
				"disney",
				"hersheys",
				"andela",
				"brooklyn",
				"virgin",
				"disney",
				"hersheys",
				"andela",
				"brooklyn",
			],

			selected: "Scant.AI"
		}
	},

	methods: {
		initJelly() {
			const jelly = new JellyEffect();
		},

		initHero() {
			const tl = gsap.timeline()

			tl.to(".Hero .Image", {
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				duration: 1,
				ease: "power3.inOut",
			})

			tl.to(".Hero .Image img", {
				scaleY: 1,
				duration: 1,
				ease: "power3.inOut",
			}, "<")

			tl.to(".Hero .TextArrow h1, .Hero .TextArrow img", {
				y: 0,
				duration: 1,
				ease: "power3.out",
				stagger: 0.2,
			})
		},

		animateAbout() {
			gsap.fromTo(".About .Texts span, .About .Texts p", {
				opacity: 0
			}, {
				scrollTrigger: {
					trigger: ".About .Content",
					start: "top 80%",
				}, ease: "power3.out", duration: 1.5, stagger: 0.2, opacity: 1
			})

			gsap.fromTo(".About ul li", {
				opacity: 0
			}, {
				scrollTrigger: {
					trigger: ".About ul",
					start: "top 80%",
				}, ease: "power3.out", duration: 1.5, stagger: 0.2, opacity: 1
			})
		},

		animateSolutions() {
			const clients = document.querySelector(".Clients")

			gsap.fromTo(".Solutions .Top .top h3", { yPercent: 100 }, {
				scrollTrigger: {
					trigger: ".Solutions .Top .top",
					start: "top 70%",
					// markers: true
					// toggleActions: "play none none reset"
				}, yPercent: 0, duration: 1, ease: "power3.out"
			})

			gsap.fromTo(".Solutions .Top .mid span", { yPercent: 100 }, {
				scrollTrigger: {
					trigger: ".Solutions .Top .mid",
					start: "top 70%",
					// toggleActions: "play none none reset"
				}, yPercent: 0, duration: 1, ease: "power3.out"
			})

			gsap.fromTo(".Solutions .Top .bottom p, .Solutions .Top .bottom span", { opacity: 0 }, {
				scrollTrigger: {
					trigger: ".Solutions .Top .bottom",
					start: "top 70%",
					// toggleActions: "play none none reset"
				}, opacity: 1, duration: 1.5, ease: "power3.out", stagger: 0.2
			})

			gsap.fromTo(".Solutions .Bottom .OverflowDecoy span", { yPercent: 100 }, {
				scrollTrigger: {
					trigger: ".Solutions .Bottom",
					start: "top 70%",
					// toggleActions: "play none none reset"
				}, yPercent: 0, duration: 1, ease: "power3.out"
			})

			gsap.to(clients, {
				repeat: -1,
				x: - clients.clientWidth / 5 - (window.innerWidth * 0.0139),
				duration: 10,
				ease: "none"
			})
		},

		animateInsights() {
			const image = document.querySelector(".Insights .Image img")

			gsap.fromTo(".Insights .Texts h4", {
				yPercent: 100,
			}, {
				scrollTrigger: {
					trigger: ".Insights .Texts",
					start: "top 70%",
					toggleActions: "play none none reset",
					// markers: true
				}, yPercent: 0, duration: 1, ease: "power3.out"
			})

			gsap.fromTo(".Insights .Texts  p", {
				yPercent: 100,
			}, {
				scrollTrigger: {
					trigger: ".Insights .Texts .OverflowDecoy.trigger",
					start: "top 80%",
					toggleActions: "play none none reset",
					// markers: true
				}, yPercent: 0, duration: 1, ease: "power3.out"
			})

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".Insights .Texts",
					start: "bottom bottom",
					endTrigger: image.parentNode,
					end: "center center",
					// markers: true,
					scrub: true,
					invalidateOnRefresh: true
					// pin: image
				}
			})

			tl.fromTo(image, {
				y: "-18.19vw",
				x: "79.73vw"
			}, {
				x: "70vw", y: 0, ease: "none"
			})

			tl.to(image, {
				x: "0", y: "18.19vw", scale: 1, ease: "none"
			})
		},

		highlightProject(title, index) {
			const projectsContainer = document.querySelector(".Projects")
			const project = document.querySelectorAll(".Project")[index]
			const projects = document.querySelectorAll(".Project")
			const tl = gsap.timeline()

			// gsap.to(projects, {
			// 	minWidth: "18.05vw",
			// 	ease: "none"
			// })

			gsap.to(projectsContainer, {
				x: index === 0 ? 0 : index === 1 ? "-13vw" : "-26vw",
				ease: "none"
			})

			// gsap.to(project, {
			// 	minWidth: "83.33vw",
			// 	ease: "none"
			// })

			this.selected = title
		},

		animateAi() {
			const container = document.querySelector('.AIML .Container')
			const imageSpan = document.querySelector('.AI .ImageSpan')
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: '.AIML .AI',
					start: 'center 40%',
					end: '+=500%',
					// end: container.clientWidth - window.innerWidth,
					scrub: true,
					pin: '.AIML .Animation',
					// markers: true,
				},

				defaults: {
					ease: 'none'
				}
			})

			tl.to(container, {
				x: '-59vw'
			})

			tl.to('.AITexts p', {
				y: '0vw',
				opacity: 1,
				duration: 0.3
			}, '>-0.3')

			tl.to('.DottedCircle svg', {
				scale: 1,
				opacity: 1,
				duration: 0.3
			}, '<')

			tl.to(imageSpan, {
				width: '83.33vw',
				height: "48.61vw"
			})

			tl.to('.DottedCircle', {
				y: "30vw",
			}, '<')

			tl.to('.AITexts ', {
				y: '12.1525vw'
			}, '<')

			tl.to(container, {
				x: '-=25vw'
			}, '<')

			tl.to('.AITexts .OverflowDecoy', {
				y: '0vw'
			}, '> -0.5')

			tl.to('.AITexts .WholeText', {
				y: 0
			}, '> -0.5')

			tl.to(imageSpan, {
				width: '30.55vw',
				height: "21.38vw"
			})

			tl.to('.AITexts', {
				y: '0vw'
			}, '<')

			tl.to('.AITexts .OverflowDecoy', {
				y: '10vw'
			}, '<')

			tl.to(container, {
				x: '-=10vw'
			}, '<')

			tl.to(container, {
				x: '-=25vw',
			})

			tl.to('.DottedCircle svg', {
				scale: 0.3,
				opacity: 0,
			}, '<')

			tl.to('.AITexts p', {
				y: '-100%'
			}, '<')

			tl.to('.AITexts .OverflowDecoy', {
				y: '+=10vw'
			}, '<')

			tl.to('.AITexts .WholeText', {
				y: '100%'
			}, '> -0.5')

			tl.to('.DottedCircle svg', {
				// scale: 0.3,
				opacity: 1,
				duration: 0.3
			}, '> 0.4')

			tl.to(container, {
				x: -(container.clientWidth - window.innerWidth * 1.33),
				onComplete: () => {
					ScrollTrigger.refresh()
					ScrollTrigger.update()

					// console.log('refreshed')
				},
			}, '< -0.4')

			tl.to('.DottedCircle', {
				y: "25vw",
			}, '> -0.4')

			tl.to('.DottedCircle svg', {
				scale: 1,
				opacity: 1,
				duration: 0.3
			}, '<')

			/* Animating lines */
			const lines = document.querySelectorAll(".Line")

			lines.forEach((el, index) => {
				console.dir(el)
				gsap.to(el, {
					scrollTrigger: {
						trigger: lines,
						start: "center 60%",
						// end: "center top",
						scrub: true,
						// markers: true,
					}, y: - el.parentElement.clientHeight / 2, ease: "none"
				})
			})
		},

		animateTestimonies() {
			const testimonies = document.querySelectorAll(".Testimony")

			testimonies.forEach(el => {
				gsap.fromTo(el, { opacity: 0 }, {
					scrollTrigger: {
						trigger: el,
						start: "top 80%",
					}, opacity: 1, duration: 1.5, ease: "power3.out"
				})

				gsap.fromTo(el.lastChild, { y: "2.5vw" }, {
					scrollTrigger: {
						trigger: el.lastChild,
						start: "top bottom",
						end: "bottom top",
						// markers: true,
						scrub: true
					}, y: "-1vw",
				})
			})
		}
	},

	mounted() {
		this.initHero()
		this.initJelly()

		setTimeout(() => {
			this.animateAbout()
			this.animateAi()
			this.animateSolutions()
			this.animateInsights()
			this.animateTestimonies()
		}, 500)
	}
}
</script>

<style lang="postcss" scoped>
.IndexDesktop {
	.Hero {
		.Container {
			@apply relative;

			.Image {
				@apply w-full h-[100dvh] overflow-hidden;
				clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);

				img {
					@apply object-cover w-full h-full object-center scale-y-[2]
				}
			}

			.TextArrow {
				@apply absolute bottom-0 px-5 mb-10 lg:px-[2.78vw] lg:mb-[2.78vw] w-full flex justify-between items-baseline overflow-hidden;

				h1 {
					@apply text-[17.78vw] font-semibold text-white tracking-[-0.025em] !leading-[100%] translate-y-full;
				}

				img {
					@apply w-[5.13vw] -translate-y-full
				}
			}
		}
	}

	.About {
		@apply pt-10 px-5 lg:pt-[5.56vw] lg:px-[2.78vw];

		.Container {
			@apply flex justify-between items-start;

			.Content {
				@apply space-y-10 lg:space-y-16 xl:space-y-20 w-[62.5vw] mt-2;

				.Texts {
					@apply space-y-[2.78vw];

					span {
						@apply text-2xl lg:text-[2.5vw] !leading-[140%] tracking-[-0.025em] font-medium;
					}

					p {
						@apply block lg:text-[1.66vw] !leading-[140%]
					}
				}

				ul {
					@apply space-y-5;

					li {
						@apply flex justify-start items-center space-x-2.5 lg:space-x-[0.83vw];

						img {
							@apply w-3.5 lg:w-[1.11vw]
						}

						span {
							@apply underline underline-offset-4 lg:underline-offset-[0.5vw] lg:text-[1.67vw] !leading-[140%]
						}
					}
				}
			}
		}
	}

	.AIML {
		@apply pt-[31.80vw] overflow-x-hidden relative;

		.Animation {

			.DottedCircle {
				@apply w-full translate-y-[10vw];

				svg {
					@apply w-[29.44vw] scale-[0.3] opacity-0
				}
			}

			.Container {
				@apply flex justify-start items-start flex-nowrap space-x-[60vw] w-fit;

				.AI,
				.ML {
					.Top {
						/* @apply */

						h2 {
							@apply text-[17.78vw] font-semibold text-black tracking-[-0.025em] leading-[12.5vw] whitespace-nowrap inline-flex items-center h-[21.38vw];

							>span {
								@apply flex items-center justify-center w-[30.55vw] h-[21.38vw] overflow-hidden mx-[2.78vw] relative;

								img {
									@apply w-full h-full object-cover
								}

								span {
									@apply absolute text-[12.22vw] font-semibold block text-white scale-[0.8] opacity-0;
									/* left: 50%;
								top: 50%;
								transform: translate(-50%, -50%) */
								}
							}
						}
					}
				}

				.AI {
					@apply ml-[30vw]
				}
			}

			.AITexts {
				@apply mt-[2.08vw] ml-[10vw] space-x-[19.51vw] overflow-hidden flex items-start;

				.OverflowDecoy {
					@apply translate-y-[12vw] overflow-hidden;

					.WholeText {
						@apply translate-y-full space-x-[1.38vw];

						span {
							@apply block w-fit
						}
					}
				}

				p, span {
					@apply text-2xl lg:text-[2.5vw] !leading-[140%] tracking-[-0.025em] w-[54.16vw];
				}

				p {
					@apply opacity-0 translate-y-1/2
				}
			}
		}

		.Lines {
			@apply space-y-[5.55vw] bg-white mt-[34.44vw];

			>.Line {
				@apply bg-[#121212] w-full relative;

				&:nth-child(1) {
					@apply h-[0.69vw]
				}

				&:nth-child(2) {
					@apply h-[1.38vw]
				}

				&:nth-child(3) {
					@apply h-[2.77vw]
				}

				&:nth-child(4) {
					@apply h-[5.55vw]
				}

				&:nth-child(5) {
					@apply h-[11.11vw]
				}

				&:nth-child(6) {
					@apply h-[22.22vw]
				}
			}

			.LinesFiller {
				@apply h-[44.44vw] bg-[#121212] absolute w-full bottom-0
			}
		}
	}


	.Solutions {
		@apply bg-[#121212] text-white overflow-hidden relative z-20 -mt-[20vw] pt-[2.78vw];

		.Container {
			.Top {
				@apply relative z-50;

				.top {
					@apply overflow-hidden;

					h3 {
						@apply text-[24.30vw] text-center font-semibold tracking-[-0.025em] leading-[75%];
					}
				}

				.mid {
					@apply mt-[22.22vw] ml-[10.55vw] w-[59.72vw] overflow-hidden;

					span {
						@apply block text-[6.67vw] !leading-[100%] tracking-[-0.025em] font-semibold;
					}
				}

				.bottom {
					@apply mt-[8.33vw] pr-[10.55vw];

					.Container {
						@apply space-y-[5.55vw] w-[54.16vw];

						.Texts {
							p {
								@apply text-[2.5vw] !leading-[140%] tracking-[-0.025em] font-normal;
							}

							span {
								@apply text-[2.5vw] !leading-[140%] tracking-[-0.025em] font-normal uppercase mt-[1.5vw] block;
							}
						}

						ul {
							@apply space-x-[2.78vw];

							li {
								@apply flex justify-start items-center space-x-2.5 lg:space-x-[0.83vw];

								img {
									@apply w-3.5 lg:w-[1.11vw]
								}

								span {
									@apply underline underline-offset-4 lg:underline-offset-[0.5vw] lg:text-[1.67vw] !leading-[140%]
								}
							}
						}
					}
				}
			}

			.Projects {
				@apply space-x-[2.78vw] mt-[8.33vw];

				.Project {
					@apply relative overflow-hidden min-w-[18.05vw] h-[50vw] duration-1000;

					img {
						@apply object-cover object-center w-full h-full
					}

					.OverflowDecoy {
						@apply absolute overflow-hidden;

						span {
							@apply text-[12.22vw] font-semibold translate-y-full block duration-1000;
							/* left: 50%;
							top: 50%; */
							/* transform: translate(-50%, -50%) */
						}
					}

					&.selected {
						@apply min-w-[83.33vw];

						span {
							@apply opacity-100 translate-y-0
						}
					}
				}
			}

			.Bottom {
				@apply overflow-hidden mt-[16.44vw] space-y-[5.55vw];

				span {
					@apply block text-[6.67vw] !leading-[100%] tracking-[-0.025em] font-medium ml-[14.44vw];
				}

				.Clients {
					@apply space-x-[2.78vw] w-max;

					img {
						@apply w-full max-w-[11.38vw];
					}
				}
			}
		}
	}

	.Insights {
		@apply pt-[32.5vw] bg-[#121212] overflow-hidden;

		.Container {
			.Texts {
				@apply px-5 lg:px-[2.78vw] w-[88.33vw];

				h4 {
					@apply text-white font-semibold text-[8.33vw] leading-[80%] tracking-[-0.025em];
				}

				p,
				.Action {
					@apply ml-[6.94vw] text-white;
				}

				p {
					@apply lg:text-[1.66vw] mt-[5.55vw] leading-[120%] tracking-[-0.025em] max-w-[30vw]
				}

				.Action {
					@apply space-x-2.5 lg:space-x-[0.83vw] mt-[14.30vw];

					img {
						@apply w-3.5 lg:w-[1.11vw]
					}

					span {
						@apply underline underline-offset-4 lg:underline-offset-[0.5vw] lg:text-[1.67vw] !leading-[140%]
					}
				}
			}

			.Image {
				@apply h-[79.37vw] mt-[5.90vw];

				img {
					@apply w-full scale-[0.5] origin-top-left;
				}
			}
		}
	}

	.Testimonials {
		@apply pt-10 lg:pt-[5.55vw] px-5 lg:px-[2.78vw] pb-16 lg:pb-[9.37vw];

		.Container {
			@apply space-y-10 lg:space-y-[5.55vw];

			.Content {
				@apply pl-8 lg:pl-[2.70vw] space-y-20 lg:space-y-[11.38vw];

				.Testimony {
					@apply space-y-5 lg:space-y-[2.78vw] max-w-[45.83vw];

					p {
						@apply text-2xl lg:text-[2.5vw] !leading-[120%] tracking-[-0.025em] font-medium;
					}

					span {
						@apply block lg:text-[1.66vw] !leading-[140%]
					}
				}

				.WWU {
					@apply space-x-2.5 lg:space-x-[0.83vw];

					img {
						@apply w-3.5 lg:w-[1.11vw]
					}

					span {
						@apply underline underline-offset-4 lg:underline-offset-[0.5vw] lg:text-[1.67vw] !leading-[140%]
					}
				}
			}
		}
	}

	.OverflowDecoy {
		@apply overflow-hidden
	}
}
</style>