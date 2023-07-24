<template>
	<div class="Tag start">
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="12" cy="12" r="11.5" :stroke="white ? 'white' : 'black'"/>
		</svg>

		<span :class="{'text-white' : white}">
			{{ text }}
		</span>
	</div>
</template>

<script>
export default {
	props: {
		text: String,
		white: Boolean
	}
}
</script>

<style lang="postcss" scoped>
.Tag {
	@apply space-x-3 lg:space-x-[1.11vw];

	svg {
		@apply w-5 lg:w-[1.67vw]
	}

	span {
		@apply lg:text-[1.38vw] tracking-[-0.025em]
	}
}
</style>