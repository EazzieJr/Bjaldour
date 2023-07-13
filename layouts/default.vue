<template>
	<div>
		<Navigation />
		<nuxt/>
		<Footer />
	</div>
</template>

<script>
import { mapMutations } from 'vuex'

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
	},

	mounted() {
		this.getCurrentScreen()
	}
}
</script>

<style lang="postcss">
	
</style>