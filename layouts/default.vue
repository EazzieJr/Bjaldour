<template>
	<div>
		<div class="Loader" v-if="!loaded">
			<div class="LoadingLine"><div></div></div>

			<div class="Percentages">
				<div class="Numbers">
					<span
						class="Number"
						v-for="(percentage, index) in numbersArr"
						:key="index"
					>
						{{ percentage }}
					</span>
				</div>

				<span class="Percentage">%</span>
			</div>
		</div>
		
		<main v-else>
			<Navigation />
			
			<MenuButton />
			
			<nuxt/>

			<Footer />
		</main>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Lenis from '@studio-freight/lenis'
import { preloadImage } from '~/utils'
import { gsap } from "gsap/dist/gsap"

export default {
	data() {
		return {
			assetsToBeLoaded: [
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621171243/Korty/Rectangle_15_anvqaw.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620936288/Korty/image_5_pgl6zc.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620697813/Korty/image_2_gijibv.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620697813/Korty/image_20_bufuoi.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1620865175/Korty/Rectangle_11_tuj1nt.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621239276/Korty/image_33_1_pmbu2v.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621285427/Korty/Rectangle_17_ve1u5y.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621690413/Korty/korty-work_ukm6yk.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621406261/Korty/Rectangle_19_o44i0q.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621406261/Korty/Rectangle_20_hkfszk.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621406260/Korty/Rectangle_21_itahct.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621443387/Korty/Rectangle_22_zkazsw.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621466610/Korty/image_rnnzho.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621524451/Korty/kortybbn1_v31czm.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621524466/Korty/kortybbn2_dixrhc.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621540680/Korty/image_43_u9fsmz.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621541975/Korty/korty-pamane_glwvwh.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621542856/Korty/153576857_480678352950294_7236937184248464472_n_3_ktb05h.jpg",
				"https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621568117/Korty/Rectangle_23_dxgpdz.jpg"
			],
			numbersArr: [],
			percentageLoaded: 0,
		}
	},

	computed: {
		...mapState(["loaded"])
	},
	
	watch: {
		percentageLoaded() {
			gsap.to(".LoadingLine div", {
				width: this.percentageLoaded + '%',
				duration: 4,
				// ease: "power3.out"
			})

			gsap.to(".Numbers", {
				yPercent: this.percentageLoaded === 100 ? - 95 : - this.percentageLoaded,
				duration: 4,
				// ease: "power3.out"
			})

			if (this.percentageLoaded === 100) {
				const tl = gsap.timeline({ onComplete: () => this.toggleLoadedState() })
				
				tl.to('.Loader', {
					y: '-100%',
					delay: 4,
					duration: 1,
					ease: 'power2.inOut',
				})

				tl.to(".Loader .Percentages", {
					yPercent: 100,
					duration: 0.5
				}, "-=0.5")
			}
		}
	},
	
	methods: {
		...mapMutations(['setIsMobile', "toggleLoadedState"]),

		getCurrentScreen() {
			this.currentScreen = window.innerWidth

			window.addEventListener("resize", () => {
				this.currentScreen = window.innerWidth

				if (this.currentScreen < 767) {
					this.setIsMobile(true)
				} else {
					this.setIsMobile(false)
				}
			})

			if (this.currentScreen < 767) {
				this.setIsMobile(true)
			} else {
				this.setIsMobile(false)
			}
		}, 

		initLenis() {
			const lenis = new Lenis({duration: 2})

			lenis.on('scroll', (e) => {
				// console.log(e)
			})

			function raf(time) {
				lenis.raf(time)
				requestAnimationFrame(raf)
			}

			requestAnimationFrame(raf)
		},

		async preload() {
			const totalImages = this.assetsToBeLoaded.length;
			let loadedCount = 0;

			const min3Digits = num => {
				if (num < 10) {
					return `00${num}`;
				} else if (num < 99) {
					return `0${num}`;
				}
				return `${num}`;
			};
			
			this.assetsToBeLoaded.forEach((image, index) => {
				const percentage = Math.floor((100 / totalImages) * (index + 1));
				this.numbersArr = [...this.numbersArr, min3Digits(percentage)];
			});

			await Promise.all(
				this.assetsToBeLoaded.map(async (image, index) => {
					await preloadImage(image);
					loadedCount++;
					console.log(loadedCount)
					const percentage = Math.floor((100 / totalImages) * loadedCount);
					this.percentageLoaded = percentage;
				})
			);
		},
	},

	mounted() {
		// this.preload()
		this.getCurrentScreen()
		this.initLenis()
	}
}
</script>

<style lang="postcss" scoped>
.Loader {
	@apply fixed top-0 left-0 right-0 bottom-0 w-full h-[100svh] bg-white z-[1000] flex flex-col justify-between overflow-hidden;

	.LoadingLine {
		@apply h-5 lg:h-[1.36vw] w-full;

		div {
			@apply bg-black h-full w-0
		} 
	}

	.Percentages {
		@apply pl-5 pb-10 h-24 md:h-[18vw] flex items-start justify-start overflow-hidden;

		span {
			@apply text-black font-semibold text-8xl md:text-[17.77vw]
		}

		.Numbers {
			/* @apply tracking-[-0.025em]; */
			/* @apply w-[167px] md:w-[30.83vw] text-right overflow-hidden; */

			.Number {
				@apply block tracking-[-0.025em]
			}
		}
	}
}
</style>