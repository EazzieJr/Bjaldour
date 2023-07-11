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
	</div>
</template>

<script>
export default {

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
}
</style>