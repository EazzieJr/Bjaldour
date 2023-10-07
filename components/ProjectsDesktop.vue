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
						<button v-for="display in displays" :key="display" class="Display" :class="{'active': display === currentDisplay}" @click="changeDisplay(display)">
							{{ display }}
						</button>
					</div>

					<div class="Ammount">
						00/40
					</div>
				</div>

				<div class="Bottom Grid">
					<!-- <div class="Anchor"></div> -->
					<div v-for="(project, index) in projects" :key="index" class="Project" @click="openProject(index)">
						<div class="Image">
							<img class="w-full h-full" :src="`/images/projects/${index}.png`" alt="">
						</div>
						
						<div class="Text overflow-hidden">
							<p>
								{{ project.deat }}
							</p>
						</div>
					</div>
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

		<ProjectModal v-if="projectOpened" :data="modal" @close="closeProject" data-lenis-prevent/>
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
			displays: ["Grid", "Tiles"],
			currentDisplay: "Grid",
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

			modal: {
				deat: null,
				smallImage: null,
				bigImage: null,
				index: null
			},

			displayAnimating: false
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
			// gsap.set('body', { overflow: "hidden" })

			const images = document.querySelectorAll(".Project img")
			const selectedImage = images[index]
			const bigImage = `/images/projects/big-${index}.webp`
			const selectedProjectText = document.querySelectorAll(".Project p")[index]

			this.modal = {
				deat: this.projects[index].deat,
				smallImage: selectedImage,
				bigImage,
				index		
			}

			gsap.to(selectedProjectText, {
				opacity: 0,
				ease: "power3.in",
				// duration: 1
			})
		},

		closeProject(smallImage, done) {
			const images = document.querySelectorAll(".Project .Image")
			const selectedProjectText = document.querySelectorAll(".Project p")[this.modal.index]
			const state = Flip.getState(smallImage)
			images[this.modal.index].appendChild(smallImage)

			Flip.from(state, {
				// delay: 0.5,
				duration: 1.25,
				ease: "power4.inOut",
				onComplete: () => {
					this.projectOpened = !this.projectOpened
					gsap.to(selectedProjectText, {
						opacity: 1,
						ease: "power3.in",
						// duration: 1
					})
					gsap.set('body', { overflow: "auto" })
				}
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
				gsap.set(".word", { y: "100%" })
			})

			gsap.to(splittedText[0].lines, {
				y: 0,

				ease: "power3.inOut",
				duration: 1.25,
				stagger: 0.05
			})
		},

		// initModalAnimations() {
		// 	// this.initLenis()
		// 	this.animateModalHero()
		// 	this.animateModalAfterHero()
		// 	this.animateModalChallenges()
		// 	this.animateModalObjectives()
		// 	this.animateModalEngine()
		// },

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

		changeDisplay(display) {
			if (this.displayAnimating || this.currentDisplay === display) return
			this.displayAnimating = true
			this.currentDisplay = display

			// const anchor = document.querySelector(".Anchor")
			// const projects = document.querySelectorAll(".Project")
			const projectsContainer = document.querySelector(".AllProjects .Bottom")
			const state = Flip.getState(".AllProjects .Bottom, .AllProjects .Project")

			// projectsContainer.classList.remove(projectsContainer.classList[1])
			console.log(projectsContainer.classList)
			projectsContainer.classList.value = `Bottom ${display}`

			Flip.from(state, {
				duration: 1.25,
				ease: "power4.inOut",
				stagger: 0.05,
				// absolute: true,
				onComplete: () => {
					projectsContainer.classList.value = `Bottom ${display}`
					this.displayAnimating = false
				},
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
		@apply pt-[22.56vw] px-5 lg:px-[2.78vw];

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

			p {
				@apply duration-500
			}

			.Bottom {
				@apply relative w-full grid grid-cols-3 gap-y-[8.88vw] gap-x-[1.38vw];

				&.Grid {
					/* @apply grid grid-cols-3 gap-y-[8.88vw] gap-x-[1.38vw]; */

					.Project {
						@apply space-y-[1.04vw];
						/* clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); */

						.Image {
							@apply w-[30.55vw] h-[36.11vw];

							img {
								@apply w-full object-cover object-center;
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

				&.Tiles {
					@apply h-[196.11vw];

					.Project {
						@apply space-y-[1.04vw] absolute;
						/* clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); */

						.Image {
							/* @apply overflow-hidden w-[30.55vw] h-[36.11vw]; */

							img {
								@apply w-full object-cover object-center;
							}
						}

						.Text {
							p {
								@apply text-[1.67vw]
							}
						}

						&:nth-child(1) {
							@apply -top-[17.98vw] left-[16.80vw] w-[25.97vw];

							.Image {
								@apply w-full h-[38.19vw]
							}
						}

						&:nth-child(2) {
							@apply -top-[2.5vw] left-[47.36vw] w-[25.97vw];

							.Image {
								@apply w-full h-[36.11vw]
							}
						}

						&:nth-child(3) {
							@apply top-[32.91vw] left-[5.83vw] w-[25.97vw];
							
							.Image {
								@apply w-full h-[36.11vw]
							}
						}

						&:nth-child(4) {
							@apply top-[43.19vw] left-[66.66vw] w-[25.97vw];

							.Image {
								@apply w-full h-[36.11vw]
							}
						}

						&:nth-child(5) {
							@apply top-[79.30vw] left-[0vw] w-[25.97vw];

							.Image {
								@apply w-full h-[36.11vw]
							}
						}

						&:nth-child(6) {
							@apply top-[107.5vw] left-[41.66vw] w-[25.97vw];

							.Image {
								@apply w-full h-[36.11vw]
							}
						}

						&:nth-child(7) {
							@apply top-[137.77vw] left-[10.55vw] w-[25.97vw];

							.Image {
								@apply w-full h-[36.11vw]
							}
						}
					}
				}

				&.Stack {
					@apply h-[134.93vw];
					
					> div {
						@apply absolute top-0 left-0
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
}

.OverflowAssist {
	@apply overflow-hidden
}
</style>