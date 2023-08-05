<template>
	<nav>
		<div class="NavContainer">
			<div class="MobileView between">
				<div class="Logo">
					<nuxt-link to="/">
						ScantAI
					</nuxt-link>
				</div>

				<button class="Burger">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_626_966)">
					<rect y="12" width="4" height="20" transform="rotate(-90 0 12)" fill="black"/>
					<path d="M8 0H12V20H8V0Z" fill="black"/>
					</g>
					<defs>
					<clipPath id="clip0_626_966">
					<rect width="20" height="20" fill="white"/>
					</clipPath>
					</defs>
					</svg>
				</button>
			</div>

			<div class="DesktopView">
				<ul class="Navlinks">
					<li v-for="link in navlinks" :key="link.name">
						<nuxt-link :to="`/${link.route}`">
							{{ link.name }}
						</nuxt-link>
					</li>
				</ul>
				
				<ul class="Socials">
					<li v-for="link in socials" :key="link">
						<a href="/">
							{{ link }}
						</a>
					</li>
				</ul>

				<div class="Reach">
					<span>
						Lagos, Nigeria
					</span>

					<span>
						Bjaldour AI Inc.
					</span>

					<a href="/">
						+2349014386583
					</a>

					<div class="start">
						<span>
							2019
						</span>

						<span>
							2023
						</span>
					</div>
				</div>

				<div class="Logo" :class="{ 'show': menuOpened }">
					<nuxt-link to="/">
						ScantAI
					</nuxt-link>

					<button class="close" v-if="menuOpened" @click="toggleMenuState">
						<img src="/svg/opened-menu.svg" alt="">
					</button>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
import { mapState, mapMutations } from "vuex"

export default {
	data() {
		return {
			navlinks: [
				{
					name: "Home",
					route: ""
				},
				{
					name: "Projects",
					route: "projects"
				},
				{
					name: "About",
					route: ""
				},
				{
					name: "RanD",
					route: "research"
				}
			],

			socials: [
				"Twitter",
				"Instagram",
				"LinkedIn",
			]
		}
	},

	computed: {
		...mapState(["menuOpened"])
	},
	
	methods: {
		...mapMutations(["toggleMenuState"]),
		
		intiAnimations() {
			const nav = document.querySelector("nav")
			const navContainer = document.querySelector(".NavContainer")

			gsap.to(navContainer, {
				y: 0,
				duration: 1,
			})
		},

		scrollListen() {
			const nav = document.querySelector("nav")
			const menuButton = document.querySelector(".MenuButton button")
			
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: nav,
					start: "+=" + nav.clientHeight * 2,
					toggleActions: `play none none ${this.menuOpened ? 'none' : 'reverse'}`
				}
			})

			
			tl.to(nav, {
				yPercent: -100,
				duration: 1,
				ease: "power3.inOut"
			})

			tl.to(menuButton, {
				y: 0,
				ease: "power3.inOut"
			}, 0.5)
		}
	},

	mounted() {
		setTimeout(() => {
			this.intiAnimations()
			this.scrollListen()
		}, 500)
	}
}
</script>

<style lang="postcss" scoped>
nav {
	@apply sticky top-0 bg-white z-[1000];

	.NavContainer {
		@apply -translate-y-full p-5 md:p-[2.78vw] md:pb-[6.66vw];
		.MobileView {
			@apply md:hidden;

			.Logo {
				@apply text-black text-xl font-semibold tracking-[-0.025em]
			}

			.Burger {
				
			}
		}

		.DesktopView {
			@apply hidden md:grid grid-cols-11;

			ul li, > div span, a {
				@apply font-semibold lg:text-xl xl:text-2xl xl:leading-7 tracking-[-0.025em] block w-fit
			}

			ul, > div {
				@apply space-y-1
			}

			ul, .Reach {
				@apply col-span-3
			}

			.Logo {
				@apply col-span-2;

				&.show {
					@apply flex justify-between items-start;
				}

				.close {
					@apply w-5 lg:w-[1.52vw]
				}
			}
		}
	}
}
</style>
