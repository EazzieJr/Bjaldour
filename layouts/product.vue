<template>
	<div>
		<nav>
			<div class="NavContainer">
				<div class="Decoy"></div>

				<button class="Back">
					Back
				</button>

				<div class="Home end">
					<nuxt-link to="/">
						Home
					</nuxt-link>
				</div>
			</div>
		</nav>
		
		<nuxt />

		<Footer />
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
import Lenis from '@studio-freight/lenis'

export default {
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
		}
	},

	mounted() {
		this.getCurrentScreen()
		this.initLenis()
	}
}
</script>

<style lang="postcss">
nav {
	@apply p-5 md:p-[2.78vw] fixed top-0 left-0 right-0 z-50;

	.NavContainer {
		@apply grid grid-cols-3 md:grid-cols-3;

		.Decoy {
			/* @apply hidden md:block; */
		}

		button {
			@apply w-fit place-self-center
		}

		.Back, .Home {
			@apply md:text-[1.67vw] font-bold tracking-[-0.025em] text-white;
		}
	}
}
</style>