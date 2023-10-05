<template>
	<div class="ResearchDesktop">
		<section class="Hero">
			<h1>
				<span class="OverflowDecoy one whitespace-pre">Research &</span>

				<span class="OverflowDecoy two">Development</span>
			</h1>
		</section>

		<section class="AfterHero">
			<div class="Container">
				<div class="Top">
					<div class="Texts">
						<span>
							Our groundbreaking SaaS products and tech hardware solutions are designed to supercharge your business and propel you ahead of the competition.
						</span>
	
						<p>
							We're revolutionizing industries by harnessing the <br> power of artificial intelligence, machine learning, <br> and deep learning to create products that drive <br> meaningful change.
						</p>
					</div>

					<div class="WWB">
						<img src="/svg/tiny-star.svg" alt="">
						
						<span>
							See what we’re building
						</span>
					</div>
				</div>

				<div class="Video center">
					<img src="/images/luna-image.png" alt="">

					<button class="Plat">
						Play
					</button>
				</div>

				<div class="Bottom">
					<div class="Texts">
						<h2>
							The leading AI company driving innovation through state-of-the-art AI, ML, and DL technologies
							<span class="Decoy">
							</span>
							<span class="Star"><img src="/svg/large-star.svg" alt=""></span>
						</h2>

						<p>
							Welcome to Bjaldour, where cutting-edge AI technology meets innovative SaaS products and tech hardware solutions. We're revolutionizing industries by harnessing the power of artificial intelligence, machine learning, and deep learning to create products that drive meaningful change. Explore our website and unlock a world of possibilities for your business.
						</p>
					</div>

					<div class="Marquee">
						<div v-for="(marquee, index) in marquees" :key="index" class="start">
							<img src="/svg/tiny-star.svg" alt="">

							<span>
								{{ marquee }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="Projects">
			<div class="Container">
				<div class="Project">
					<div class="Images">
						<div v-for="(project, index) in projects" :key="project.name"  :class="`Image ${index}`">
							<img :src="`/images/projects/${project.name}-noise.webp`"  alt="">
						</div>
					</div>
					
					<div class="Overlay start">
						<div class="OverflowDecoy">
							<span class="ProjectDeat">
								{{ currentText.deat }}
							</span>
						</div>

						<div class="InnerImage">
							<div class="Images">
								<div class="Image">
									<img :src="`/images/projects/${projects[2].name}.png`" alt="">
								</div>

								<div class="Image">
									<img :src="`/images/projects/${projects[1].name}.png`" alt="">
								</div>

								<div class="Image">
									<img :src="`/images/projects/${projects[0].name}.png`" alt="">
								</div>
							</div>
							
							<div class="Texts center">
								<div class="OverflowDecoy">
									<span class="Name">
										{{ currentText.name }}
									</span>
								</div>
							</div>
						</div>

						<div class="Slider">
							<div class="Position"></div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="LittleDeats">
			<div class="Texts">
				<span>
					By developing products like CasperAI, Luna, and Scant, we empower businesses with intelligent automation, data-driven insights, and streamlined document management.
				</span>

				<p>
					Join us on this journey of innovation as we <br> continue to pioneer the future of technology and <br> drive meaningful impact across industries.
				</p>
			</div>

			<div class="WWB">
				<img src="/svg/tiny-star.svg" alt="">
			
				<span>
					Let’s work together
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { Observer } from 'gsap/dist/Observer'

gsap.registerPlugin(ScrollTrigger, TextPlugin, Observer)

// import Splitting from "splitting"

export default {
	data() {
		return {
			marquees: [
				"Improve Route Optimization",
				"Improve Route Optimization",
				"Improve Route Optimization",
				"Improve Route Optimization",
				"Improve Route Optimization",
				"Improve Route Optimization",
				"Improve Route Optimization",
				"Improve Route Optimization",
				"Improve Route Optimization",
				"Improve Route Optimization",
			],

			projects: [
				{
					name: "casper",
					text: "Unleashing Intelligent Automation"
				},

				{
					name: "luna",
					text: "Empowering Smart Decision - Making"
				},

				{
					name: "scant",
					text: "Transforming Document Management"
				},
			],

			current: 0,
			currentText: {
				name: "casper",
				deat: "Unleashing Intelligent Automation"
			},
		}
	},

	watch: {
		current(newVal, oldVal) {
			if (newVal > oldVal) {
				this.next(newVal, oldVal)
			} else {
				this.previous(newVal, oldVal)
			}
		}
	},

	methods: {
		splitTexts(el) {
			const text = el
			const textArray = text.innerHTML.split('')
			text.innerHTML = ""
			
			if (textArray.includes("&")) {
				textArray.splice(10, 14)
			}
			// console.log(textArray)

			// Removing possible "amp;" from the array

			textArray.forEach((letter, index) => {
				const span = document.createElement("span");
				span.innerText = letter;
				text.appendChild(span);

				// console.log(span)
				gsap.set(span, {
					// opacity: 0,
					yPercent: 100,
					display: "block"
				})
			});
		},

		animateHero() {
			const textOne = document.querySelector("h1 span.one")
			const textTwo = document.querySelector("h1 span.two")

			this.splitTexts(textOne)
			this.splitTexts(textTwo)

			gsap.set(textTwo, {xPercent: -25})

			gsap.to(textOne.children, {
				opacity: 1,
				stagger: 0.05,
				delay: 0.5,
				yPercent: 0,
				ease: "power3.out",
				duration: 1
			})

			gsap.to(textTwo.children, {
				opacity: 1,
				stagger: 0.05,
				delay: 0.55,
				yPercent: 0,
				ease: "power3.out",
				duration: 1
			})

			gsap.to(textOne, {
				scrollTrigger: {
					trigger: "nav",
					start: "top top",
					endTrigger: textOne,
					end: "bottom top",
					scrub: true,
					// markers: true
				}, xPercent: -15
			})

			gsap.to(textTwo, {
				scrollTrigger: {
					trigger: "nav",
					start: "top top",
					endTrigger: textOne,
					end: "bottom top",
					scrub: true,
					// markers: true
				}, xPercent: 0
			})
		},

		animateAfterHero() {
			const topSpan = document.querySelector(".AfterHero .Top .Texts span")
			const bottomP = document.querySelector(".AfterHero .Top .Texts p")
			
			gsap.fromTo([topSpan, bottomP], {opacity: 0}, {
				scrollTrigger: {
					trigger: ".AfterHero .Top",
					start: "top 80%",
				}, opacity: 1, stagger: 0.2, ease: "power3.out", duration: 1
			})

			const videoAnimation = gsap.to(".AfterHero .Video", {
				clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
				ease: "none"
			})
			const textAnimation = gsap.to(".AfterHero .Bottom .Texts h2 .Decoy", {
				text: {
					value: "The leading AI company driving innovation through state-of-the-art AI, ML, and DL technologies",
					delimiter: " "
				},
				onComplete: () => {
					gsap.to(".AfterHero .Bottom .Texts p", {
						opacity: 1,
						duration: 1.5,
						ease: "power3.out"
					})
				},
				ease: "none"
			})

			ScrollTrigger.create({
				trigger: ".AfterHero .Video",
				start: "center center",
				end: "+=200%",
				scrub: true,
				pin: true,
				animation: videoAnimation,
			})

			gsap.set(".AfterHero .Bottom .Texts p", {opacity: 0})
			
			ScrollTrigger.create({
				trigger: ".AfterHero .Bottom .Texts h2",
				start: "top bottom",
				end: "bottom 70%",
				scrub: true,
				// markers: true,
				animation: textAnimation,
			})
		},

		animateProjects() {
			ScrollTrigger.create({
				trigger: ".Projects",
				start: "center center",
				end: "+=300%",
				pin: true,
				scrub: true,
				onUpdate: ({ progress }) => {
					if (progress < 0.33) {
						this.current = 0
					} else if (progress >= 0.33 && progress < 0.66) {
						this.current = 1
					} else if (progress >= 0.66) {
						this.current = 2
					}
				}
			})
		},

		animateLittleDeats() {
			const topSpan = document.querySelector(".LittleDeats .Texts span")
			const bottomP = document.querySelector(".LittleDeats .Texts p")

			gsap.fromTo([topSpan, bottomP], { opacity: 0 }, {
				scrollTrigger: {
					trigger: ".LittleDeats",
					start: "top 80%",
				}, opacity: 1.6, stagger: 0.2, ease: "power3.inOut", duration: 1
			})
		},
		
		next(newVal, oldVal) {
			const tl = gsap.timeline({defaults: {ease: "power3.inOut", duration: 1.5}})

			const previousSlide = document.querySelectorAll(`.Project .Images .Image`)[oldVal]
			const currentSlide = document.querySelectorAll(`.Project .Images .Image`)[newVal]
			const previousSlideSmall = document.querySelectorAll(`.Project .InnerImage .Image`)[2 - oldVal]
			const currentSlideSmall = document.querySelectorAll(`.Project .InnerImage .Image`)[2 - newVal]

			tl.to(previousSlide.firstChild, {
				scaleY: 2,
			})

			tl.to(previousSlideSmall.firstChild, {
				scaleY: 2,
			}, "<")

			tl.to(".Project > .Images", {
				y: newVal == 1 ? -100 + "vh" : -200 + "vh",
			}, "<")

			tl.to(".Slider > .Position", {
				y: newVal == 1 ? +100 + "%" : +200 + "%",	
			}, "<")

			tl.to(".Project .InnerImage .Images", {
				y: newVal == 1 ? -26.87 + "vw" : +0 + "vw",
			}, "<")

			tl.to(".ProjectDeat", {
				y: "-100%", duration: 0.8,
				onComplete: () => {
					this.currentText.deat = this.projects[newVal].text
					gsap.set(".ProjectDeat", { y: "100%", color: newVal === 1 ? "black" : "white" })
					gsap.to(".ProjectDeat", {
						y: 0,
						duration: 0.8
					})
				}
			}, "<")
			
			tl.fromTo(currentSlide.firstChild, {scaleY: 2, duration: 0}, {
				scaleY: 1,
			}, "<")

			tl.fromTo(currentSlideSmall.firstChild, {scaleY: 2, duration: 0}, {
				scaleY: 1,
			}, "<")

			tl.to(".InnerImage .Name", {
				y: "-100%", duration: 0.8,
				onComplete: () => {
					this.currentText.name = this.projects[newVal].name
					gsap.set(".InnerImage .Name", { y: "100%" })
					gsap.to(".InnerImage .Name", {
						y: 0,
						duration: 0.8
					})
				}
			}, "<")
		},

		previous(newVal, oldVal) {
			console.log("lmao")
			const tl = gsap.timeline({ defaults: { ease: "power3.inOut", duration: 1.5 } })

			const previousSlide = document.querySelectorAll(`.Project .Images .Image`)[oldVal]
			const currentSlide = document.querySelectorAll(`.Project .Images .Image`)[newVal]
			const previousSlideSmall = document.querySelectorAll(`.Project .InnerImage .Image`)[2 - oldVal]
			const currentSlideSmall = document.querySelectorAll(`.Project .InnerImage .Image`)[2 - newVal]

			tl.to(previousSlide.firstChild, {
				scaleY: 2,
			})

			tl.to(previousSlideSmall.firstChild, {
				scaleY: 2,
			}, "<")

			tl.to(".Project > .Images", {
				y: newVal == 1 ? -100 + "vh" : +0 + "vh",

			}, "<")

			tl.to(".Slider > .Position", {
				y: newVal == 1 ? +100 + "%" : -0 + "%",
			}, "<")

			tl.to(".Project .InnerImage .Images", {
				y: newVal == 1 ? -26.87 + "vw" : -53.57 + "vw",
			}, "<")

			tl.to(".ProjectDeat", {
				y: "100%", duration: 0.8,
				onComplete: () => {
					this.currentText.deat = this.projects[newVal].text
					gsap.set(".ProjectDeat", { y: "-100%", color: newVal === 1 ? "black" : "white" })
					gsap.to(".ProjectDeat", {
						y: 0,
						duration: 0.8
					})
				}
			}, "<")

			tl.to(".Project .InnerImage .Images", {
				y: newVal == 1 ? -26.87 + "vw" : -53.57 + "vw",
			}, "<")

			tl.to(currentSlide.firstChild, {
				scaleY: 1,
			}, "<")

			tl.to(currentSlideSmall.firstChild, {
				scaleY: 1,
			}, "<")

			tl.to(".InnerImage .Name", {
				y: "100%", duration: 0.8,
				onComplete: () => {
					this.currentText.name = this.projects[newVal].name
					gsap.set(".InnerImage .Name", {y: "-100%"})
					gsap.to(".InnerImage .Name", {
						y: 0,
						duration: 0.8
					})
				}
			}, "<")
		}
	},

	mounted() {
		this.animateHero()
		this.animateAfterHero()
		this.animateProjects()
		this.animateLittleDeats()
	}
}
</script>

<style lang="postcss" scoped>
.ResearchDesktop {
	.Hero {
		@apply pt-[4vw] overflow-hidden;

		h1 {
			@apply font-semibold text-[24.86vw] leading-[80%] tracking-[-0.05em];

			span {
				@apply inline-flex items-center overflow-hidden
			}
		}
	}

	.AfterHero {
		@apply mt-[13.8vw] pb-[16.66vw];

		.Container {
			.Top {
				@apply ml-[34.72vw] space-y-[5.55vw] w-[46vw];
				
				.Texts {
					@apply space-y-[2.78vw];

					span {
						@apply text-2xl lg:text-[2.5vw] !leading-[140%] tracking-[-0.025em] font-medium;
					}

					p {
						@apply block lg:text-[1.66vw] !leading-[140%]
					}
				}

				.WWB {
					@apply flex justify-start items-center space-x-2.5 lg:space-x-[0.83vw];

					img {
						@apply w-3.5 lg:w-[1.11vw]
					}

					span {
						@apply underline underline-offset-4 lg:underline-offset-[0.5vw] lg:text-[1.67vw] !leading-[140%]
					}
				}
			}

			.Video {
				@apply px-5 lg:px-[2.78vw] mt-[12.5vw] mb-[9.72vw] relative h-[100svh] overflow-hidden;
				clip-path: polygon(15% 85%, 85% 85%, 85% 15%, 15% 15%);

				img {
					@apply w-full h-full object-cover object-center;
				}

				button {
					@apply bg-black rounded-full absolute text-white text-sm lg:text-[1.11vw] w-20 lg:w-[6.94vw] h-20 lg:h-[6.94vw];
				}
			}

			.Bottom {
				@apply space-y-[9.72vw] overflow-hidden;

				.Texts {
					@apply space-y-[5.55vw] w-[54.51vw] mx-auto;

					h2 {
						@apply text-[6.67vw] !leading-[100%] tracking-[-0.025em] font-semibold max-w-[64.65vw] indent-[7vw] relative text-[#E2E3E5];

						.Decoy {
							@apply absolute top-0 left-0 text-[#121212];
						}

						.Star {
							@apply w-fit inline-block -mt-[5vw] ml-[2.5vw];
							
							img {
								@apply w-[10.41vw]
							}
						}
					}

					p {
						@apply block lg:text-[1.66vw] !leading-[140%]
					}
				}

				.Marquee {
					@apply flex justify-start items-center space-x-[1.67vw];
					
					div {
						@apply flex justify-start items-center space-x-[1.67vw] lg:space-x-[0.83vw] shrink-0;

						img {
							@apply w-3.5 lg:w-[1.11vw]
						}

						span {
							@apply lg:text-[1.67vw] !leading-[140%] uppercase
						}
					}
				}
			}
		}
	}

	.Projects {
		.Project {
			@apply relative h-[100svh] overflow-hidden;
			
			> .Images {
				@apply h-[300svh];

				.Image {
					@apply h-[100svh] overflow-hidden;
					
					img {
						@apply w-full h-full object-cover object-center;
					}
				}
			}

			.Overlay {
				@apply absolute top-0 left-0 w-full h-full pl-[5.55vw];

				.OverflowDecoy {
					@apply overflow-hidden;
					
					 span {
						@apply text-[3.33vw] font-semibold tracking-[-0.025em] leading-[100%] block max-w-[22.7vw] text-white
					}
				}

				.InnerImage {
					@apply relative w-[41.11vw] h-[26.87vw] overflow-hidden bg-[#121212] ml-[1.11vw];

					.Images {
						@apply -translate-y-[53.74vw];

						.Image {
							@apply w-[41.11vw] h-[26.87vw] overflow-hidden;

							img {
								@apply object-cover object-center w-full h-full;
							}
						}
					}

					.Texts {
						@apply overflow-hidden absolute top-0 left-0 w-full h-full;

						.OverflowDecoy {
							@apply overflow-hidden;

							span {
								@apply block text-[6.67vw] !leading-[100%] tracking-[-0.025em] font-semibold max-w-[64.65vw] mx-auto text-center text-white capitalize;
							}
						}
					}
				}

				.Slider {
					@apply w-[0.27vw] bg-white bg-opacity-50 h-[13.33vw] ml-[16.11vw];

					.Position {
						@apply h-1/3 bg-white;
					}
				}
			}
		}
	}

	.LittleDeats {
		@apply space-y-[5.55vw] my-[16.66vw] w-[46vw] mx-auto;
		
		.Texts {
			@apply space-y-[2.78vw];

			span {
				@apply text-2xl lg:text-[2.5vw] !leading-[140%] tracking-[-0.025em] font-medium;
			}

			p {
				@apply block lg:text-[1.66vw] !leading-[140%]
			}
		}

		.WWB {
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
</style>