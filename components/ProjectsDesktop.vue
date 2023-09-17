<template>
	<div class="ProjectsDesktop">
		<section class="Hero">
			<div class="Container">
				<h1>
					Solving problems with interesting technologies
				</h1>

				<p>
					At Bjaldour, we specialize in crafting content that explores the potential and applications of artificial intelligence and machine learning. Explore our range of content projects below and discover how we have collaborated with esteemed clients.
				</p>
			</div>
		</section>

		<section class="AllProjects">
			<div class="Container">
				<div class="Top between">
					<div class="Tabs start">
						<button v-for="display in displays" :key="display" class="Display" :class="{'active': display === currentDisplay}">
							{{ display }}
						</button>
					</div>

					<div class="Ammount">
						00/40
					</div>
				</div>

				<div class="Bottom">
					<div v-for="(project, index) in projects" :key="index" class="Project" @click="openProject(index)">
						<div class="Image">
							<img :src="`/images/projects/${index}.png`" alt="">
						</div>
						
						<div class="Text">
							<p>
								{{ project.deat }}
							</p>
						</div>
					</div>

					<img class="Test" src="/images/projects/0.png" @click="openProject">
				</div>
			</div>
		</section>

		<section class="Insights">
			<div class="Container">
				<h2>
					We have helped over 500+ businesses generate over $500m revenue using our AI/ML models
				</h2>

				<div class="Clients">
					<div class="top start">
						<img v-for="(client, index) in clients" :key="index" :src="`/images/clients/${client}.png`" :alt="`A small sized logo of ${client}`">
					</div>

					<div class="bottom start">
						<img v-for="(client, index) in clients" :key="index" :src="`/images/clients/${client}.png`" :alt="`A small sized logo of ${client}`">
					</div>
				</div>
			</div>
		</section>

		<ProjectModal v-if="projectOpened" data-lenis-prevent @openProject="openProject"/>
	</div>
</template>

<script>
import { gsap } from "gsap/dist/gsap"
import Lenis from '@studio-freight/lenis'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Flip } from "gsap/dist/Flip";

gsap.registerPlugin(ScrollTrigger, Flip)

export default {
	data() {
		return {
			lenis: null,
			displays: ["grid", "tiles"],
			currentDisplay: "grid",
			projectOpened: false,

			projects: [
				{ deat: "Safeguarding FinTech with SecurePay" },
				{ deat: "Transforming Patient Care with MediSys" },
				{ deat: "Enhancing Customer Experience with ChatX" },
				{ deat: "Optimizing Operations with TechOptima" },
				{ deat: "Personalizing the Shopping Experience with ShopSense" },
				{ deat: "Optimizing Logistics with TransTech" },
				{ deat: "Revolutionizing Sustainability with EcoSolutions" },
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
			]
		}
	},

	methods: {
		animateHero() {
			const splittedH1 = this.$splitting({ target: ".ProjectsDesktop > .Hero h1", by: "lines" });
			const splittedHerotext = this.$splitting({ target: ".Hero p", by: "lines" });
			const h1 = document.querySelector(".ProjectsDesktop h1")
			const heroText = document.querySelector(".ProjectsDesktop .Hero p")
			const tl = gsap.timeline()

			splittedH1[0].lines.forEach(line => {
				// console.log(line)
				const span = document.createElement("span")

				line.forEach(word => {
					const whitespace = document.createElement("span")
					whitespace.innerHTML = " "

					span.appendChild(word)
					span.appendChild(whitespace)
					// console.log(span, word.innerHTML)
				})

				h1.appendChild(span)

				gsap.set(span, { overflow: "hidden", display: "block" })
				gsap.set(".word", {y: "100%"})
			})

			splittedHerotext[0].lines.forEach(line => {
				// console.log(line)
				const span = document.createElement("span")

				line.forEach(word => {
					const whitespace = document.createElement("span")
					whitespace.innerHTML = " "

					span.appendChild(word)
					span.appendChild(whitespace)
					// console.log(span, word.innerHTML)
				})

				heroText.appendChild(span)

				gsap.set(span, { overflow: "hidden", display: "block" })
				gsap.set(".Hero p .word", { y: "100%", opacity: 0 })
			})

			tl.to(splittedH1[0].lines, {
				y: 0,

				ease: "power4.inOut",
				duration: 1.6,
				stagger: 0.05
			})

			tl.to(splittedHerotext[0].lines, {
				y: 0,
				ease: "power4.inOut",
				duration: 1,
				stagger: 0.01,
				opacity: 1
			}, 0.5)
			// console.log(result[0].lines);
		},

		openProject(index) {
			this.projectOpened = !this.projectOpened
			gsap.set('body', { overflow: "hidden"})
			// this.$nuxt.$root.$children[2].lenis.stop()
			setTimeout(() => {
				const images = document.querySelectorAll(".Project img")
				const selectedImage = images[index]
				const modalImage = document.querySelector(".Modal .BigImage")
				const state = Flip.getState(selectedImage)
				const otherImages= []
				modalImage.appendChild(selectedImage)
				images.forEach((el, elIndex) => {
					elIndex === index ? null : otherImages.push(el.parentElement.parentElement)
				})

				gsap.to(otherImages, {
					// opacity: 0,
					clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
					ease: "power4.inOut",
					duration: 1
					// scale: 0.9,
					// stagger: 0.05,
				})
				
				Flip.from(state, {
					// delay: 0.5,
					duration: 1,
					ease: "power4.inOut",
				})

				this.initModalAnimations()
			}, 100)
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
				gsap.set(".word", { y: "100%" })
			})

			gsap.to(splittedText[0].lines, {
				y: 0,

				ease: "power3.inOut",
				duration: 1.25,
				stagger: 0.05
			})
		},

		initModalAnimations() {
			this.initLenis()
			this.animateModalHero()
			this.animateModalAfterHero()
			this.animateModalChallenges()
			this.animateModalObjectives()
			this.animateModalEngine()
		},

		animateModalHero() {
			const tl = gsap.timeline({
				defaults: {
					ease: "power4.inOut",
					duration: 1.25
				}
			})

			this.splitAnimateTextLines(".ModalHeroText")

			tl.to(".SmallImage", {
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				// delay: 0.5
			})

			tl.fromTo(".SmallImage img", {
				scale: 1.5,
			}, {
				scale: 1,
			}, '<')
		},

		animateModalAfterHero() {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".AfterHero .Texts",
					start: "top 70%",
					end: "bottom",
					// markers: true,
					scroller: "#OverlayProject",
					toggleActions: "play none none reset"
				}
			})
			
			tl.fromTo(".AfterHero .Texts span, .AfterHero .Texts p", { yPercent: 100 }, {
				yPercent: 0, duration: 1, ease: "power3.out"
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
					markers: true,
					scroller: "#OverlayProject",
					scrub: true
				}, defaults: {ease: "none"}
			})
			
			gsap.fromTo(".Challenges .Texts span, .Challenges .Texts p", { opacity: 0 }, {
				scrollTrigger: {
					trigger: ".Challenges .Texts",
					start: "top 70%",
					end: "bottom",
					// markers: true,
					scroller: "#OverlayProject",
					toggleActions: "play none none reset"
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
					scroller: "#OverlayProject",
					toggleActions: "play none none reset"
				},
				opacity: 1, duration: 1.5, ease: "power3.out"
			})

			gsap.fromTo(".Objectives .Texts ul li", { opacity: 0 }, {
				scrollTrigger: {
					trigger: ".Objectives .Texts ul",
					start: "top 70%",
					end: "bottom",
					// markers: true,
					scroller: "#OverlayProject",
					toggleActions: "play none none reset"
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
					scroller: "#OverlayProject",
					pin: true
				}, clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", ease: "none"
			})
		},

		initLenis() {
			const wrapper = document.querySelector("#OverlayProject")
			this.lenis = new Lenis({ duration: 2, wrapper, lerp: 1 })
			console.log(this.lenis)

			this.lenis.on('scroll', (e) => {
				// console.log(e)
			})

			const raf = (time) => {
				this.lenis.raf(time)
				requestAnimationFrame(raf)
			}

			requestAnimationFrame(raf)
		},
	},

	mounted() {
		this.animateHero()
		// console.log(this.$nuxt.$root.$children)
		// this.openProject()
	}
}
</script>

<style lang="postcss" scoped>
.ProjectsDesktop {
	> .Hero {
		@apply pt-[4vw] px-5 lg:px-[2.78vw];

		.Container {
			@apply space-y-[4.16vw];

			h1 {
				@apply font-semibold text-[8.88vw] leading-[100%] tracking-[-0.025em]
			}

			p {
				@apply text-2xl lg:text-[2.5vw] !leading-[140%] ml-[15.97vw] max-w-[62.5vw];
			}
		}
	}

	.AllProjects {
		@apply px-5 lg:px-[2.78vw] pt-[21.52vw];

		.Container {
			@apply space-y-[3.82vw];
			
			.Top {
				.Tabs {
					@apply space-x-5 lg:space-x-[2.78vw];

					button {
						@apply text-[1.38vw] text-[#999999] uppercase tracking-[-0.025em];

						&.active {
							@apply text-black;
						}
					}
				}

				.Ammount {
					@apply text-[1.38vw];
				}
			}

			.Bottom {
				@apply grid grid-cols-3 gap-y-[8.88vw] gap-x-[1.38vw];

				.Project {
					@apply space-y-[1.04vw];
					clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

					.Image {
						@apply  overflow-hidden;

						img {
							@apply w-full;
						}
					}

					.Text {
						@apply pl-[4.58vw];

						p {
							@apply text-[1.67vw]
						}
					}
				}
			}
		}
	}

	.Insights {
		@apply my-[26.52vw] overflow-hidden;

		.Container {
			@apply space-y-[12.36vw];
			
			h2 {
				@apply text-[6.67vw] !leading-[100%] tracking-[-0.025em] font-semibold max-w-[64.65vw] mx-auto text-center;
			}
			
			.Clients {
				@apply space-y-[3.95vw];

				div {
					@apply space-x-[2.78vw];

					img {
						@apply w-[11.38vw];
					}
				}
			}
		}
	}

	.Modal {
		@apply fixed top-0 left-0 bottom-0 right-0 z-[1000] overflow-y-scroll;
		/* overscroll-behavior: contain; */
		&::-webkit-scrollbar {
			@apply opacity-0 hidden
		}

		.Hero {
			@apply w-full h-[100svh] overflow-hidden relative;

			.BigImage {
				@apply w-full h-full absolute z-[-1];

				img {
					@apply w-full h-full object-cover object-center !m-0;
				}
			}

			.SmallImage {
				@apply absolute w-[30.27vw] h-[37.98vw] z-[-1] overflow-hidden;
				clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)
			}

			.Overlay {
				@apply w-full h-full flex items-center px-[2.78vw] text-white;

				h1 {
					@apply font-semibold text-[8.88vw] leading-[110%] tracking-[-0.025em] opacity-0 w-full max-w-[80vw]
				}

				span {
					@apply block lg:text-[1.66vw] !leading-[100%] absolute right-[2.78vw] bottom-[2.78vw] font-semibold
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

					> span {
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

					
					> span {
						@apply text-2xl lg:text-[2.5vw] !leading-[140%] tracking-[-0.025em];
					}

					.Approaches {
						@apply mt-[11.11vw] flex items-start justify-start space-x-[9.37vw] space-y-[11.80vw];

						.Left, .Right {
							@apply space-y-[5.55vw] w-[30.55vw];

							> div {
								@apply space-y-[2vw];

								span {
									@apply text-[3.88vw] leading-[120%] tracking-[-0.025em] font-medium						
								}

								p {
									@apply text-[1.67vw] leading-[140%]
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
							@apply text-2xl lg:text-[2.5vw] !leading-[140%] tracking-[-0.025em];
						}

						p {
							@apply block lg:text-[1.66vw] !leading-[140%]
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
							
							> div {
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

					> span {
						@apply text-2xl lg:text-[2.5vw] !leading-[140%] tracking-[-0.025em];
					}

					p {
						@apply block lg:text-[1.66vw] !leading-[140%]
					}
			}
			}
		}
	}
}

.OverflowAssist {
	@apply overflow-hidden
}
</style>