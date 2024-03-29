<template>
	<div class="OptMobile">
		<Section class="Hero center">
			<div class="BigImage">
				<img src="/images/opt-hero-big.png" alt="">
			</div>

			<div class="SmallImage">
				<img src="/images/opt-hero-small.png" alt="">
			</div>

			<div class="Overlay">
				<h1>
					Optimizing Logistics with TransTech
				</h1>

				<span>TransTech</span>
			</div>
		</Section>

		<div class="AfterHero">
			<div class="Container">
				<div class="Texts">
					<span>
						Partnering with TransTech, a forward-thinking transportation and logistics company, we created content that explored the integration of machine learning in the transportation industry.
					</span>
					
					<p>
						Partnering with TransTech, a forward-thinking transportation and logistics company, we created content that explored the integration of machine learning in the transportation industry.
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
						<span>
							TransTech, a leading transportation and logistics company, faced challenges in optimizing their operations, improving route efficiency, and reducing maintenance costs. They sought a solution that could leverage the power of machine learning to streamline their logistics processes and enhance overall operational efficiency.
						</span>

						<p>
							Welcome to Bjaldour, where cutting-edge AI technology meets innovative SaaS products and tech hardware solutions. We're revolutionizing industries by harnessing the power of artificial intelligence, machine learning, and deep learning to create products that drive meaningful change. Explore our website and unlock a world of possibilities for your business.
						</p>
					</div>

					<div class="Images">
						<img src="/images/tt-challenge-img-1.png" alt="">
						<img src="/images/tt-challenge-img-2.png" alt="">
						<img src="/images/tt-challenge-img-3.png" alt="">
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
							The objectives were to improve route optimization, enable real-time fleet management, and implement predictive maintenance. By harnessing the power of data and machine learning algorithms, we aimed to enhance efficiency, reduce costs, and elevate overall performance in the transportation industry.
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

			<div class="Overlay col-center">
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
						Our approach involved analyzing historical data to identify patterns and developing a machine learning model for optimized route planning, fuel consumption estimation, and predictive maintenance. Real-time monitoring and integration were implemented to leverage live data sources. 
					</span>

					<div class="Approaches">
						<div v-for="approach in approaches" :key="approach.title" class="">
							<span>
								{{ approach.title }}
							</span>

							<p>
								{{ approach.deat }}
							</p>
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

				<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="150" height="150" rx="75" fill="#DFE0E2"/>
				<path d="M75 24C75 64.8 41 75 24 75C64.8 75 75 109 75 126C75 85.2 109 75 126 75C85.2 75 75 41 75 24Z" fill="black"/>
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
								Through the integration of machine learning into their transportation operations, TransTech successfully optimized their logistics processes, improved route efficiency, and reduced maintenance costs.
							</span>

							<p>
								The implementation of real-time fleet management and predictive maintenance capabilities enabled them to make data-driven decisions, enhance vehicle performance, and deliver exceptional customer service.
							</p>
						</div>

						<div class="Solutions">
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
					</div>

					<div class="Bottom">
						<h5>
							<span class="top between">
								<span>
									In
								</span>

								<svg width="285" height="10" viewBox="0 0 285 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<line y1="5" x2="285" y2="5" stroke="white" stroke-width="10"/>
								</svg>
							</span>

							<span class="bottom">
								Conclusion
							</span>
						</h5>

						<span>
							By embracing machine learning, TransTech transformed their operations, ensuring timely deliveries, reducing fuel consumption, and maximizing the lifespan of their fleet. 
						</span>

						<p>
							This project stands as a testament to the power of machine learning in revolutionizing the transportation and logistics industry, and TransTech's commitment to innovation and excellence.
						</p>
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
			objectives: [
				"Improve Route Optimization: Develop an intelligent machine learning model to optimize route planning and scheduling, reducing delivery times and fuel consumption.",
				"Real-time Fleet Management: Implement a system that leverages real-time data to monitor vehicle performance, driver behavior, and maintenance needs, ensuring proactive decision-making.",
				"Predictive Maintenance: Utilize machine learning algorithms to predict potential maintenance issues, minimizing downtime and optimizing vehicle performance."
			],

			approaches: [
				{
					title: "Data Collection and Analysis",
					deat: "Gathered historical data on routes, fuel consumption, vehicle performance, and maintenance records. Conducted a comprehensive analysis to identify patterns, inefficiencies, and potential areas of improvement."
				},

				{
					title: "Real-time Monitoring and Integration",
					deat: "Integrated the machine learning model with real-time data sources, including GPS tracking, weather conditions, and traffic updates. Established a centralized dashboard to monitor vehicle locations, performance metrics, and driver behavior in real- time."
				},

				{
					title: "Machine Learning Model Development",
					deat: "Developed a machine learning model utilizing algorithms such as regression and clustering. Trained the model using the collected data to predict optimal routes, estimate fuel consumption, and identify maintenance requirements."
				},

				{
					title: "Predictive Maintenance Implementation",
					deat: "Utilized the machine learning model to analyze vehicle sensor data and identify potential maintenance issues. Developed a proactive maintenance schedule to address identified issues before they escalate, reducing unexpected breakdowns and minimizing costs."
				}
			],

			solutions: [
				{
					title: "Route Optimization and Fuel Efficiency",
					solutions: [
						"Achieved a 15% reduction in delivery times through optimized route planning.",
						"Decreased fuel consumption by 10 % by identifying the most efficient routes based on real - time traffic and weather conditions."
					]
				},

				{
					title: "Real-time Fleet Management",
					solutions: [
						"Improved fleet performance monitoring, enabling TransTech to proactively address driver behavior issues and reduce vehicle idling time.",
						"Enhanced decision - making with real - time data insights, leading to improved operational efficiency and customer satisfaction.",
					]
				},

				{
					title: "Predictive Maintenance",
					solutions: [
						"Reduced maintenance costs by 20% through early identification of potential issues and proactive maintenance scheduling.",
						"Minimized vehicle downtime by addressing maintenance needs before they caused significant disruptions.",
					]
				}
			]
		}
	}
}
</script>

<style lang="postcss" scoped>
.OptMobile {
	.Hero {
		@apply w-full h-[100svh] overflow-hidden relative;

		.BigImage {
			@apply w-full h-full absolute z-[-1];

			img {
				@apply w-full h-full object-cover object-center;
			}
		}

		.SmallImage {
			@apply absolute w-56 z-[-1];
		}

		.Overlay {
			@apply w-full h-full flex items-center px-5;

			h1 {
				@apply font-semibold text-6xl leading-[100%] tracking-[-0.025em] text-white
			}

			span {
				@apply leading-[100%] tracking-[-0.025em] text-white font-semibold absolute bottom-5 right-5
			}
		}
	}

	.AfterHero {
		@apply pt-24 px-5;

		.Container {
			@apply space-y-14;

			.Texts {
				@apply space-y-5;

				span {
					@apply text-2xl leading-[140%] tracking-[-0.025em]
				}

				p {
					@apply leading-[140%]
				}
			}
		}
	}

	.Challenges {
		@apply mt-28 px-5;

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

				.Images {
					@apply flex items-end;
					
					img:nth-child(1) {
						@apply w-28 shrink-0 h-auto
					}
					img:nth-child(2) {
						@apply w-32 shrink-0 h-auto ml-3
					}
					img:nth-child(3) {
						@apply w-14 shrink-0 h-auto -ml-5 -mb-10
					}
				}
			}
		}
	}

	.Objectives {
		@apply mt-40 px-5;

		.Container {
			@apply space-y-5 sm:space-y-0 sm:flex justify-between items-start;

			.Content {
				@apply pl-8 space-y-10 sm:w-[62.5vw];

				.Texts {
					@apply space-y-5;

					span {
						@apply text-2xl leading-[140%] tracking-[-0.025em]
					}

					ul {
						@apply mt-5;

						li {
							@apply flex justify-start items-start space-x-2.5 py-5 border-t border-[#CCCCCC];

							img {
								@apply w-3.5 mt-1;
							}

							span {
								@apply underline underline-offset-4 leading-[140%]
							}
						}
					}
				}
			}
		}
	}

	.Engine {
		@apply mx-5 mt-36 relative h-[400px] overflow-hidden;

		img {
			@apply w-full h-full object-cover object-center;
		}

		.Overlay {
			@apply absolute w-full h-full text-white;

			span {
				@apply text-lg leading-[140%] tracking-[0.025em];

				&.FindOut {
					@apply absolute bottom-5 right-5 underline underline-offset-4
				}
			}

			h2 {
				@apply font-semibold text-7xl
			}
		}
	}

	.Approach {
		@apply mt-28 px-5;

		.Container {
			@apply space-y-5;

			.Content {
				> span {
					@apply text-2xl leading-[140%] tracking-[-0.025em]
				}

				.Approaches {
					@apply mt-28 gap-y-10 grid grid-cols-1;

					div {
						@apply space-y-5 w-4/5;

						span {
							@apply text-3xl leading-[120%] tracking-[-0.025em] font-medium						
						}

						p {
							@apply leading-[140%]
						}

						&:nth-child(even) {
							@apply place-self-end
						}
					}
				}
			}
		}
	}

	.Thingy {
		@apply my-36 overflow-hidden;

		h3 {
			@apply text-[25vw] font-semibold leading-[100%] whitespace-nowrap inline-flex items-center;

			svg {
				@apply w-20 mx-7
			}
		}
	}

	.Solution {
		@apply bg-[#121212] pt-7 px-5;

		.Content {
			@apply mt-28 text-white;

			h4 {
				@apply text-4xl font-semibold tracking-[-0.025em] leading-[100%] pl-5 max-w-[375px] mx-auto;
			}

			.Top {
				@apply mt-16;

				.Texts {
					@apply space-y-5;

					span {
						@apply text-2xl leading-[140%] tracking-[-0.025em]
					}

					p {
						@apply leading-[140%]
					}
				}

				.Solutions {
					@apply mt-20 space-y-20;

					> div {
						@apply space-y-5;

						span {
							@apply text-3xl leading-[120%] tracking-[-0.025em] font-medium;
						}

						ul {
							@apply pl-5;

							li {
								@apply leading-[140%] list-disc
							}
						}
					}
				}
			}

			.Bottom {
				@apply mt-40 pb-40 w-[300px] mx-auto;

				h5 {
					@apply font-semibold text-[64px] leading-[100%] tracking-[-0.025em] text-white;

					.top {
						svg {
							@apply w-32
						}
					}
					
					.bottom {
						@apply block;
					}
				}

				> span {
					@apply text-2xl leading-[140%] tracking-[-0.025em] block mt-10;
				}

				p {
					@apply leading-[140%] mt-5;
				}
			}
		}
	}
}
</style>