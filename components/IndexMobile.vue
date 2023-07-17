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

		<section class="About">
			<div class="Container">
				<Tag text="About" />

				<div class="Content">
					<div class="Texts">
						<span>
							The leading AI company driving innovation through state-of-the-art AI, ML, and DL technologies. Our groundbreaking SaaS products and tech hardware solutions are designed to supercharge your business and propel you ahead of the competition.
						</span>
	
						<p>
							Welcome to Bjaldour, where cutting-edge AI technology meets innovative SaaS products and tech hardware solutions. We're revolutionizing industries by harnessing the power of artificial intelligence, machine learning, and deep learning to create products that drive meaningful change. Explore our website and unlock a world of possibilities for your business.
						</p>
					</div>

					<ul>
						<li>
							<img src="/svg/tiny-star.svg" alt="">
							
							<span>
								Learn More About Us
							</span>
						</li>

						<li>
							<img src="/svg/tiny-star.svg" alt="">
							
							<span>
								Find out more about our engineering background
							</span>
						</li>

						<li>
							<img src="/svg/tiny-star.svg" alt="">
							
							<span>
								Research and development team
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="Solutions">
			<div class="Container">
				<div class="Top">
					<div class="top">
						<h3>
							Solutions
						</h3>
					</div>
					
					<div class="mid">
						<span>
							Revolutionize Your Business with Our AI Solutions
						</span>
					</div>

					<div class="bottom">
						<p>
							Bjaldour offers a range of AI-powered solutions tailored to meet the unique needs of various industries. From predictive analytics and natural language processing to computer vision and robotic automation, our products are designed to enhance productivity, streamline processes, and drive growth. <br>

							<span>
								Discover how our solutions can help you unlock new opportunities and achieve unparalleled success.
							</span>
						</p>

						<ul>
							<li>
								<img src="/svg/tiny-star-white.svg" alt="">
							
								<span>
									Explore Our Solutions
								</span>
							</li>

							<li>
								<img src="/svg/tiny-star-white.svg" alt="">
							
								<span>
									Research and development team
								</span>
							</li>
						</ul>
					</div>
				</div>

				<div class="Projects">
					<div v-for="project in projects" :key="project.title" class="Project">
						<img :src="`/images/projects/${project.src}.png`" :alt="`An Image for ${project.title}`">

						<span>
							{{ project.title }}
						</span>
					</div>
				</div>

				<div class="Bottom">
					<span>
						Clients using our solutions
					</span>

					<div class="Clients start">
						<img v-for="(client, index) in clients" :key="index" :src="`/images/clients/${client}.png`" :alt="`A small sized logo of ${client}`">
					</div>
				</div>
			</div>
		</section>

		<section class="Insights">
			<div class="Container">
				<div class="Texts">
					<h4>
						We have helped over 500+ businesses generate over $500m revenue using our AI/ML models
					</h4>

					<p>
						From predictive analytics and natural language processing to computer vision and robotic automation, our products are designed to enhance productivity, streamline processes, and drive growth. 
					</p>

					<div class="Action start">
						<img src="/svg/tiny-star-white.svg" alt="">
							
						<span>
							See our yearly insights
						</span>
					</div>
				</div>

				<div class="Image">
					<img src="/images/insights-image.png" alt="">
				</div>
			</div>
		</section>

		<section class="Testimonials">
			<div class="Container">
				<Tag text="Testimonials" />

				<div class="Content">
					<div v-for="(testimony, index) in testimonials" :key="index" class="Testimony">
						<p>
							{{ testimony.testimony }}
						</p>

						<span>{{ testimony.name }}, {{ testimony.title }}</span>
					</div>

					<div class="WWU">
						<img src="/svg/tiny-star.svg" alt="">
							
						<span>
							Let’s work together
						</span>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			testimonials: [
				{
					testimony: "Working with Bjaldour has been a game-changer for our organization. Their AI solutions have revolutionized our operations and helped us achieve unprecedented levels of efficiency and growth.",
					name: "John Doe",
					title: "CEO of ABC Corporation"
				},
				{
					testimony: "Working with Bjaldour has been a game-changer for our organization. Their AI solutions have revolutionized our operations and helped us achieve unprecedented levels of efficiency and growth.",
					name: "John Doe",
					title: "CEO of ABC Corporation"
				},
				{
					testimony: "Thanks to Bjaldour, we were able to automate critical processes and make data-driven decisions with ease. Their solutions have truly transformed the way we do business.",
					name: "John Doe",
					title: "CEO of ABC Corporation"
				},
			],

			projects: [
				{
					title: "Scant.AI",
					src: "casper"
				},

				{
					title: "Luna.AI",
					src: "luna"
				},

				{
					title: "Casper.AI",
					src: "casper"
				}
			],

			clients: [
				"virgin",
				"disney",
				"hersheys",
				"andela",
				"brooklyn",
				"virgin",
				"disney",
				"hersheys",
				"andela",
				"brooklyn",
				"virgin",
				"disney",
				"hersheys",
				"andela",
				"brooklyn",
				"virgin",
				"disney",
				"hersheys",
				"andela",
				"brooklyn",
				"virgin",
				"disney",
				"hersheys",
				"andela",
				"brooklyn",
			]
		}
	}
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

	.About {
		@apply pt-10 px-5;

		.Container {
			@apply space-y-5 sm:space-y-0 sm:flex justify-between items-start;

			.Content {
				@apply pl-8 space-y-10 sm:w-[62.5vw];

				.Texts {
					@apply space-y-5;

					span {
						@apply text-2xl leading-[140%] tracking-[-0.025em]
					}

					p {
						@apply leading-[140%]
					}
				}

				ul {
					@apply space-y-5;

					li {
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
		}
	}

	.Solutions {
		@apply bg-[#121212] text-white;
		
		.Container {
			.Top {
				.top {
					h3 {
						@apply text-[22.5vw] text-center font-semibold tracking-[-0.025em] leading-[100%];
					}
				}

				.mid {
					@apply mt-20 px-5;

					span {
						@apply text-4xl font-semibold tracking-[-0.025em] leading-[100%]
					}
				}

				.bottom {
					@apply space-y-10 mt-28 pl-10 pr-5;

					p {
						@apply text-xl leading-[140%] tracking-[-0.025em];

						span {
							@apply uppercase mt-3 inline-block;
						}
					}

					ul {
						@apply space-y-5;

						li {
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
			}

			.Projects {
				@apply space-y-5 px-5 mt-28;

				.Project {
					@apply relative overflow-hidden h-96;

					img {
						@apply object-cover object-center w-full h-full
					}

					span {
						@apply absolute text-5xl font-semibold;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%)
					}
				}
			}

			.Bottom {
				@apply overflow-hidden mt-44 px-5 space-y-10;
				
				span {
					@apply text-4xl font-semibold tracking-[-0.025em] leading-[100%];
				}

				.Clients {
					@apply space-x-5;

					img {
						@apply w-20;
					}
				}
			}
		}
	}

	.Insights {
		@apply pt-60 bg-[#121212];

		.Container {
			.Texts {
				@apply px-5;

				h4 {
					@apply text-white font-semibold text-6xl leading-[100%] tracking-[-0.025em];
				}
				
				p, .Action {
					@apply pl-10 text-white;
				}

				p {
					@apply mt-10 leading-[120%] tracking-[-0.025em]
				}

				.Action {
					@apply space-x-2.5 lg:space-x-[0.83vw] mt-20;

					img {
						@apply w-3.5 lg:w-[1.11vw]
					}

					span {
						@apply underline underline-offset-4 lg:underline-offset-[0.5vw] lg:text-[1.67vw] !leading-[140%]
					}
				}
			}

			.Image {
				@apply h-[500px] overflow-hidden;

				img {
					@apply object-cover h-full w-full object-center
				}
			}
		}
	}

	.Testimonials {
		@apply pt-10 px-5 pb-16;

		.Container {
			@apply space-y-10;

			.Content {
				@apply pl-8 space-y-20;

				.Testimony {
					@apply space-y-5;

					p {
						@apply text-2xl leading-[120%] tracking-[-0.025em] font-medium;
					}

					span {
						@apply block leading-[140%]
					}
				}

				.WWU {
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
	}
}
</style>