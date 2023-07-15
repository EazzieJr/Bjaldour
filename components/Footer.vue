<template>
	<footer>
		<div class="TopFooter">
			<h6>
				<span class="top">
					Get in touch 
				</span>

				<span class="bottom">
					with us <span><img src="/images/get-in-touch.png" alt=""></span> today
				</span>
			</h6>

			<div class="Email between">
				<span>
					Email
				</span>

				<img src="/svg/arrow-right.svg" alt="">
			</div>
		</div>

		<div class="BottomFooter">
			<div class="Container">
				<div class="Tag start">
					<img src="/svg/tiny-star.svg" alt="">
							
					<span>
						Let’s work together
					</span>
				</div>

				<div class="Content">
					<ul v-for="(footerLink, index) in footerLinks.slice(0, 2)" :key="index">
						<li v-for="link in footerLink.links" :key="link">
							<nuxt-link :to="link.toLocaleLowerCase().split(' ').join('-')">
								{{ link }}
							</nuxt-link>
						</li>
					</ul>

					<ul>
						<li v-for="link in footerLinks[2].links" :key="link.title">
							<a class="start" :href="link.route" target="blank">
								<span>
									{{ link.title }}
								</span>

								<img src="/svg/up-right-arrow.svg" alt="">
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
export default {
	data() {
		return {
			footerLinks: [
				{
					links: [
						"Home",
						"About us",
						"Works",
						"Products",
						"Clients",
						"Contacts"
					],
				},

				{
					links: [
						"Term & Conditions",
						"Cookies policy",
						"Privacy",
					],
				},

				{
					links: [
						{
							title: "Twitter",
							route: ""
						},

						{
							title: "Instagram",
							route: ""
						},

						{
							title: "LinkedIn",
							route: ""
						}
					],
				},
			]
		}
	},

	methods: {
		animateFooter() {
			const topFooter = document.querySelector('.TopFooter')
			const bottomFooter = document.querySelector('.BottomFooter')
			
			gsap.fromTo(bottomFooter.firstChild, {
				y: "-100%"
			}, {
				scrollTrigger: {
					trigger: topFooter,
					start: "bottom bottom",
					endTrigger: bottomFooter,
					end: "bottom bottom",
					scrub: true,
				}, y: 0, ease: 'none'
			})
		}
	},

	mounted() {
		this.animateFooter()
	}
}
</script>

<style lang="postcss" scoped>
footer {
	.TopFooter {
		@apply pt-20 lg:pt-[7.3vw] pb-24 lg:pb-[8.33vw] bg-[#FAFAFA] px-5 lg:px-[2.78vw] grid grid-cols-1;

		h6 {
			@apply font-semibold text-7xl md:text-[13.2vw] tracking-[-0.025em] leading-[120%] md:leading-[9.30vw] md:space-y-[1.39vw];

			span img {
				@apply w-16 md:w-[16.52vw] md:mx-5 lg:mx-[2.78vw] inline
			}

			.top {
				@apply block;
			}

			.bottom {
				@apply block md:inline-flex items-center;
			}
		}

		.Email {
			@apply border-b-2 border-black pb-4 md:pb-[1.67vw] mt-20 md:mt-[11.11vw] w-full max-w-[280px] md:max-w-[36.6vw] place-self-end mr-5 md:mr-[15.48vw];

			span {
				@apply block text-3xl md:text-[4.44vw] xl:leading-[3.125vw];
			}

			img {
				@apply w-7 md:w-[2.36vw] xl:w-auto 
			}
		}
	}

	.BottomFooter {
		@apply bg-[#F1F1F1] pt-20 md:pt-[8.33vw] pb-24 md:pb-[11.67vw] px-5 lg:px-[2.78vw] overflow-hidden;
		
		.Container {
			@apply md:flex justify-between items-start space-y-10 md:space-y-0;
			
			.Tag {
				@apply space-x-2.5 lg:space-x-[0.83vw];

				img {
					@apply w-3.5 lg:w-[1.11vw]
				}

				span {
					@apply underline underline-offset-4 lg:underline-offset-[0.5vw] lg:text-[1.67vw] !leading-[140%]
				}
			}

			.Content {
				@apply md:w-[60vw] lg:w-[54.58vw] grid grid-cols-2 gap-y-8 md:flex md:space-x-[5.76vw];

				ul {
					@apply w-fit space-y-4 lg:space-y-[1.67vw];

					li {
						@apply font-medium !leading-[130%] w-fit text-xl lg:text-[2.22vw] tracking-[-0.015em];

						a {
							@apply space-x-2.5 lg:space-x-[0.69vw];

							img {
								@apply w-7 lg:w-[2.78vw]
							}
						}
					}
				}
			}
		}
	}
}
</style>