export const localStorageService = () => {
	const localStorage = window.localStorage

	const remove = (key: string) => {
		localStorage.removeItem(key)
	}

	const clear = () => {
		localStorage.clear()
	}

	return [remove, clear]
}
