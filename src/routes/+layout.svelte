<script>
	let { children, data } = $props();

	let siteName = 'Celebrate Catering';
	let username = data.username;
	let role = data.role;
	let isLoggedIn = data.isLoggedIn;
</script>

<header>
	<h1>{siteName}</h1>

	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/packages">Packages</a>
		<a href="/birthdays">Birthdays</a>
		<a href="/family-parties">Family Parties</a>
		<a href="/weddings">Weddings</a>
		<a href="/contact">Contact</a>
	</nav>

	<div class="login-status">
		{#if isLoggedIn}
			<p>
				Logged in as <strong>{username}</strong> ({role})
				<a href="/logout" class="btn">Logout</a>
			</p>
		{:else}
			<a href="/login" class="btn">Login</a>
		{/if}
	</div>
</header>

<main>
	{@render children()}
</main>

<footer>
	<p>&copy; 2026 Celebrate Catering</p>
</footer>

<style>
	header {
		background-color: #7b2d26;
		color: white;
		padding: 1rem;
	}

	h1 {
		margin: 0;
	}

	nav {
		margin-top: 1rem;
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	nav a {
		color: white;
		text-decoration: none;
		font-weight: bold;
	}

	main {
		padding: 1.5rem;
		max-width: 1000px;
		margin: auto;
	}

	footer {
		margin-top: 2rem;
		padding: 1rem;
		text-align: center;
		background-color: #eee;
	}

	.login-status {
		margin-top: 1rem;
	}

	.btn {
		background-color: #5d7b26;
		color: white;
		padding: 0.4rem 0.8rem;
		margin-left: 1rem;
		border-radius: 5px;
		text-decoration: none;
		font-weight: bold;
	}

	.btn:hover {
		background-color: #a03a32;
	}
</style>