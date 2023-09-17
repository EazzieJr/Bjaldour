<template>
	<div class="Modal" id="OverlayProject" v-if="projectOpened" data-lenis-prevent>
		<Section class="Hero center">
			<div class="BigImage">
				<!-- <img src="" alt=""> -->
			</div>

			<div class="SmallImage">
				<img src="/images/opt-hero-small.png" alt="">
			</div>

			<div class="Overlay">
				<h1 class="ModalHeroText">
					Optimizing Logistics with TransTech
				</h1>

				<span>TransTech</span>
			</div>
		</Section>

		<div class="AfterHero">
			<div class="Container">
				<div class="Texts">
					<div class="OverflowAssist">
						<span>
							Partnering with TransTech, a forward-thinking transportation and logistics company, we created content that
							explored the integration of machine learning in the transportation industry.
						</span>
					</div>

					<p>
						Partnering with TransTech, a forward-thinking transportation and logistics company, we created content that
						explored the integration of machine learning in the transportation industry.
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
						<div class="OverflowAssist">
							<span>
								TransTech, a leading transportation and logistics company, faced challenges in optimizing their
								operations, improving route efficiency, and reducing maintenance costs. They sought a solution that could
								leverage the power of machine learning to streamline their logistics processes and enhance overall
								operational efficiency.
							</span>
						</div>

						<p>
							Welcome to Bjaldour, where cutting-edge AI technology meets innovative SaaS products and tech hardware
							solutions. We're revolutionizing industries by harnessing the power of artificial intelligence, machine
							learning, and deep learning to create products that drive meaningful change. Explore our website and unlock
							a world of possibilities for your business.
						</p>
					</div>

					<div class="Images">
						<img class="Big" src="/images/tt-challenge-img-1.png" alt="">
						<img class="Mid" src="/images/tt-challenge-img-2.png" alt="">
						<img class="Sml" src="/images/tt-challenge-img-3.png" alt="">
					</div>
				</div>
			</div>
		</section>

		<section class="Objectives">
			<div class="Container">
				<Tag text="Objectives" />

				<div class="Content">
					<div class="Texts">
						<span>
							The objectives were to improve route optimization, enable real-time fleet management, and implement
							predictive maintenance. By harnessing the power of data and machine learning algorithms, we aimed to enhance
							efficiency, reduce costs, and elevate overall performance in the transportation industry.
						</span>

						<ul>
							<li v-for="(obj, index) in objectives" :key="index">
								<img src="/svg/tiny-star.svg" alt="">

								<p>
									{{ obj }}
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<div class="Engine center">
			<img src="/images/luna-image.png" alt="">

			<div class="Overlay col-center h-fit">
				<span>
					Built on
				</span>

				<h2>
					luna.ai
				</h2>

				<span class="FindOut">
					find out more
				</span>
			</div>
		</div>

		<section class="Approach">
			<div class="Container">
				<Tag text="Approach" />

				<div class="Content">
					<span>
						Our approach involved analyzing historical data to identify patterns and developing a machine learning model
						for optimized route planning, fuel consumption estimation, and predictive maintenance. Real-time monitoring
						and integration were implemented to leverage live data sources.
					</span>

					<div class="Approaches">
						<div class="Left">
							<div v-for="approach in approaches.slice(0, 2)" :key="approach.title" class="">
								<span>
									{{ approach.title }}
								</span>

								<div class="p">
									<p v-for="(deat, index) in approach.deat" :key="index">
										{{ deat }}
									</p>
								</div>
							</div>
						</div>

						<div class="Right">
							<div v-for="approach in approaches.slice(2, 4)" :key="approach.title" class="">
								<span>
									{{ approach.title }}
								</span>

								<div class="p">
									<p v-for="(deat, index) in approach.deat" :key="index">
										{{ deat }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="Thingy">
			<h3>
				<span>
					TransTech
				</span>

				<svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="150" height="150" rx="75" fill="#DFE0E2" />
					<path d="M75 24C75 64.8 41 75 24 75C64.8 75 75 109 75 126C75 85.2 109 75 126 75C85.2 75 75 41 75 24Z"
						fill="black" />
				</svg>

				<span>
					Bjaldour
				</span>
			</h3>
		</div>

		<section class="Solution">
			<div class="Container">
				<Tag text="Solution" white />

				<div class="Content">
					<h4>
						Revolutionize Your Business with Our AI Solutions
					</h4>

					<div class="Top">
						<div class="Texts">
							<span>
								Through the integration of machine learning into their transportation operations, TransTech successfully
								optimized their logistics processes, improved route efficiency, and reduced maintenance costs.
							</span>

							<p>
								The implementation of real-time fleet management and predictive maintenance capabilities enabled them to
								make data-driven decisions, enhance vehicle performance, and deliver exceptional customer service.
							</p>
						</div>

						<div class="Solutions">
							<div class="Left">
								<img src="/images/solution-1.png" alt="">
								<img src="/images/solution-3.png" alt="">
							</div>

							<div class="Container">
								<div v-for="(solution, index) in solutions" :key="index">
									<span>
										{{ solution.title }}
									</span>

									<ul>
										<li v-for="(li, index) in solution.solutions" :key="index">
											{{ li }}
										</li>
									</ul>
								</div>
							</div>

							<div class="Right">
								<img src="/images/solution-2.png" alt="">
							</div>
						</div>
					</div>

					<div class="Bottom">
						<h5>
							<span class="top between">
								<span>
									In
								</span>

								<svg width="285" height="10" viewBox="0 0 285 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<line y1="5" x2="285" y2="5" stroke="white" stroke-width="10" />
								</svg>
							</span>

							<span class="bottom">
								Conclusion
							</span>
						</h5>

						<span>
							By embracing machine learning, TransTech transformed their operations, ensuring timely deliveries, reducing
							fuel consumption, and maximizing the lifespan of their fleet.
						</span>

						<p>
							This project stands as a testament to the power of machine learning in revolutionizing the transportation
							and logistics industry, and TransTech's commitment to innovation and excellence.
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { gsap } from "gsap/dist/gsap"
import Lenis from '@studio-freight/lenis'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Flip } from "gsap/dist/Flip";

export default {
	methods: {
		initLenis() {
			const wrapper = document.querySelector("#OverlayProject")
			this.lenis = new Lenis({ duration: 2, wrapper, lerp: 1 })
			console.log(this.lenis)

			this.lenis.on('scroll', (e) => {
				// console.log(e)
			})

			const raf = (time) => {
				this.lenis.raf(time)
				requestAnimationFrame(raf)
			}

			requestAnimationFrame(raf)
		},
	},

	mounted() {
		this.initLenis()
	}
}
</script>

<style>

</style>