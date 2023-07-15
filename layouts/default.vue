<template>
	<div>
		<Navigation />
		<nuxt/>
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
			const lenis = new Lenis({duration: 2})

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
	
</style>