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
}
</style>