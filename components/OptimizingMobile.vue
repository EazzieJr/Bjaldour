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
}
</style>