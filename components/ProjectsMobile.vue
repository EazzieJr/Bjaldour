<template>
	<div class="ProjectsMobile">
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
.ProjectsMobile {
	.Hero {
		@apply pt-20 px-5;

		.Container {
			@apply space-y-8;

			h1 {
				@apply font-semibold text-6xl leading-[100%] tracking-[-0.025em]
			}

			p {
				@apply text-2xl leading-[140%] tracking-[-0.025em]
			}
		}
	}

	.AllProjects {
		@apply px-5 pt-40;

		.Container {
			@apply space-y-7;
			
			.Top {
				.Tabs {
					@apply space-x-4;

					button {
						@apply text-[#999999] uppercase tracking-[-0.025em];

						&.active {
							@apply text-black;
						}
					}
				}
			}

			.Bottom {
				@apply grid sm:grid-cols-2 gap-y-10 gap-x-5;

				.Project {
					@apply space-y-3;

					.Image {
						@apply h-[380px] overflow-hidden;

						img {
							@apply w-full h-full object-cover object-center;
						}
					}

					.Text {
						@apply pl-10;

						p {
							@apply text-lg
						}
					}
				}
			}
		}
	}

	.Insights {
		@apply my-60;

		.Container {
			@apply space-y-20;
			
			h2 {
				@apply text-4xl font-semibold tracking-[-0.025em] leading-[100%] text-center px-5 max-w-[375px] mx-auto;
			}
			
			.Clients {
				@apply space-y-5;

				div {
					@apply space-x-5;
					
					img {
						@apply w-20;
					}
				}
			}
		}
	}
}
</style>