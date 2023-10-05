<template>
	<div class="CasperAi">
		<CasperMobile v-if="isMobile" />

		<CasperDesktop v-else />
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'CasperAi',
	layout: "projects",

	computed: {
		...mapState(['isMobile'])
	},

	mounted() {
		console.log()
	}
}
</script>
