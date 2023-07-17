<template>
	<div class="IndexDesktop">
		<section class="Hero">
			<div class="Container">
				<div class="Image">
					<img src="/images/hero-image.png" alt="">
				</div>

				<div class="TextArrow">
					<h1>
						Bjaldour
					</h1>

					<img src="/svg/arrow-down.svg" alt="">
				</div>
			</div>
		</section>

		<section class="About">
			<div class="Container">
				<Tag text="About" />

				<div class="Content">
					<div class="Texts">
						<span>
							The leading AI company driving innovation through state-of-the-art AI, ML, and DL technologies. Our groundbreaking SaaS products and tech hardware solutions are designed to supercharge your business and propel you ahead of the competition.
						</span>
	
						<p>
							Welcome to Bjaldour, where cutting-edge AI technology meets innovative SaaS products and tech hardware solutions. We're revolutionizing industries by harnessing the power of artificial intelligence, machine learning, and deep learning to create products that drive meaningful change. Explore our website and unlock a world of possibilities for your business.
						</p>
					</div>

					<ul>
						<li>
							<img src="/svg/tiny-star.svg" alt="">
							
							<span>
								Learn More About Us
							</span>
						</li>

						<li>
							<img src="/svg/tiny-star.svg" alt="">
							
							<span>
								Find out more about our engineering background
							</span>
						</li>

						<li>
							<img src="/svg/tiny-star.svg" alt="">
							
							<span>
								Research and development team
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="Insights">
			<div class="Container">
				<div class="Texts">
					<h4>
						We have helped over 500+ businesses generate over $500m revenue using our AI/ML models
					</h4>

					<p>
						From predictive analytics and natural language processing to computer vision and robotic automation, our products are designed to enhance productivity, streamline processes, and drive growth. 
					</p>

					<div class="Action start">
						<img src="/svg/tiny-star-white.svg" alt="">
							
						<span>
							See our yearly insights
						</span>
					</div>
				</div>

				<div class="Image">
					<img src="/images/insights-image.png" alt="">
				</div>
			</div>
		</section>

		<section class="Testimonials">
			<div class="Container">
				<Tag text="Testimonials" />

				<div class="Content">
					<div v-for="(testimony, index) in testimonials" :key="index" class="Testimony">
						<p>
							{{ testimony.testimony }}
						</p>

						<span>{{ testimony.name }}, {{ testimony.title }}</span>
					</div>

					<div class="WWU start">
						<img src="/svg/tiny-star.svg" alt="">
							
						<span>
							Let’s work together
						</span>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default {
	data() {
		return {
			testimonials: [
				{
					testimony: "Working with Bjaldour has been a game-changer for our organization. Their AI solutions have revolutionized our operations and helped us achieve unprecedented levels of efficiency and growth.",
					name: "John Doe",
					title: "CEO of ABC Corporation"
				},
				{
					testimony: "Working with Bjaldour has been a game-changer for our organization. Their AI solutions have revolutionized our operations and helped us achieve unprecedented levels of efficiency and growth.",
					name: "John Doe",
					title: "CEO of ABC Corporation"
				},
				{
					testimony: "Thanks to Bjaldour, we were able to automate critical processes and make data-driven decisions with ease. Their solutions have truly transformed the way we do business.",
					name: "John Doe",
					title: "CEO of ABC Corporation"
				},
			]
		}
	},

	methods: {
		animateInsights() {
			const image = document.querySelector(".Insights .Image img")

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".Insights .Texts",
					start: "bottom bottom",
					endTrigger: image.parentNode,
					end: "center center",
					// markers: true,
					scrub: true,
					invalidateOnRefresh: true
					// pin: image
				}
			})

			tl.fromTo(image, {
				y: "-18.19vw",
				x: "79.73vw"
			}, {
				x: "70vw", y: 0, ease: "none"
			})

			tl.to(image, {
				x: "0", y: "18.19vw", scale: 1, ease: "none"
			})
		}

		
	},

	mounted() {
		this.animateInsights()
	}
}
</script>

<style lang="postcss" scoped>
.IndexDesktop {
	.Hero {
		.Container {
			@apply relative;

			.Image {
				@apply h-auto w-full;

				img {
					@apply object-cover w-full h-full object-center
				}
			}

			.TextArrow {
				@apply absolute bottom-0 p-5 pb-10 lg:px-[2.78vw] lg:pb-[5.56vw] w-full flex justify-between items-baseline;

				h1 {
					@apply text-[17.78vw] font-semibold text-white tracking-[-2.5%] leading-[12.5vw];
				}

				img {
					@apply w-[5.13vw]
				}
			}
		}
	}

	.About {
		@apply pt-10 px-5 lg:pt-[5.56vw] lg:px-[2.78vw];

		.Container {
			@apply flex justify-between items-start;

			.Content {
				@apply space-y-10 lg:space-y-16 xl:space-y-20 w-[62.5vw] mt-2;

				.Texts {
					@apply space-y-5 lg:space-y-7 xl:space-y-10;

					span {
						@apply text-2xl lg:text-[2.5vw] !leading-[140%] tracking-[-0.025em] font-medium;
					}

					p {
						@apply block lg:text-[1.66vw] !leading-[140%]
					}
				}

				ul {
					@apply space-y-5;

					li {
						@apply flex justify-start items-center space-x-2.5 lg:space-x-[0.83vw];

						img {
							@apply w-3.5 lg:w-[1.11vw]
						}

						span {
							@apply underline underline-offset-4 lg:underline-offset-[0.5vw] lg:text-[1.67vw] !leading-[140%]
						}
					}
				}
			}
		}
	}

	.Insights {
		@apply pt-60 bg-[#121212] overflow-hidden;

		.Container {
			.Texts {
				@apply px-5 lg:px-[2.78vw] w-[88.33vw];

				h4 {
					@apply text-white font-semibold text-[8.33vw] leading-[80%] tracking-[-0.025em];
				}
				
				p, .Action {
					@apply ml-[6.94vw] text-white;
				}

				p {
					@apply lg:text-[1.66vw] mt-[5.55vw] leading-[120%] tracking-[-0.025em] max-w-[30vw]
				}

				.Action {
					@apply space-x-2.5 lg:space-x-[0.83vw] mt-[14.30vw];

					img {
						@apply w-3.5 lg:w-[1.11vw]
					}

					span {
						@apply underline underline-offset-4 lg:underline-offset-[0.5vw] lg:text-[1.67vw] !leading-[140%]
					}
				}
			}

			.Image {
				@apply h-[79.37vw] mt-[5.90vw];

				img {
					@apply w-full scale-[0.5] origin-top-left;
				}
			}
		}
	}

	.Testimonials {
		@apply pt-10 lg:pt-[5.55vw] px-5 lg:px-[2.78vw] pb-16 lg:pb-[9.37vw];

		.Container {
			@apply space-y-10 lg:space-y-[5.55vw];

			.Content {
				@apply pl-8 lg:pl-[2.70vw] space-y-20 lg:space-y-[11.38vw];

				.Testimony {
					@apply space-y-5 lg:space-y-[2.78vw] max-w-[45.83vw];

					p {
						@apply text-2xl lg:text-[2.5vw] !leading-[120%] tracking-[-0.025em] font-medium;
					}

					span {
						@apply block lg:text-[1.66vw] !leading-[140%]
					}
				}

				.WWU {
					@apply space-x-2.5 lg:space-x-[0.83vw];

					img {
						@apply w-3.5 lg:w-[1.11vw]
					}

					span {
						@apply underline underline-offset-4 lg:underline-offset-[0.5vw] lg:text-[1.67vw] !leading-[140%]
					}
				}
			}
		}
	}
}
</style>