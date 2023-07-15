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
				<div class="Tag start">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="12" cy="12" r="11.5" stroke="black"/>
					</svg>

					<span>
						About
					</span>
				</div>

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
	</div>
</template>

<script>
export default {

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

			.Tag {
				@apply space-x-3 lg:space-x-[15px];

				svg {
					@apply w-5 lg:w-6
				}

				span {
					@apply lg:text-lg xl:text-xl tracking-[-2.5%]
				}
			}

			.Content {
				@apply space-y-10 lg:space-y-16 xl:space-y-20 w-[62.5vw] mt-2;

				.Texts {
					@apply space-y-5 lg:space-y-7 xl:space-y-10;

					span {
						@apply text-2xl lg:text-3xl xl:text-4xl !leading-[140%] tracking-[-2.5%]
					}

					p {
						@apply lg:text-lg xl:text-2xl !leading-[140%]
					}
				}

				ul {
					@apply space-y-5;

					li {
						@apply flex justify-start items-center space-x-2.5 lg:space-x-3;

						img {
							@apply w-3.5 lg:w-[1.11vw];
						}

						span {
							@apply underline underline-offset-4 lg:text-lg xl:text-2xl !leading-[140%]
						}
					}
				}
			}
		}
	}

	
}
</style>