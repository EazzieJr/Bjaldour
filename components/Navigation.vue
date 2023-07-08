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
					<li v-for="link in navlinks" :key="link">
						<nuxt-link to="/">
							{{ link }}
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
export default {
	data() {
		return {
			navlinks: [
				"Home",
				"Projects",
				"About",
				"Resources"
			],

			socials: [
				"Twitter",
				"Instagram",
				"LinkedIn",
			]
		}
	}
}
</script>

<style lang="postcss" scoped>
nav {
	@apply p-5 lg:p-[2.78vw] bg-white;

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
			@apply hidden md:grid grid-cols-4;

			ul li, > div span, a {
				@apply font-semibold lg:text-xl xl:text-2xl xl:leading-7 tracking-[-0.025em] block w-fit
			}

			ul, > div {
				@apply space-y-1
			}

			.Logo {
				@apply text-right flex justify-end
			}
		}
	}
}
</style>
