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
}
</style>