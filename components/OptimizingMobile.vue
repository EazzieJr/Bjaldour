<template>
	<div class="OptMobile">
		<Section class="Hero center">
			<div class="BigImage">
				<img src="/images/opt-hero-big.png" alt="">
			</div>

			<div class="SmallImage">
				<img src="/images/opt-hero-small.png" alt="">
			</div>

			<div class="Overlay">
				<h1>
					Optimizing Logistics with TransTech
				</h1>

				<span>TransTech</span>
			</div>
		</Section>

		<div class="AfterHero">
			<div class="Container">
				<div class="Texts">
					<span>
						Partnering with TransTech, a forward-thinking transportation and logistics company, we created content that explored the integration of machine learning in the transportation industry.
					</span>
					
					<p>
						Partnering with TransTech, a forward-thinking transportation and logistics company, we created content that explored the integration of machine learning in the transportation industry.
					</p>
				</div>

				<div class="Image">
					<img src="/images/transtech-afterhero.png" alt="">
				</div>
			</div>
		</div>

		<section class="Challenges">
			<div class="Container">
				<Tag text="Challenge" />

				<div class="Content">
					<div class="Texts">
						<span>
							TransTech, a leading transportation and logistics company, faced challenges in optimizing their operations, improving route efficiency, and reducing maintenance costs. They sought a solution that could leverage the power of machine learning to streamline their logistics processes and enhance overall operational efficiency.
						</span>

						<p>
							Welcome to Bjaldour, where cutting-edge AI technology meets innovative SaaS products and tech hardware solutions. We're revolutionizing industries by harnessing the power of artificial intelligence, machine learning, and deep learning to create products that drive meaningful change. Explore our website and unlock a world of possibilities for your business.
						</p>
					</div>

					<div class="Images">
						<img src="/images/tt-challenge-img-1.png" alt="">
						<img src="/images/tt-challenge-img-2.png" alt="">
						<img src="/images/tt-challenge-img-3.png" alt="">
					</div>
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
.OptMobile {
	.Hero {
		@apply w-full h-[100svh] overflow-hidden relative;

		.BigImage {
			@apply w-full h-full absolute z-[-1];

			img {
				@apply w-full h-full object-cover object-center;
			}
		}

		.SmallImage {
			@apply absolute w-56 z-[-1];
		}

		.Overlay {
			@apply w-full h-full flex items-center px-5;

			h1 {
				@apply font-semibold text-6xl leading-[100%] tracking-[-0.025em] text-white
			}

			span {
				@apply leading-[100%] tracking-[-0.025em] text-white font-semibold absolute bottom-5 right-5
			}
		}
	}

	.AfterHero {
		@apply pt-24 px-5;

		.Container {
			@apply space-y-14;

			.Texts {
				@apply space-y-5;

				span {
					@apply text-2xl leading-[140%] tracking-[-0.025em]
				}

				p {
					@apply leading-[140%]
				}
			}
		}
	}

	.Challenges {
		@apply mt-28 px-5;

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

				.Images {
					@apply flex items-end;
					
					img:nth-child(1) {
						@apply w-28 shrink-0 h-auto
					}
					img:nth-child(2) {
						@apply w-32 shrink-0 h-auto ml-3
					}
					img:nth-child(3) {
						@apply w-14 shrink-0 h-auto -ml-5 -mb-10
					}
				}
			}
		}
	}

	.Obectives {
		
	}
}
</style>