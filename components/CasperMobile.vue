<template>
	<div class="CasperMobile">
		<div class="Tabs start">
			<button v-for="display in displays" :key="display" class="Display" :class="{ 'active': display === currentDisplay }">
				{{ display }}
			</button>
		</div>
		
		<div class="Images">
			<img src="/images/casper-01.png" alt="">
			<img src="/images/casper-01.png" alt="">
			<img src="/images/casper-01.png" alt="">
			<img src="/images/casper-01.png" alt="">
			<img src="/images/casper-01.png" alt="">
			<img src="/images/casper-01.png" alt="">
			<img src="/images/casper-01.png" alt="">
			<img src="/images/casper-01.png" alt="">
			<img src="/images/casper-01.png" alt="">
			<img src="/images/casper-01.png" alt="">
			<img src="/images/casper-01.png" alt="">
			<img src="/images/casper-01.png" alt="">
			<img src="/images/casper-01.png" alt="">
			<img src="/images/casper-01.png" alt="">
			<img src="/images/casper-01.png" alt="">
			<img src="/images/casper-01.png" alt="">
		</div>

		<div class="Others">
			<p>
				Over 60+ companies have integrated Casper AI
			</p>

			<button class="Partner">
				<span>
					partners name
				</span>

				<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M14 3C14 2.72386 13.7761 2.5 13.5 2.5H7.5C7.22386 2.5 7 2.72386 7 3C7 3.27614 7.22386 3.5 7.5 3.5H12.2929L2.14645 13.6464C1.95118 13.8417 1.95118 14.1583 2.14645 14.3536C2.34171 14.5488 2.65829 14.5488 2.85355 14.3536L13 4.20711V9C13 9.27614 13.2239 9.5 13.5 9.5C13.7761 9.5 14 9.27614 14 9V3Z" fill="black"/>
				</svg>
			</button>

			<button>
				Archieves
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			displays: ["grid", "tiles"],
			currentDisplay: "grid",
		}
	}
}
</script>

<style lang="postcss" scoped>
.CasperMobile {
	@apply px-5;

	.Tabs {
		@apply space-x-4 mt-10;

		button {
			@apply text-[#999999] uppercase tracking-[-0.025em];

			&.active {
				@apply text-black;
			}
		}
	}
	
	.Images {
		@apply grid grid-cols-3 gap-3 mt-5;
	}

	.Others {
		@apply space-y-2 mt-10;

		p, button {
			@apply text-sm uppercase tracking-[-0.025em] text-black leading-[120%]
		}

		button {
			@apply block;

			&.Partner {
				@apply flex items-center space-x-2;

				svg {
					@apply w-3
				}
			}
		}
	}
}
</style>