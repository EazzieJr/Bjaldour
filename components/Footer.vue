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
	</footer>
</template>

<script>
export default {

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

}
</style>