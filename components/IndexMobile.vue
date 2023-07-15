<template>
	<div class="IndexMobile">
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

					<div class="WWU">
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
	}
}
</script>

<style lang="postcss" scoped>
.IndexMobile {
	.Hero {
		@apply pt-20;
		
		.Container {
			@apply relative;

			.Image {
				@apply h-[500px] w-full;

				img {
					@apply object-cover w-full h-full object-center
				}
			}

			.TextArrow {
				@apply absolute bottom-0 p-5 w-full flex justify-between items-baseline;

				h1 {
					@apply text-[20vw] font-semibold text-white tracking-[-2.5%];
				}

				img {
					@apply w-6
				}
			}
		}
	}

	.About {
		@apply pt-10 px-5;

		.Container {
			@apply space-y-5 sm:space-y-0 sm:flex justify-between items-start;

			.Content {
				@apply pl-8 space-y-10 sm:w-[62.5vw];

				.Texts {
					@apply space-y-5;

					span {
						@apply text-2xl leading-[140%] tracking-[-0.025em]
					}

					p {
						@apply leading-[140%]
					}
				}

				ul {
					@apply space-y-5;

					li {
						@apply flex justify-start items-center space-x-2.5;

						img {
							@apply w-3.5;
						}

						span {
							@apply underline underline-offset-4 leading-[140%]
						}
					}
				}
			}
		}
	}

	.Insights {
		@apply pt-60 bg-[#121212];

		.Container {
			.Texts {
				@apply px-5;

				h4 {
					@apply text-white font-semibold text-6xl leading-[100%] tracking-[-0.025em];
				}
				
				p, .Action {
					@apply pl-10 text-white;
				}

				p {
					@apply mt-10 leading-[120%] tracking-[-0.025em]
				}

				.Action {
					@apply space-x-2.5 lg:space-x-[0.83vw] mt-20;

					img {
						@apply w-3.5 lg:w-[1.11vw]
					}

					span {
						@apply underline underline-offset-4 lg:underline-offset-[0.5vw] lg:text-[1.67vw] !leading-[140%]
					}
				}
			}

			.Image {
				@apply h-[500px] overflow-hidden;

				img {
					@apply object-cover h-full w-full object-center
				}
			}
		}
	}

	.Testimonials {
		@apply pt-10 px-5 pb-16;

		.Container {
			@apply space-y-10;

			.Content {
				@apply pl-8 space-y-20;

				.Testimony {
					@apply space-y-5;

					p {
						@apply text-2xl leading-[120%] tracking-[-0.025em] font-medium;
					}

					span {
						@apply block leading-[140%]
					}
				}

				.WWU {
					@apply flex justify-start items-center space-x-2.5;

					img {
						@apply w-3.5;
					}

					span {
						@apply underline underline-offset-4 leading-[140%]
					}
				}
			}
		}
	}
}
</style>