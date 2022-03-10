const apiURL = "https://api.mocklets.com/mock68016"

export default async function getResource({ id }) {
	return await fetch(`${apiURL}/resources/${id}`)
		.then(res => res.json())
		.then(res => res)
}