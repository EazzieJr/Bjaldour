<template>
	<div class="CasperDesktop">
		<div class="Images Tiles">
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
				<button v-for="display in displays" :key="display" class="Display"
					:class="{ 'active': display === currentDisplay }" @click="changeDisplay(display)">
					{{ display }}
				</button>
			</div>

			<div class="Buttons end">
				<button class="Partner">
					<span>
						partners name
					</span>

					<svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M14 3C14 2.72386 13.7761 2.5 13.5 2.5H7.5C7.22386 2.5 7 2.72386 7 3C7 3.27614 7.22386 3.5 7.5 3.5H12.2929L2.14645 13.6464C1.95118 13.8417 1.95118 14.1583 2.14645 14.3536C2.34171 14.5488 2.65829 14.5488 2.85355 14.3536L13 4.20711V9C13 9.27614 13.2239 9.5 13.5 9.5C13.7761 9.5 14 9.27614 14 9V3Z"
							fill="black" />
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
import { gsap } from "gsap/dist/gsap"
import { Flip } from "gsap/dist/Flip";
gsap.registerPlugin(Flip)

export default {
	data() {
		return {
			displays: ["Grid", "Tiles"],
			currentDisplay: "Grid",
			displayAnimating: false
		}
	},

	methods: {
		changeDisplay(display) {
			if (this.displayAnimating || this.currentDisplay === display) return
			this.displayAnimating = true
			this.currentDisplay = display

			// const anchor = document.querySelector(".Anchor")
			// const projects = document.querySelectorAll(".Project")
			const projectsContainer = document.querySelector(".Images")
			const state = Flip.getState(".Images, .Image")

			// projectsContainer.classList.remove(projectsContainer.classList[1])
			// console.log(projectsContainer.classList)
			projectsContainer.classList.value = `Images Stack`

			Flip.from(state, {
				duration: 1.25,
				ease: "power4.inOut",
				stagger: 0.05,
				// absolute: true,
				onComplete: () => {
					projectsContainer.classList.value = `Images ${display}`

					Flip.from(state, {
						duration: 1.25,
						ease: "power4.inOut",
						stagger: 0.05,
						onComplete: () => {
							this.displayAnimating = false
						},
					})
				},
			})

		},
	}
}
</script>

<style lang="postcss" scoped>
.CasperDesktop {
	@apply pt-[5.76vw] overflow-hidden;

	.Images {
		@apply relative;
		&.Grid {
			@apply grid grid-cols-6 gap-[1.38vw] w-[65.28vw] ml-[3.75vw];

			.Image {
				@apply w-[9.72vw] h-[15.27vw] overflow-hidden;

				img {
					@apply w-full h-full object-cover object-center;
				}
			}
		}

		&.Stack {
			.Image {
				@apply absolute top-0 left-0
			}
		}

		&.Stack {
			.Image {
				@apply absolute top-0 left-0
			}
		}
		
		&.Tiles {
			@apply h-[calc(100vh_-_13.19vw)] w-[calc(100vw_-_3.46vw)] mx-auto;
			.Image {
				@apply absolute overflow-hidden;

				img {
					@apply w-full h-full object-cover object-center;
				}
				
				&:nth-child(1) {
					@apply h-[17.92vw] w-[11.94vw] top-[-1.18vw] left-0;

					img {
						@apply -rotate-90 scale-[1.4]
					}
				}

				&:nth-child(2) {
					@apply w-[17.92vw] h-[11.94vw] top-[1.80vw] left-[13.33vw]
				}

				&:nth-child(3) {
					@apply w-[11.94vw] h-[11.94vw] top-[1.80vw] left-[32.63vw]
				}

				&:nth-child(4) {
					@apply h-[17.92vw] w-[11.94vw] top-[-1.18vw] left-[45.97vw];

					img {
						@apply -rotate-90 scale-[1.4]
					}
				}

				&:nth-child(5) {
					@apply w-[22.36vw] h-[14.93vw] top-[-3.81vw] left-[60.41vw]
				}

				&:nth-child(6) {
					@apply h-[17.92vw] w-[11.94vw] top-[-1.18vw] left-[78.61vw];

					img {
						@apply -rotate-90 scale-[1.4]
					}
				}

				&:nth-child(7) {
					@apply w-[17.92vw] h-[11.94vw] top-[18.33vw] left-[-5.97vw];
				}

				&:nth-child(8) {
					@apply w-[17.92vw] h-[11.94vw] top-[18.33vw] left-[13.33vw];
				}

				&:nth-child(9) {
					@apply w-[14.93vw] h-[14.93vw] top-[16.80vw] left-[34.02vw];

					img {
						@apply -rotate-90 scale-[1.4]
					}
				}

				&:nth-child(10) {
					@apply w-[17.92vw] h-[11.94vw] top-[18.33vw] left-[52.91vw];
				}

				&:nth-child(11) {
					@apply w-[17.92vw] h-[11.94vw] top-[18.33vw] left-[72.22vw];
				}

				&:nth-child(12) {
					@apply h-[17.92vw] w-[11.94vw] top-[15.34vw] left-[91.52vw];

					img {
						@apply -rotate-90 scale-[1.4]
					}
				}

				
				&:nth-child(13) {
					@apply w-[17.92vw] h-[11.94vw] top-[34.86vw] left-[0vw]
				}

				&:nth-child(14) {
					@apply h-[17.92vw] w-[11.94vw] top-[31.94vw] left-[19.30vw];

					img {
						@apply -rotate-90 scale-[1.4]
					}
				}

				&:nth-child(15) {
					@apply w-[17.92vw] h-[11.94vw] top-[34.86vw] left-[32.63vw]
				}

				&:nth-child(16) {
					@apply w-[22.36vw] h-[14.93vw] top-[32.63vw] left-[52.56vw]
				}
			}
		}
	}

	.Others {
		@apply mt-[8.88vw] grid grid-cols-3 px-[2.78vw] pt-0 fixed bottom-[2.78vw] w-full;

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
}</style>