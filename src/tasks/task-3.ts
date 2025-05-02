interface Comment {
	id: number
	email: string
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

export const getData = async <T>(url: string): Promise<T[]> => {
	try {
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const data = await response.json()
		if (!Array.isArray(data)) throw new Error('Expected array response')

		return data as T[]
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error fetching data:', error.message)
		}
		throw error
	}
}

export const printComments = getData<Comment>(COMMENTS_URL)
	.then((data: Comment[]) => {
		data.forEach(comment => {
			console.log(`ID: ${comment.id}, Email: ${comment.email}`)
		})
	})
	.catch(() => {
		console.log('Failed to fetch comments')
	})
