window.onload = function() {
	// eslint-disable-next-line
	lax.setup()
	const updateLax = () => {
		// eslint-disable-next-line
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}
