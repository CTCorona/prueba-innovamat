const apiURL = "https://api.mocklets.com/mock68016"

export default async function searchContent({ keyword = 'anything' }) {
	return await fetch(`${apiURL}/search?keyword=${keyword}`, { method: 'POST' })
		.then(res => res.json())
		.then(res => res)
}