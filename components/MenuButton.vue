<template>
	<div class="MenuButton">
		<button class="start" @click="toggleMenuState">
			<span>
				MENU
			</span>

			<img src="/svg/closed-menu.svg" alt="">
		</button>
	</div>
</template>

<script>
import { gsap } from 'gsap/dist/gsap' 
import { mapState, mapMutations } from "vuex"

export default {
	computed: {
		...mapState(["menuOpened"])
	},

	watch: {
		menuOpened() {
			if (this.menuOpened) {
				this.openNav()
			} else {
				this.closeNav()
			}
		}
	},
	
	methods: {
		...mapMutations(["toggleMenuState"]),
		
		openNav() {
			const nav = document.querySelector("nav")
			const menuButton = document.querySelector(".MenuButton button")
			
			gsap.to(nav, {
				yPercent: 0,
				duration: 1,
			})

			gsap.to(menuButton, {
				y: "100%",
			})
		},

		closeNav() {
			const nav = document.querySelector("nav")
			const menuButton = document.querySelector(".MenuButton button")
			
			gsap.to(nav, {
				yPercent: -100,
				duration: 1,
			})

			gsap.to(menuButton, {
				y: 0,
				delay: 0.5
			})
		}
	}
}
</script>

<style lang="postcss" scoped>

.MenuButton {
	@apply fixed right-5 top-5 lg:right-[2.78vw] lg:top-[2.78vw] z-[999] overflow-hidden;

	button {
		@apply space-x-2 md:space-x-[0.55vw] translate-y-full;

		span {
			@apply font-semibold md:text-[1.66vw] tracking-[-0.025em]
		}

		img {
			@apply w-5 lg:w-[1.80vw]
		}
	}
}
</style>