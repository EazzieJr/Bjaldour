<template>
	<div class="MenuButton">
		<button class="start">
			<span>
				MENU
			</span>

			<img src="/svg/closed-menu.svg" alt="">
		</button>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>

.MenuButton {
	@apply fixed right-5 top-5 lg:right-[2.78vw] lg:top-[2.78vw] z-[999];

	button {
		@apply space-x-2 md:space-x-[0.55vw]
	}
}
</style>