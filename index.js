import axios from "axios";

let getAllPosts = async function(key, domain) {
	var result;

	try {
		result = await axios
		.get(`https://api.bloghunch.com/app/${domain}/posts`, {
			headers: {
				Authorization: `Bearer ${key}`
			}
		})
	} catch(e) {
		console.log(e);
	}
	
	return result.data.posts;
}

let getPost = async function(key, domain, slug) {
	var result;

	try {
		result = await axios
		.get(`https://api.bloghunch.com/app/${domain}/posts/${slug}`, {
			headers: {
				Authorization: `Bearer ${key}`
			}
		})
	} catch(e) {
		console.log(e);
	}
	
	return result.data.post;
}

export {
	getAllPosts,
	getPost
}