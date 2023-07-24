<template>
	<div class="ResearchDesktop">
		<section class="Hero">
			<h1>
				<span>
					Research &
				</span>

				<span>
					Development
				</span>
			</h1>
		</section>

		<section class="AfterHero">
			<div class="Container">
				<div class="Top">
					<div class="Texts">
						<span>
							Our groundbreaking SaaS products and tech hardware solutions are designed to supercharge your business and propel you ahead of the competition.
						</span>
	
						<p>
							We're revolutionizing industries by harnessing the <br> power of artificial intelligence, machine learning, <br> and deep learning to create products that drive <br> meaningful change.
						</p>
					</div>

					<div class="WWB">
						<img src="/svg/tiny-star.svg" alt="">
						
						<span>
							See what we’re building
						</span>
					</div>
				</div>

				<div class="Video center">
					<img src="/images/luna-image.png" alt="">

					<button class="Plat">
						Play
					</button>
				</div>

				<div class="Bottom">
					<div class="Texts">
						<h2>
							The leading AI company driving innovation through state-of-the-art AI, ML, and DL technologies
							<span><img src="/svg/large-star.svg" alt=""></span>
						</h2>

						<p>
							Welcome to Bjaldour, where cutting-edge AI technology meets innovative SaaS products and tech hardware solutions. We're revolutionizing industries by harnessing the power of artificial intelligence, machine learning, and deep learning to create products that drive meaningful change. Explore our website and unlock a world of possibilities for your business.
						</p>
					</div>

					<div class="Marquee">
						<div v-for="(marquee, index) in marquees" :key="index" class="start">
							<img src="/svg/tiny-star.svg" alt="">

							<span>
								{{ marquee }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="Projects">
			<div class="Container">
				<div class="Project">
					<div class="Image">
						<img :src="`/images/projects/${projects[current].name}-noise.webp`" alt="">
					</div>
					
					<div class="Overlay start">
						<span :class="{'!text-black' : current === 1}">
							{{ projects[current].text }}
						</span>

						<div class="InnerImage center">
							<img :src="`/images/projects/${projects[current].name}.png`" alt="">
							
							<span>
								{{ projects[current].name }}
							</span>
						</div>

						<div class="Slider">
							<div class="Position"></div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="LittleDeats">
			<div class="Texts">
				<span>
					By developing products like CasperAI, Luna, and Scant, we empower businesses with intelligent automation, data-driven insights, and streamlined document management.
				</span>

				<p>
					Join us on this journey of innovation as we <br> continue to pioneer the future of technology and <br> drive meaningful impact across industries.
				</p>
			</div>

			<div class="WWB">
				<img src="/svg/tiny-star.svg" alt="">
			
				<span>
					Let’s work together
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import {gsap} from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default {
	data() {
		return {
			marquees: [
				"Improve Route Optimization",
				"Improve Route Optimization",
				"Improve Route Optimization",
				"Improve Route Optimization",
				"Improve Route Optimization",
				"Improve Route Optimization",
				"Improve Route Optimization",
				"Improve Route Optimization",
				"Improve Route Optimization",
				"Improve Route Optimization",
			],

			projects: [
				{
					name: "casper",
					text: "Unleashing Intelligent Automation"
				},

				{
					name: "luna",
					text: "Empowering Smart Decision - Making"
				},

				{
					name: "scant",
					text: "Transforming Document Management"
				},
			],

			current: 0
		}
	},

	mounted() {
		ScrollTrigger.update()
	}
}
</script>

<style lang="postcss" scoped>
.ResearchDesktop {
	.Hero {
		@apply pt-[4vw] overflow-hidden;

		h1 {
			@apply font-semibold text-[24.86vw] leading-[80%] tracking-[-0.05em];

			span {
				@apply inline-block whitespace-nowrap
			}
		}
	}

	.AfterHero {
		@apply mt-[13.8vw] pb-[16.66vw];

		.Container {
			.Top {
				@apply ml-[34.72vw] space-y-[5.55vw] w-[46vw];
				
				.Texts {
					@apply space-y-[2.78vw];

					span {
						@apply text-2xl lg:text-[2.5vw] !leading-[140%] tracking-[-0.025em] font-medium;
					}

					p {
						@apply block lg:text-[1.66vw] !leading-[140%]
					}
				}

				.WWB {
					@apply flex justify-start items-center space-x-2.5 lg:space-x-[0.83vw];

					img {
						@apply w-3.5 lg:w-[1.11vw]
					}

					span {
						@apply underline underline-offset-4 lg:underline-offset-[0.5vw] lg:text-[1.67vw] !leading-[140%]
					}
				}
			}

			.Video {
				@apply px-5 lg:px-[2.78vw] mt-[12.5vw] mb-[9.72vw] relative h-[71.11vw] overflow-hidden;

				img {
					@apply w-full h-full object-cover object-center;
				}

				button {
					@apply bg-black rounded-full absolute text-white text-sm lg:text-[1.11vw] w-20 lg:w-[6.94vw] h-20 lg:h-[6.94vw];
				}
			}

			.Bottom {
				@apply space-y-[9.72vw] overflow-hidden;

				.Texts {
					@apply space-y-[5.55vw] w-[54.51vw] mx-auto;

					h2 {
						@apply text-[6.67vw] !leading-[100%] tracking-[-0.025em] font-semibold max-w-[64.65vw] indent-[7vw];

						span {
							@apply w-fit inline-block -mt-[5vw] ml-[2.5vw];
							
							img {
								@apply w-[10.41vw]
							}
						}
					}

					p {
						@apply block lg:text-[1.66vw] !leading-[140%]
					}
				}

				.Marquee {
					@apply flex justify-start items-center space-x-[1.67vw];
					
					div {
						@apply flex justify-start items-center space-x-[1.67vw] lg:space-x-[0.83vw] shrink-0;

						img {
							@apply w-3.5 lg:w-[1.11vw]
						}

						span {
							@apply lg:text-[1.67vw] !leading-[140%] uppercase
						}
					}
				}
			}
		}
	}

	.Projects {
		.Project {
			@apply relative;
			
			.Image {
				@apply h-[100svh] overflow-hidden;

				img {
					@apply w-full h-full object-cover object-center;
				}
			}

			.Overlay {
				@apply absolute top-0 left-0 w-full h-full pl-[5.55vw];

				> span {
					@apply text-[3.33vw] font-semibold tracking-[-0.025em] leading-[100%] block max-w-[22.7vw] text-white
				}

				.InnerImage {
					@apply relative w-[41.11vw] h-[26.87vw] overflow-hidden bg-[#121212] ml-[1.11vw];

					img {
						@apply object-cover object-center w-full h-full;
					}

					span {
						@apply text-[6.67vw] !leading-[100%] tracking-[-0.025em] font-semibold max-w-[64.65vw] mx-auto text-center absolute text-white capitalize;
					}
				}

				.Slider {
					@apply w-[0.27vw] bg-white bg-opacity-50 h-[13.33vw] ml-[16.11vw];

					.Position {
						@apply h-1/3 bg-white;
					}
				}
			}
		}
	}

	.LittleDeats {
		@apply space-y-[5.55vw] my-[16.66vw] w-[46vw] mx-auto;
		
		.Texts {
			@apply space-y-[2.78vw];

			span {
				@apply text-2xl lg:text-[2.5vw] !leading-[140%] tracking-[-0.025em] font-medium;
			}

			p {
				@apply block lg:text-[1.66vw] !leading-[140%]
			}
		}

		.WWB {
			@apply flex justify-start items-center space-x-2.5 lg:space-x-[0.83vw];

			img {
				@apply w-3.5 lg:w-[1.11vw]
			}

			span {
				@apply underline underline-offset-4 lg:underline-offset-[0.5vw] lg:text-[1.67vw] !leading-[140%]
			}
		}
	}
}
</style>