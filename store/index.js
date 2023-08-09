export const state = () => ({
	isMobile: false,
	loaded: false,
	menuOpened: false
})

export const mutations = {
	setIsMobile(state, payload) {
		state.isMobile = payload
	},

	toggleLoadedState(state) {
		state.loaded = !state.loaded
	},

	toggleMenuState(state) {
		state.menuOpened = !state.menuOpened
	}
}