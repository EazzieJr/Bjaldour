<template>
	<div class="Project">
		<nav>
			<div class="NavContainer">
				<div class="Left Action" @click="openHighlight">
					<div class="Top start">
						<span>
							Casper AI
						</span>

						<img src="/svg/chevron-down.svg" alt="">
					</div>

					<div class="Mid">
						<p>
							CasperAI is our flagship AI product that leverages ML algorithms and natural language processing (NLP) to automate complex business processes. By combining advanced AI capabilities with intuitive interfaces, CasperAI empowers organizations to streamline operations, reduce manual efforts, and enhance productivity.
						</p>
					</div>

					<div class="Bottom between">
						<div class="WWB">
							<img src="/svg/tiny-star.svg" alt="">
					
							<span>
								Let’s work together
							</span>
						</div>

						<button class="Close" @click="closeHighlight">
							Close
						</button>
					</div>
				</div>

				<div class="Mid end md:block">
					<button class="Back">
						Back
					</button>
				</div>

				<div class="Right end">
					<nuxt-link to="/">
						Research
					</nuxt-link>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'

export default {
	data() {
		return {
			highlighted: false
		}
	},
	
	methods: {
		...mapMutations(['setIsMobile']),

		getCurrentScreen() {
			this.currentScreen = window.innerWidth

			window.addEventListener("resize", () => {
				this.currentScreen = window.innerWidth

				if (this.currentScreen < 767) {
					this.setIsMobile(true)
				} else {
					this.setIsMobile(false)
				}
			})

			if (this.currentScreen < 767) {
				this.setIsMobile(true)
			} else {
				this.setIsMobile(false)
			}
		},

		initLenis() {
			const lenis = new Lenis({ duration: 2 })

			lenis.on('scroll', (e) => {
				// console.log(e)
			})

			function raf(time) {
				lenis.raf(time)
				requestAnimationFrame(raf)
			}

			requestAnimationFrame(raf)
		},

		openHighlight() {
			const tl = gsap.timeline()

			// tl.set(".Left.Action .Mid, .Left.Action .Bottom", { display: "block" })

			tl.to('.Left.Action', {
				width: "36.94vw",
				height: "22.77vw",
				padding: "2.78vw",
				cursor: "auto",
				ease: "back"
			})

			tl.to(".Left.Action .Mid, .Left.Action .Bottom", {
				opacity: 1,
				stagger: 0.2
			})
		
			this.highlighted = !this.highlighted
		},
		
		closeHighlight() {
			const tl = gsap.timeline()
			
			tl.to(".Left.Action .Mid, .Left.Action .Bottom", {
				opacity: 0,
				duration: 0.2,
				// onComplete: () => {gsap.set(".Left.Action .Mid, .Left.Action .Bottom", {display: "none"})}
				// stagger: 0.2
			})

			tl.to('.Left.Action', {
				width: "12.25vw",
				height: "4.72vw",
				padding: "1.38vw",
				cursor: "pointer",
				ease: "back.in"
			})
			
			this.highlighted = !this.highlighted
		}
	},

	mounted() {
		this.getCurrentScreen()
		this.initLenis()
	}
}
</script>

<style lang="postcss">
.Project {
	nav {
		@apply p-5 md:p-[1.67vw] sticky top-0;

		.NavContainer {
			@apply md:h-[4.72vw] grid grid-cols-2 md:grid-cols-3 items-center;

			.Left {
				@apply p-4 md:p-[1.38vw] rounded-lg md:rounded-[0.83vw] border md:border-[0.069vw] border-[#F1F1F1] md:w-[12.25vw] md:h-[4.72vw] overflow-hidden bg-[#FAFAFA] space-y-5 md:space-y-[2.78vw] cursor-pointer;
				
				.Top {
					@apply space-x-[1.38vw];
					
					span {
						@apply text-[1.67vw] font-semibold tracking-[-0.025em] leading-[120%]
					}
					
					img {
						@apply w-[1.11vw]
					}
				}

				.Mid {
					@apply opacity-0;

					p {
						@apply block text-sm lg:text-[1.25vw] !leading-[120%]
					}
				}

				.Bottom {
					@apply opacity-0;
					
					.WWB {
						@apply flex justify-start items-center space-x-2.5 lg:space-x-[0.83vw];

						img {
							@apply w-3.5 lg:w-[1.11vw]
						}

						span {
							@apply underline underline-offset-4 lg:underline-offset-[0.5vw] text-sm lg:text-[1.11vw] !leading-[140%]
						}
					}

					button {
						@apply text-sm lg:text-[1.11vw] !leading-[140%];
					}
				}
			}

			.Mid {
				@apply md:place-self-center;
				
				button {
					@apply md:text-[1.67vw] font-bold tracking-[-0.025em]
				}
			}

			.Right {
				a {
					@apply md:text-[1.67vw] font-bold tracking-[-0.025em] w-fit
				}
			}
		}
	}
}
</style>