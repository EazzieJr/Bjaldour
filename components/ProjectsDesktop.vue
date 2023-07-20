<template>
	<div class="ProjectsDesktop">
		<section class="Hero">
			<div class="Container">
				<h1>
					Solving problems with interesting technologies
				</h1>

				<p>
					At Bjaldour, we specialize in crafting content that explores the potential and applications of artificial intelligence and machine learning. Explore our range of content projects below and discover how we have collaborated with esteemed clients.
				</p>
			</div>
		</section>

		<section class="AllProjects">
			<div class="Container">
				<div class="Top between">
					<div class="Tabs start">
						<button v-for="display in displays" :key="display" class="Display" :class="{'active': display === currentDisplay}">
							{{ display }}
						</button>
					</div>

					<div class="Ammount">
						00/40
					</div>
				</div>

				<div class="Bottom">
					<div v-for="(project, index) in projects" :key="index" class="Project">
						<div class="Image">
							<img :src="`/images/projects/${index}.png`" alt="">
						</div>

						<div class="Text">
							<p>
								{{ project.deat }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="Insights">
			<div class="Container">
				<h2>
					We have helped over 500+ businesses generate over $500m revenue using our AI/ML models
				</h2>

				<div class="Clients">
					<div class="top start">
						<img v-for="(client, index) in clients" :key="index" :src="`/images/clients/${client}.png`" :alt="`A small sized logo of ${client}`">
					</div>

					<div class="bottom start">
						<img v-for="(client, index) in clients" :key="index" :src="`/images/clients/${client}.png`" :alt="`A small sized logo of ${client}`">
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
			displays: ["grid", "tiles"],
			currentDisplay: "grid",

			projects: [
				{ deat: "Safeguarding FinTech with SecurePay" },
				{ deat: "Transforming Patient Care with MediSys" },
				{ deat: "Enhancing Customer Experience with ChatX" },
				{ deat: "Optimizing Operations with TechOptima" },
				{ deat: "Personalizing the Shopping Experience with ShopSense" },
				{ deat: "Optimizing Logistics with TransTech" },
				{ deat: "Revolutionizing Sustainability with EcoSolutions" },
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
.ProjectsDesktop {
	.Hero {
		@apply pt-[4vw] px-5 lg:px-[2.78vw];

		.Container {
			@apply space-y-[4.16vw];

			h1 {
				@apply font-semibold text-[8.88vw] leading-[100%] tracking-[-0.025em]
			}

			p {
				@apply text-2xl lg:text-[2.5vw] !leading-[140%] ml-[15.97vw] max-w-[62.5vw];
			}
		}
	}

	.AllProjects {
		@apply px-5 lg:px-[2.78vw] pt-[21.52vw];

		.Container {
			@apply space-y-[3.82vw];
			
			.Top {
				.Tabs {
					@apply space-x-5 lg:space-x-[2.78vw];

					button {
						@apply text-[1.38vw] text-[#999999] uppercase tracking-[-0.025em];

						&.active {
							@apply text-black;
						}
					}
				}

				.Ammount {
					@apply text-[1.38vw];
				}
			}

			.Bottom {
				@apply grid grid-cols-3 gap-y-[8.88vw] gap-x-[1.38vw];

				.Project {
					@apply space-y-[1.04vw];

					.Image {
						@apply  overflow-hidden;

						img {
							@apply w-full;
						}
					}

					.Text {
						@apply pl-[4.58vw];

						p {
							@apply text-[1.67vw]
						}
					}
				}
			}
		}
	}

	.Insights {
		@apply my-[26.52vw] overflow-hidden;

		.Container {
			@apply space-y-[12.36vw];
			
			h2 {
				@apply text-[6.67vw] !leading-[100%] tracking-[-0.025em] font-semibold max-w-[64.65vw] mx-auto text-center;
			}
			
			.Clients {
				@apply space-y-[3.95vw];

				div {
					@apply space-x-[2.78vw];

					img {
						@apply w-[11.38vw];
					}
				}
			}
		}
	}
}
</style>