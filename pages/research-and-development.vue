<template>
	<div class="ResearchAndDevelopment">
		<ResearchMobile v-if="isMobile" />

		<ResearchDesktop v-else />
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'ResearchAndDevelopment',

	computed: {
		...mapState(['isMobile'])
	}
}
</script>
