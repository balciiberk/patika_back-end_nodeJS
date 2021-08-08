let posts = [
	{post: 'post 1', author: 'author 1'},
	{post: 'post 2', author: 'author 2'},
	{post: 'post 3', author: 'author 1'}
]

const addPost = post => {
	const promise = new Promise((resolve, reject) => {
		posts.push(post);
		resolve(posts);
		//reject('error occurred while adding post');
	})

	return promise;
}

const listPosts = () => {
	posts.map(post => console.log(post.post))
}

async function addAndList() {
	try {
	newPosts = await addPost({post: 'post 4', author: 'author 2'});
	listPosts()
	}
	catch (err) {
		console.log(err)
	}

}

console.log('OLD POSTS:');
listPosts();

console.log('NEW POSTS:');
addAndList();

