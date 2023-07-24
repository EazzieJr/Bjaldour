<template>
	<div class="Index">
		<TranstechMobile v-if="isMobile" />

		<TranstechDesktop v-else />
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
