<script>
	let { children } = $props();

	let siteName = 'Celebrate Catering';
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
</style>