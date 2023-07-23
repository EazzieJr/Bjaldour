<template>
	<div class="Project">
		<nav>
			<div class="NavContainer">
				<div class="Left">
				</div>

				<div class="Mid end md:block">
					<button class="Back">
						Back
					</button>
				</div>

				<div class="Right hidden md:end">
					<nuxt-link to="/">
						Research
					</nuxt-link>
				</div>
			</div>
		</nav>

		<div class="ProjectButton">
			<button class="Top start" @click="openHighlight">
				<span>
					Casper AI
				</span>

				<img src="/svg/chevron-down.svg" alt="">
			</button>

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

				<button class="Close" @click.self="closeHighlight">
					Close
				</button>
			</div>
		</div>
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
			const mobile = window.matchMedia("(max-width: 767px)")

			tl.to('.ProjectButton', {
				width: mobile.matches ? "320px" : "36.94vw",
				height: mobile.matches ? "260px" : "22.77vw",
				padding: mobile.matches? "20px" : "2.78vw",
				// cursor: "auto",
				ease: "back"
			})

			tl.to('.ProjectButton .Top', {
				padding: 0,
				cursor: "auto",
				ease: "back"
			}, "<")

			tl.to(".ProjectButton .Mid, .ProjectButton .Bottom", {
				opacity: 1,
				stagger: 0.2
			})
		
			this.highlighted = !this.highlighted
		},
		
		closeHighlight() {
			const tl = gsap.timeline()
			const mobile = window.matchMedia("(max-width: 767px)")
			
			tl.to(".ProjectButton .Mid, .ProjectButton .Bottom", {
				opacity: 0,
			})

			tl.to('.ProjectButton .Top', {
				padding: mobile.matches ? "12px" : "1.38vw",
				// cursor: "auto",
				ease: "back"
			}, "<")

			tl.to('.ProjectButton', {
				width: mobile.matches ? "116px" :"12.25vw",
				height: mobile.matches ? "44px" :"4.72vw",
				padding: 0,
				// cursor: "pointer",
				// ease: "back.in"
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
		@apply p-5 md:p-[1.38vw] sticky top-0;

		.NavContainer {
			@apply h-11 md:h-[4.72vw] grid grid-cols-2 md:grid-cols-3 items-center;

			.Left {}

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

	.ProjectButton {
		@apply rounded-lg md:rounded-[0.83vw] border md:border-[0.069vw] border-[#F1F1F1] w-[116px] md:w-[12.25vw] h-11 md:h-[4.72vw] overflow-hidden bg-[#FAFAFA] space-y-5 md:space-y-[2.78vw] fixed top-5 left-5 md:top-[1.38vw] md:left-[1.38vw];
				
		.Top {
			@apply p-3 md:p-[1.38vw] space-x-3 md:space-x-[1.38vw];
			
			span {
				@apply md:text-[1.67vw] font-semibold tracking-[-0.025em] leading-[120%]
			}
			
			img {
				@apply w-3 md:w-[1.11vw]
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
}
</style>