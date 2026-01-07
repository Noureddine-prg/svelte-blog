<script lang="ts">
	import { getAllPosts } from './posts.remote';
</script>

<ol>
	{#each await getAllPosts() as post (post.id)}
		<li>{post.title}</li>
		<li>{post.slug}</li>
		<li>{post.body}</li>
		<li>{post.createdAt}</li>
		<li>{post.updatedAt}</li>
	{/each}
</ol>

<!-- List all posts -->
