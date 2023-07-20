<template>
	<div class="Projects">
		<ProjectsMobile v-if="isMobile" />

		<ProjectsDesktop v-else />
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Projects',

	computed: {
		...mapState(['isMobile'])
	}
}
</script>
