# BlogHunch Node SDK
BlogHunch Node API helps you to easily access the API to fetch posts, pages, comments, subscribers, and tags.
## Features

- Fetch all posts and pages.
- Fetch a single post or page.
- Fetch all commnets of a post.
- Fetch all subscribers.
- Fetch all tags.

## Installation

BlogHunch [Node.js SDK](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm install bh-node-api
```

## How to use

```javascript
import ApiClient from 'bh-node-api' 

const client = ApiClient(token, subdomain)
```

Check out the entire API documentation here(https://api-docs.bloghunch.com/). Feel free to reach out to support(https://bloghunch.com/contact) for any queries.

## License

MIT