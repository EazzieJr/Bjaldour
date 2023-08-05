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

				<div class="Logo">
					<nuxt-link to="/">
						ScantAI
					</nuxt-link>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

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

	methods: {
		intiAnimations() {

		},

		scrollListen() {
			const nav = document.querySelector("nav")
			
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: nav,
					start: "+=" + nav.clientHeight * 2,
					toggleActions: "play none none reverse"
				}
			})
			
			tl.to(nav, {
				yPercent: -100,
				duration: 1,
				ease: "power3.inOut"
			})
		}
	},

	mounted() {
		setTimeout(() => {
			this.scrollListen()
		}, 1000)
	}
}
</script>

<style lang="postcss" scoped>
nav {
	@apply sticky top-0 bg-white p-5 lg:p-[2.78vw] md:pb-[6.66vw] z-[1000];

	.NavContainer {
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
				@apply col-span-2
			}
		}
	}
}
</style>
