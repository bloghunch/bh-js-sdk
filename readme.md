# BlogHunch Node SDK
BlogHunch Node API helps you to easily access the API to fetch posts, pages etc.
## Features

- Fetch publication details.
- Fetch all posts and pages.
- Fetch SEO asscoiated to single posts or pages.

## Installation

BlogHunch [Node.js SDK](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm install bh-node-api
```

## How to use

```javascript
import { getAllPosts, getPost } from 'bh-node-api' 
```

Get all posts:

```javascript
const posts = await getAllPosts(apiKey, publicationDomain or publicationSubdomain)
```

Get single post:

```javascript
const post = await getPost(apiKey, publicationDomain or publicationSubdomain, slug)
```

## License

MIT