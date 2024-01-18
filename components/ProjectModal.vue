<template>
	<div class="Modal" id="OverlayProject">
		<nav>
			<div class="NavContainer">
				<div class="Decoy"></div>

				<button class="Back" @click="close">
					Back
				</button>

				<div class="Home end">
					<nuxt-link to="/">
						Home
					</nuxt-link>
				</div>
			</div>
		</nav>

		<div class="">
			<Section class="Hero center">
				<div class="BigImage">
					<img :src="data.bigImage" alt="">
				</div>

				<div class="SmallImage">
					<!-- <img src="/images/opt-hero-small.png" alt=""> -->
				</div>

				<div class="Overlay">
					<h1 class="ModalHeroText">
						{{ data.deat }}
					</h1>

					<div class="TextAnim">
						<span class="LastWord">{{ lastWord }}</span>
					</div>
				</div>
			</Section>

			<div class="AfterHero">
				<div class="Container">
					<div class="Texts">
						<div class="OverflowAssist">
							<span>
								Partnering with TransTech, a forward-thinking transportation and logistics company, we created content
								that
								explored the integration of machine learning in the transportation industry.
							</span>
						</div>

						<p>
							Partnering with TransTech, a forward-thinking transportation and logistics company, we created content that
							explored the integration of machine learning in the transportation industry.
						</p>
					</div>

					<div class="Image">
						<img src="/images/transtech-afterhero.png" alt="">
					</div>
				</div>
			</div>

			<section class="Challenges">
				<div class="Container">
					<Tag text="Challenge" />

					<div class="Content">
						<div class="Texts">
							<div class="OverflowAssist">
								<span>
									TransTech, a leading transportation and logistics company, faced challenges in optimizing their
									operations, improving route efficiency, and reducing maintenance costs. They sought a solution that
									could
									leverage the power of machine learning to streamline their logistics processes and enhance overall
									operational efficiency.
								</span>
							</div>

							<p>
								Welcome to Bjaldour, where cutting-edge AI technology meets innovative SaaS products and tech hardware
								solutions. We're revolutionizing industries by harnessing the power of artificial intelligence, machine
								learning, and deep learning to create products that drive meaningful change. Explore our website and
								unlock
								a world of possibilities for your business.
							</p>
						</div>

						<div class="Images">
							<img class="Big" src="/images/tt-challenge-img-1.png" alt="">
							<img class="Mid" src="/images/tt-challenge-img-2.png" alt="">
							<img class="Sml" src="/images/tt-challenge-img-3.png" alt="">
						</div>
					</div>
				</div>
			</section>

			<section class="Objectives">
				<div class="Container">
					<Tag text="Objectives" />

					<div class="Content">
						<div class="Texts">
							<span>
								The objectives were to improve route optimization, enable real-time fleet management, and implement
								predictive maintenance. By harnessing the power of data and machine learning algorithms, we aimed to
								enhance
								efficiency, reduce costs, and elevate overall performance in the transportation industry.
							</span>

							<ul>
								<li v-for="(obj, index) in objectives" :key="index">
									<img src="/svg/tiny-star.svg" alt="">

									<p>
										{{ obj }}
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<div class="Engine center">
				<img src="/images/luna-image.png" alt="">

				<div class="Overlay col-center h-fit">
					<span>
						Built on
					</span>

					<h2>
						luna.ai
					</h2>

					<span class="FindOut">
						find out more
					</span>
				</div>
			</div>

			<section class="Approach">
				<div class="Container">
					<Tag text="Approach" />

					<div class="Content">
						<div class="TextAnim">
							<span>
								Our approach involved analyzing historical data to identify patterns and developing a machine learning
								model
								for optimized route planning, fuel consumption estimation, and predictive maintenance. Real-time
								monitoring
								and integration were implemented to leverage live data sources.
							</span>
						</div>

						<div class="Approaches">
							<div class="Left">
								<div v-for="approach in approaches.slice(0, 2)" :key="approach.title" class="App">
									<span>
										{{ approach.title }}
									</span>

									<div class="p">
										<p v-for="(deat, index) in approach.deat" :key="index">
											{{ deat }}
										</p>
									</div>
								</div>
							</div>

							<div class="Right">
								<div v-for="approach in approaches.slice(2, 4)" :key="approach.title" class="App">
									<span>
										{{ approach.title }}
									</span>

									<div class="p">
										<p v-for="(deat, index) in approach.deat" :key="index">
											{{ deat }}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div class="Thingy">
				<h3>
					<span>
						TransTech
					</span>

					<svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="150" height="150" rx="75" fill="#DFE0E2" />
						<path d="M75 24C75 64.8 41 75 24 75C64.8 75 75 109 75 126C75 85.2 109 75 126 75C85.2 75 75 41 75 24Z"
							fill="black" />
					</svg>

					<span>
						Bjaldour
					</span>
				</h3>
			</div>

			<section class="Solution">
				<div class="Container">
					<Tag text="Solution" white />

					<div class="Content">
						<div class="TextAnim">
							<h4>
								Revolutionize Your Business with Our AI Solutions
							</h4>
						</div>

						<div class="Top">
							<div class="Texts">
								<span>
									Through the integration of machine learning into their transportation operations, TransTech successfully
									optimized their logistics processes, improved route efficiency, and reduced maintenance costs.
								</span>

								<p>
									The implementation of real-time fleet management and predictive maintenance capabilities enabled them to
									make data-driven decisions, enhance vehicle performance, and deliver exceptional customer service.
								</p>
							</div>

							<div class="Solutions">
								<div class="Left">
									<img src="/images/solution-1.png" alt="">
									<img src="/images/solution-3.png" alt="">
								</div>

								<div class="Container">
									<div class="Sol" v-for="(solution, index) in solutions" :key="index">
										<span>
											{{ solution.title }}
										</span>

										<ul>
											<li v-for="(li, index) in solution.solutions" :key="index">
												{{ li }}
											</li>
										</ul>
									</div>
								</div>

								<div class="Right">
									<img src="/images/solution-2.png" alt="">
								</div>
							</div>
						</div>

						<div class="Bottom">
							<h5>
								<span class="top between">
									<span>
										In
									</span>

									<svg width="285" height="10" viewBox="0 0 285 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<line y1="5" x2="285" y2="5" stroke="white" stroke-width="10" />
									</svg>
								</span>

								<span class="bottom">
									Conclusion
								</span>
							</h5>

							<span>
								By embracing machine learning, TransTech transformed their operations, ensuring timely deliveries,
								reducing
								fuel consumption, and maximizing the lifespan of their fleet.
							</span>

							<p>
								This project stands as a testament to the power of machine learning in revolutionizing the transportation
								and logistics industry, and TransTech's commitment to innovation and excellence.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import { gsap } from "gsap/dist/gsap"
import Lenis from '@studio-freight/lenis'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Flip } from "gsap/dist/Flip";

gsap.registerPlugin(ScrollTrigger, Flip, { performance: true })
export default {
	props: {
		data: Object,
	},

	data() {
		return {
			objectives: [
				"Improve Route Optimization: Develop an intelligent machine learning model to optimize route planning and scheduling, reducing delivery times and fuel consumption.",
				"Real-time Fleet Management: Implement a system that leverages real-time data to monitor vehicle performance, driver behavior, and maintenance needs, ensuring proactive decision-making.",
				"Predictive Maintenance: Utilize machine learning algorithms to predict potential maintenance issues, minimizing downtime and optimizing vehicle performance."
			],

			approaches: [
				{
					title: "Data Collection and Analysis",
					deat: [
						"Gathered historical data on routes, fuel consumption, vehicle performance, and maintenance records.",
						"Conducted a comprehensive analysis to identify patterns, inefficiencies, and potential areas of improvement."
					]
				},

				{
					title: "Real-time Monitoring and Integration",
					deat: [
						"Integrated the machine learning model with real-time data sources, including GPS tracking, weather conditions, and traffic updates.",
						" Established a centralized dashboard to monitor vehicle locations, performance metrics, and driver behavior in real- time."
					]
				},

				{
					title: "Machine Learning Model Development",
					deat: [
						"Developed a machine learning model utilizing algorithms such as regression and clustering. ",
						"Trained the model using the collected data to predict optimal routes, estimate fuel consumption, and identify maintenance requirements."
					]
				},

				{
					title: "Predictive Maintenance Implementation",
					deat: [
						"Utilized the machine learning model to analyze vehicle sensor data and identify potential maintenance issues. ",
						"Developed a proactive maintenance schedule to address identified issues before they escalate, reducing unexpected breakdowns and minimizing costs."
					]
				}
			],

			solutions: [
				{
					title: "Route Optimization and Fuel Efficiency",
					solutions: [
						"Achieved a 15% reduction in delivery times through optimized route planning.",
						"Decreased fuel consumption by 10 % by identifying the most efficient routes based on real - time traffic and weather conditions."
					]
				},

				{
					title: "Real-time Fleet Management",
					solutions: [
						"Improved fleet performance monitoring, enabling TransTech to proactively address driver behavior issues and reduce vehicle idling time.",
						"Enhanced decision - making with real - time data insights, leading to improved operational efficiency and customer satisfaction.",
					]
				},

				{
					title: "Predictive Maintenance",
					solutions: [
						"Reduced maintenance costs by 20% through early identification of potential issues and proactive maintenance scheduling.",
						"Minimized vehicle downtime by addressing maintenance needs before they caused significant disruptions.",
					]
				}
			],

			scroll: null
		}
	},

	computed: {
		lastWord() {
			const sentence = this.data.deat
			const words = sentence.split(" ")
			const lastWord = words[words.length - 1]

			return lastWord
		}
	},

	methods: {
		initLenis() {
			const wrapper = document.querySelector("#OverlayProject")
			const lenis = new Lenis({ duration: 2, wrapper })
			this.scroll = lenis

			lenis.on('scroll', (e) => {
				// console.log(e)
			})

			const raf = (time) => {
				lenis.raf(time)
				requestAnimationFrame(raf)
			}

			requestAnimationFrame(raf)

			if (lenis) {
				ScrollTrigger.scrollerProxy(wrapper, {
					scrollTop(value) {
						if (arguments.length) {
							lenis.scrollTo(0, value);
						}

						return lenis.animatedScroll;
					},
				});

				ScrollTrigger.defaults({
					scroller: wrapper,
					toggleActions: "play none none reset"
				})
			}
		},

		animateHero() {
			const { smallImage } = this.data
			const state = Flip.getState(smallImage)
			const modalImage = document.querySelector(".Modal .Hero .SmallImage")
			modalImage.appendChild(smallImage)

			const tl = gsap.timeline({
				defaults: {
					ease: "power4.inOut",
					duration: 1.25
				}
			})

			Flip.from(state, {
				// delay: 0.5,
				duration: 1.25,
				ease: "power4.inOut",
			})

			tl.to('.BigImage', {
				clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
			})

			tl.to('.LastWord', {
				y: 0
			}, '<30%')

			this.splitAnimateTextLines(".ModalHeroText")
		},

		animateModalAfterHero() {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".AfterHero .Texts",
					start: "top 70%",
					end: "bottom",
					// markers: true,
					// scroller: "#OverlayProject",
					// toggleActions: "play none none reset"
				}
			})

			tl.fromTo(".AfterHero .Texts span, .AfterHero .Texts p", { yPercent: 150 }, {
				yPercent: 0, duration: 1.5, ease: "power3.out"
			})

			tl.to(".AfterHero .Image", {
				clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 1, ease: "power3.inOut"
			}, "< 0.5")
		},

		animateModalChallenges() {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".Challenges .Images",
					start: "bottom bottom",
					// end: "bottom",
					// markers: true,
					// scroller: "#OverlayProject",
					scrub: true
				}, defaults: { ease: "none" }
			})

			gsap.fromTo(".Challenges .Texts span, .Challenges .Texts p", { opacity: 0 }, {
				scrollTrigger: {
					trigger: ".Challenges .Texts",
					start: "top 70%",
					end: "bottom",
					// markers: true,
					// scroller: "#OverlayProject",
					// toggleActions: "play none none reset"
				},
				opacity: 1, duration: 1, ease: "power3.in", stagger: "0.2"
			})

			tl.to(".Challenges .Images .Sml", {
				yPercent: -100
			})

			tl.to(".Challenges .Images .Mid", {
				yPercent: 10
			}, 0)

			tl.to(".Challenges .Images .Big", {
				yPercent: -10
			}, 0)
		},

		animateModalObjectives() {
			gsap.fromTo(".Objectives .Texts span", { opacity: 0 }, {
				scrollTrigger: {
					trigger: ".Objectives .Texts",
					start: "top 70%",
					end: "bottom",
					// markers: true,
					// scroller: "#OverlayProject",
					// toggleActions: "play none none reset"
				},
				opacity: 1, duration: 1.5, ease: "power3.out"
			})

			gsap.fromTo(".Objectives .Texts ul li", { opacity: 0 }, {
				scrollTrigger: {
					trigger: ".Objectives .Texts ul",
					start: "top 70%",
					end: "bottom",
					// markers: true,
					// scroller: "#OverlayProject",
					// toggleActions: "play none none reset"
				},
				opacity: 1, duration: 1.5, ease: "power3.out", stagger: 0.2
			})
		},

		animateModalEngine() {
			gsap.to(".Engine img", {
				scrollTrigger: {
					trigger: ".Engine",
					start: "center center",
					end: "+=200%",
					scrub: true,
					// scroller: "#OverlayProject",
					pin: true
				}, clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", ease: "none"
			})
		},

		animateApproach() {
			const approaches = document.querySelectorAll(".Approaches .App")

			gsap.fromTo(".Approach .Content > .TextAnim span", {
				y: "100%"
			}, {
				scrollTrigger: {
					trigger: ".Approach .Content",
					start: "top 70%",
					// markers: true
				}, y: 0, duration: 1, ease: "power3.inOut"
			})

			approaches.forEach((el, index) => {
				console.log(el.firstChild, el.lastChild)
				gsap.to(el.children, {
					scrollTrigger: {
						trigger: el,
						start: "top 80%"
					},
					opacity: 1,
					ease: "power3.in",
					duration: 1,
					stagger: 0.2
				})
			})

			/* Animate the thingy section */
			gsap.to(".Thingy h3", {
				scrollTrigger: {
					trigger: ".Thingy",
					start: "top bottom",
					end: "bottom top",
					scrub: true,

				},

				x: "-40vw", ease: "none"
			})
		},

		animateSolutions() {
			const solutions = document.querySelectorAll(".Sol")
			const images = document.querySelectorAll(".Solution img")

			gsap.fromTo(".Solution h4", {
				y: "100%"
			}, {
				scrollTrigger: {
					trigger: ".Solution .Content > .TextAnim",
					start: "top 80%"
				},
				y: 0,
				ease: "power3.out",
				duration: 1
			})

			gsap.to(".Solution .Top .Texts span, .Solution .Top .Texts p", {
				scrollTrigger: {
					trigger: ".Solution .Top .Texts",
					start: "top 80%"
				},
				opacity: 1,
				ease: "power3.in",
				duration: 1,
				stagger: 0.2
			})

			solutions.forEach(el => {
				gsap.fromTo(el.children, {
					opacity: 0
				}, {
					scrollTrigger: {
						trigger: el,
						start: "top 80%"
					},
					opacity: 1,
					ease: "power3.in",
					duration: 1,
					stagger: 0.2
				})
			})

			images.forEach(el => {
				gsap.to(el, {
					scrollTrigger: {
						trigger: el,
						start: "top bottom",
						end: "+=100%",
						scrub: true
					},
					y: "20vw",
					ease: "power3.in",
					duration: 1,
					stagger: 0.2
				})
			})
		},

		splitAnimateTextLines(el) {
			const splittedText = this.$splitting({ target: el, by: "lines" });
			const target = document.querySelector(el)
			splittedText[0].lines.forEach(line => {
				// console.log(line)
				const span = document.createElement("span")

				line.forEach(word => {
					const whitespace = document.createElement("span")
					whitespace.innerHTML = " "

					span.appendChild(word)
					span.appendChild(whitespace)
					// console.log(span, word.innerHTML)
				})

				target.appendChild(span)

				gsap.set(span, { overflow: "hidden", display: "block" })
				gsap.set(el, { opacity: 1 })
				gsap.set(el + " .word", { y: "100%" })
			})

			gsap.to(splittedText[0].lines, {
				y: 0,

				ease: "power3.inOut",
				duration: 1.25,
				stagger: 0.05
			})

			// console.log(splittedText[0].lines)
		},

		close() {
			let done = false;
			const smallImage = document.querySelector(".Modal .Hero .SmallImage img")
			const modal = document.querySelector(".Modal")
			const tl = gsap.timeline({
				defaults: {
					ease: "power4.inOut",
					duration: 1.25
				}
			})

			this.scroll.scrollTo(0, 0)

			tl.to('.LastWord', {
				y: "100%"
			})

			tl.to('.BigImage', {
				clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
			}, '<30%')

			tl.to(".Modal .word", {
				y: "100%"
			}, "<")

			setTimeout(() => {
				this.$emit("close", smallImage)
			}, 1000)
		}
	},

	mounted() {
		this.initLenis()

		setTimeout(() => {
			// 	ScrollTrigger.defaults({
			// 		// scroller: "#OverlayProject",
			// 		toggleActions: "play none none reset"
			// 	})

			this.animateHero()
			this.animateModalAfterHero()
			this.animateModalChallenges()
			this.animateModalObjectives()
			this.animateModalEngine()
			this.animateApproach()
			this.animateSolutions()
		}, 100)
	}
}
</script>

<style lang="postcss" scoped>
.Modal {
	@apply fixed top-0 left-0 bottom-0 right-0 z-[1000] overflow-auto;
	/* overscroll-behavior: contain; */
	/* clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); */


	&::-webkit-scrollbar {
		@apply opacity-0 hidden
	}

	>div {
		/* overscroll-behavior: contain; */
	}

	nav {
		@apply p-5 md:p-[2.78vw] fixed top-0 left-0 right-0 z-[1001] mix-blend-exclusion invert;

		.NavContainer {
			@apply grid grid-cols-3 md:grid-cols-3;

			button {
				@apply w-fit place-self-center
			}

			.Back, .Home {
				@apply md:text-[1.67vw] font-bold tracking-[-0.025em] text-black;
			}
		}
	}

	.Hero {
		@apply w-full h-[100svh] overflow-hidden relative;

		.BigImage {
			@apply w-full h-full absolute z-[-1];
			clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

			img {
				@apply w-full h-full object-cover object-center !m-0;
			}
		}

		.SmallImage {
			@apply absolute z-[-1] !w-[30.27vw] !h-[37.98vw];

			img {
				@apply !min-w-full
			}

			/* clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%) */
		}

		.Overlay {
			@apply w-full h-full flex items-center px-[2.78vw] text-white overflow-hidden;

			h1 {
				@apply font-semibold text-[8.88vw] leading-[110%] tracking-[-0.025em] opacity-0 w-full max-w-[90vw]
			}

			>div {
				@apply absolute right-[2.78vw] bottom-[2.78vw];

				span {
					@apply block lg:text-[1.66vw] !leading-[100%] font-semibold translate-y-full
				}
			}
		}
	}

	.AfterHero {
		@apply pt-[11.11vw] bg-white;

		.Container {
			@apply space-y-[7.08vw] w-[58.75vw] ml-[11.11vw];

			.Texts {
				@apply space-y-[2.78vw] overflow-hidden;

				span {
					@apply block text-2xl lg:text-[2.5vw] !leading-[140%] tracking-[-0.025em];
				}

				p {
					@apply block lg:text-[1.66vw] !leading-[140%]
				}
			}

			.Image {
				@apply w-full;
				clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);

				img {
					@apply w-full
				}
			}
		}
	}

	.Challenges {
		@apply pt-[11.11vw] px-[2.78vw] bg-white;

		.Container {
			@apply flex justify-between items-start w-[86.45vw];

			.Content {
				@apply space-y-[8.33vw] w-[54.51vw];

				.Texts {
					@apply space-y-[2vw];

					span {
						@apply text-2xl lg:text-[2.5vw] !leading-[140%] tracking-[-0.025em];
					}

					p {
						@apply block lg:text-[1.66vw] !leading-[140%]
					}
				}

				.Images {
					@apply flex items-end;

					img:nth-child(1) {
						@apply w-[20.83vw] shrink-0 h-auto
					}

					img:nth-child(2) {
						@apply w-[18.54vw] shrink-0 h-auto ml-[4.16vw]
					}

					img:nth-child(3) {
						@apply w-[8.33vw] shrink-0 h-auto -ml-[1.5vw] -mb-[6.25vw]
					}
				}
			}
		}
	}

	.Objectives {
		@apply py-[17.63vw] px-[2.78vw] bg-white;

		.Container {
			@apply flex justify-start items-start space-x-[10.69vw] w-[86.45vw];

			.Content {
				@apply space-y-[2.78vw] w-[51.25vw];

				.Texts {
					@apply space-y-[2.78vw];

					>span {
						@apply text-2xl lg:text-[2.5vw] !leading-[140%] tracking-[-0.025em];
					}

					ul {
						@apply mt-[2.78vw];

						li {
							@apply flex justify-start items-start space-x-[1.73vw] py-[2.78vw] border-t border-[#CCCCCC];

							img {
								@apply w-[1.11vw] mt-1;
							}

							p {
								@apply block lg:text-[1.66vw] !leading-[140%]
							}
						}
					}
				}
			}
		}
	}

	.Engine {
		@apply mx-[2.78vw] relative h-[100svh] overflow-hidden bg-white;

		img {
			@apply w-full h-full object-cover object-center;
			clip-path: polygon(15% 85%, 85% 85%, 85% 15%, 15% 15%);
		}

		.Overlay {
			@apply absolute w-full h-full text-white;

			span {
				@apply text-[2.22vw] leading-[140%] tracking-[0.025em];

				&.FindOut {
					@apply absolute bottom-[2.78vw] right-[2.78vw] underline underline-offset-4
				}
			}

			h2 {
				@apply font-semibold text-[12.15vw] tracking-[0.025vw] leading-[100%]
			}
		}
	}

	.Approach {
		@apply pt-[11.11vw] px-[2.78vw] bg-white;

		.Container {
			@apply space-x-[7.78vw] flex justify-start items-start;

			.Content {
				@apply w-[70.48vw];

				.TextAnim span {
					@apply block text-2xl lg:text-[2.5vw] !leading-[140%] tracking-[-0.025em];
				}

				.Approaches {
					@apply mt-[11.11vw] flex items-start justify-start space-x-[9.37vw] space-y-[11.80vw];

					.Left,
					.Right {
						@apply space-y-[5.55vw] w-[30.55vw];

						>div {
							@apply space-y-[2vw];

							span {
								@apply text-[3.88vw] leading-[120%] tracking-[-0.025em] font-medium opacity-0
							}

							>div {
								@apply opacity-0;

								p {
									@apply text-[1.67vw] leading-[140%]
								}
							}
						}
					}
				}
			}
		}
	}

	.Thingy {
		@apply py-[16.67vw] overflow-hidden bg-white;

		h3 {
			@apply text-[15.55vw] font-semibold leading-[100%] tracking-[-0.025em] whitespace-nowrap inline-flex items-center;

			svg {
				@apply w-[10.41vw] mx-[5.13vw]
			}
		}
	}

	.Solution {
		@apply bg-[#121212] pt-[4.16vw] px-[2.78vw];

		.Content {
			@apply mt-[14.02vw] text-white;

			h4 {
				@apply text-[6.66vw] font-semibold tracking-[-0.025em] leading-[100%] ml-[7.77vw] max-w-[59.72vw] mx-auto;
			}

			.Top {
				@apply mt-[8.33vw];

				.Texts {
					@apply space-y-[2vw] ml-[32.5vw] max-w-[54.16vw];

					span {
						@apply block text-2xl lg:text-[2.5vw] !leading-[140%] tracking-[-0.025em] opacity-0;
					}

					p {
						@apply block lg:text-[1.66vw] !leading-[140%] opacity-0
					}
				}

				.Solutions {
					@apply mt-[11.11vw] flex items-start justify-start space-x-[10.55vw];

					.Left {
						@apply space-y-[57.63vw] -mt-[21.52vw];

						img {
							&:nth-child(2) {
								@apply w-[20.83vw];
							}

							&:nth-child(2) {
								@apply w-[14.30vw] ml-[7.63vw];
							}
						}
					}

					.Container {
						@apply space-y-[11.11vw] w-[30.56vw];

						>div {
							@apply space-y-[2vw];

							span {
								@apply text-[3.88vw] leading-[120%] tracking-[-0.025em] font-medium;
							}

							ul {
								@apply pl-[2vw];

								li {
									@apply text-[1.67vw] leading-[140%] list-disc
								}
							}
						}
					}

					.Right {
						img {
							@apply mt-[25.34vw] w-[20.83vw]
						}
					}
				}
			}

			.Bottom {
				@apply mt-[24.86vw] pb-[24.86vw] w-[42.46vw] mx-auto;

				h5 {
					@apply font-semibold text-[8.88vw] leading-[100%] tracking-[-0.025em] text-white;

					.top {
						svg {
							@apply w-[19.79vw]
						}
					}

					.bottom {
						@apply block;
					}
				}

				>span {
					@apply text-2xl lg:text-[2.5vw] !leading-[140%] tracking-[-0.025em];
				}

				p {
					@apply block lg:text-[1.66vw] !leading-[140%]
				}
			}
		}
	}
}

.TextAnim {
	@apply overflow-hidden;
}

.Modal.lenis {
	height: auto;
}

.lenis.lenis-smooth {
	scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
	overscroll-behavior: contain;
}

.lenis.lenis-stopped {
	overflow: hidden;
}

.lenis.lenis-scrolling iframe {
	pointer-events: none;
}

.lenis.lenis-stopped {
	overflow: hidden;
}</style>