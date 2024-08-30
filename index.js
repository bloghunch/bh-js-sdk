const apiUrl = 'https://api.bloghunch.com';

export default class Bloghunch {
	constructor(key, domain) {
		this.key = key;
		this.domain = domain;
	}

	async getAllPosts() {
		const url = `${apiUrl}/app/${this.domain}/posts`;

		try {
			const result = await fetch(url, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${this.key}`
				}
			})

			const data = await result.json();
			return data.posts;
		} catch(e) {
			console.log(e.response);
		}
	}

	async getPost(slug) {
		const url = `${apiUrl}/app/${this.domain}/posts/${slug}`;

		try {
			const result = await fetch(url, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${this.key}`
				}
			});

			const data = await result.json();
			return data.post;
		} catch(e) {
			console.log(e.response);
		}
	}

	async getPostComments(post_id) {
		const url = `${apiUrl}/app/${this.domain}/comments/${post_id}`;

		try {
			const result = await fetch(url, {
				headers: {
					Authorization: `Bearer ${this.key}`
				}
			});

			const data = await result.json();
			return data;
		} catch(e) {
			console.log(e.response);
		}
	}

	async getAllSubscribers() {
		const url = `${apiUrl}/app/${this.domain}/subscribers`;

		try {
			const result = await fetch(url, {
				headers: {
					Authorization: `Bearer ${this.key}`
				}
			});

			const data = await result.json();
			return data;
		} catch(e) {
			console.log(e.response);
		}
	}

	async getAllTags() {
		const url = `${apiUrl}/app/${this.domain}/tags`;

		try {
			const result = await fetch(url, {
				headers: {
					Authorization: `Bearer ${this.key}`
				}
			});

			const data = await result.json();
			return data;
		} catch(e) {
			console.log(e.response);
		}
	}
};