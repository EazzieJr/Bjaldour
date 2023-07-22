<template>
	<div class="ResearchMobile">
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
							We're revolutionizing industries by harnessing the power of artificial intelligence, machine learning, and deep learning to create products that drive meaningful change.
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
				<div v-for="(project, index) in projects" :key="index" class="Project">
					<div class="Image">
						<img :src="`/images/projects/${project.name}-noise.webp`" alt="">
					</div>
					
					<div class="Overlay col-center">
						<span>
							{{ project.text }}
						</span>

						<div class="center">
							<img :src="`/images/projects/${project.name}.png`" alt="">
							
							<span>
								{{ project.name }}
							</span>
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
					Join us on this journey of innovation as we continue to pioneer the future of technology and drive meaningful impact across industries.
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
			]
		}
	}
}
</script>

<style lang="postcss" scoped>
.ResearchMobile {
	.Hero {
		@apply pt-20 px-5 overflow-hidden;

		h1 {
			@apply font-semibold text-[24.86vw] leading-[80%];

			span {
				@apply inline-block whitespace-nowrap
			}
		}
	}

	.AfterHero {
		@apply mt-20 pb-28;

		.Container {
			.Top {
				@apply pl-10 pr-5 space-y-10;
				
				.Texts {
					@apply space-y-5;

					span {
						@apply text-2xl leading-[140%] tracking-[-0.025em]
					}

					p {
						@apply leading-[140%]
					}
				}

				.WWB {
					@apply flex justify-start items-center space-x-2.5;

					img {
						@apply w-3.5;
					}

					span {
						@apply underline underline-offset-4 leading-[140%]
					}
				}
			}

			.Video {
				@apply px-5 mt-16 mb-14 relative h-[400px] overflow-hidden;

				img {
					@apply w-full h-full object-cover object-center;
				}

				button {
					@apply bg-black rounded-full absolute text-white text-sm w-20 h-20;
				}
			}

			.Bottom {
				@apply  space-y-14 overflow-hidden;

				.Texts {
					@apply space-y-10 pl-10 pr-5;

					h2 {
						@apply text-4xl font-semibold tracking-[-0.025em] leading-[100%] indent-10 max-w-[345px];

						span {
							@apply w-fit inline-block -mt-8;
							
							img {
								@apply w-14
							}
						}
					}

					p {
						@apply leading-[140%]
					}
				}

				.Marquee {
					@apply flex justify-start items-center space-x-2.5;
					
					div {
						@apply flex justify-start items-center space-x-2.5 shrink-0;

						img {
							@apply w-3.5;
						}

						span {
							@apply leading-[140%] uppercase
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
				@apply h-[500px] overflow-hidden;

				img {
					@apply w-full h-full object-cover object-center;
				}
			}

			.Overlay {
				@apply absolute top-0 left-0 w-full h-full space-y-10;

				> span {
					@apply text-3xl font-semibold tracking-[-0.025em] leading-[100%] block max-w-[200px] text-center text-white
				}

				div {
					@apply relative w-60 h-40 overflow-hidden bg-[#121212];

					span {
						@apply text-4xl font-semibold tracking-[-0.025em] leading-[100%] text-center px-5 max-w-[375px] mx-auto absolute text-white capitalize;
					}
				}
			}
		}
	}

	.LittleDeats {
		@apply pl-10 pr-5 space-y-10 my-28;
		
		.Texts {
			@apply space-y-5;

			span {
				@apply text-2xl leading-[140%] tracking-[-0.025em]
			}

			p {
				@apply leading-[140%]
			}
		}

		.WWB {
			@apply flex justify-start items-center space-x-2.5;

			img {
				@apply w-3.5;
			}

			span {
				@apply underline underline-offset-4 leading-[140%]
			}
		}
	}
}
</style>