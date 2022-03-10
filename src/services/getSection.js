const apiURL = "https://api.mocklets.com/mock68016"

export default async function getSection({ section }) {
	return await fetch(`${apiURL}/${section}`)
		.then(res => res.json())
		.then(res => res)
}