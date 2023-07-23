<template>
	<div class="CasperDesktop">
		<div class="Images">
			<div class="Image">
				<img src="/images/casper-01.png" alt="">
			</div>
			<div class="Image">
				<img src="/images/casper-01.png" alt="">
			</div>
			<div class="Image">
				<img src="/images/casper-01.png" alt="">
			</div>
			<div class="Image">
				<img src="/images/casper-01.png" alt="">
			</div>
			<div class="Image">
				<img src="/images/casper-01.png" alt="">
			</div>
			<div class="Image">
				<img src="/images/casper-01.png" alt="">
			</div>
			<div class="Image">
				<img src="/images/casper-01.png" alt="">
			</div>
			<div class="Image">
				<img src="/images/casper-01.png" alt="">
			</div>
			<div class="Image">
				<img src="/images/casper-01.png" alt="">
			</div>
			<div class="Image">
				<img src="/images/casper-01.png" alt="">
			</div>
			<div class="Image">
				<img src="/images/casper-01.png" alt="">
			</div>
			<div class="Image">
				<img src="/images/casper-01.png" alt="">
			</div>
			<div class="Image">
				<img src="/images/casper-01.png" alt="">
			</div>
			<div class="Image">
				<img src="/images/casper-01.png" alt="">
			</div>
			<div class="Image">
				<img src="/images/casper-01.png" alt="">
			</div>
			<div class="Image">
				<img src="/images/casper-01.png" alt="">
			</div>
		</div>

		<div class="Others">
			<p>
				Over 60+ companies have integrated Casper AI
			</p>

			<div class="Tabs center">
				<button v-for="display in displays" :key="display" class="Display" :class="{ 'active': display === currentDisplay }">
					{{ display }}
				</button>
			</div>

			<div class="Buttons end">
				<button class="Partner">
					<span>
						partners name
					</span>
	
					<svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M14 3C14 2.72386 13.7761 2.5 13.5 2.5H7.5C7.22386 2.5 7 2.72386 7 3C7 3.27614 7.22386 3.5 7.5 3.5H12.2929L2.14645 13.6464C1.95118 13.8417 1.95118 14.1583 2.14645 14.3536C2.34171 14.5488 2.65829 14.5488 2.85355 14.3536L13 4.20711V9C13 9.27614 13.2239 9.5 13.5 9.5C13.7761 9.5 14 9.27614 14 9V3Z" fill="black"/>
					</svg>
				</button>
	
				<button>
					Archieves
				</button>
			</div>
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
.CasperDesktop {
	.Images {
		@apply grid grid-cols-6 gap-[1.38vw] mt-[6.94vw] w-[65.28vw] ml-[3.75vw];

		.Image {
			@apply w-[9.72vw] h-[15.27vw] overflow-hidden;

			img {
				@apply w-full h-full object-cover object-center;
			}
		}
	}

	.Others {
		@apply mt-[8.88vw] grid grid-cols-3 p-[2.78vw] pt-0;

		.Tabs {
			@apply space-x-5 lg:space-x-[1.38vw];

			button {
				@apply text-[1.25vw] text-[#999999] uppercase tracking-[-0.025em];

				&.active {
					@apply text-black;
				}
			}
		}

		.Buttons {
			@apply space-x-[3.05vw]
		}

		p, button {
			@apply text-[1.25vw] uppercase tracking-[-0.025em] text-black leading-[120%]
		}

		button {
			@apply block;

			&.Partner {
				@apply flex items-center space-x-[0.69vw];

				svg {
					@apply w-[1.11vw]
				}
			}
		}
	}
}
</style>