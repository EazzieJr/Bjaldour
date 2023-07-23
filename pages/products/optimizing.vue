<template>
	<div class="Index">
		<OptimizingMobile v-if="isMobile" />

		<OptimizingDesktop v-else />
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Optimizing',
	layout: "product",

	computed: {
		...mapState(['isMobile'])
	}
}
</script>
