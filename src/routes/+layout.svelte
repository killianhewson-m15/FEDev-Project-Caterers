<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
</svelte:head>

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
		<a href="/my-bookings">My Bookings</a>
		{#if data.role === 'admin'}
			<a href="/admin-bookings">Admin Bookings</a>
		{/if}
		<a href="/about">About</a>
		<a href="/packages">Packages</a>
		<a href="/birthdays">Birthdays</a>
		<a href="/family-parties">Family Parties</a>
		<a href="/weddings">Weddings</a>
		<a href="/contact">Contact</a>
	</nav>

	<div class="login-status">
		{#if data.isLoggedIn}
			<p>
				Logged in as <strong>{data.username}</strong> ({data.role})
				<a href="/logout" class="btn" data-sveltekit-reload>Logout</a>
			</p>
		{:else}
			<a href="/login" class="btn">Login</a>
			<a href="/register" class="btn">Register</a>
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

	nav a:hover {
		text-decoration: underline;
	}

	main {
		padding: 1.5rem;
		max-width: 1000px;
		margin: auto;
		min-height: 70vh;
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
		background-color: white;
		color: #7b2d26;
		padding: 0.4rem 0.8rem;
		margin-left: 1rem;
		border-radius: 5px;
		text-decoration: none;
		font-weight: bold;
	}

	.btn:hover {
		background-color: #f3d7d2;
	}

	:global(body) {
		font-family: 'Open Sans', Arial, sans-serif;
		margin: 0;
	}

	h1,
	h2,
	h3,
	h4 {
		font-family: 'Merriweather', Georgia, serif;
	}
</style>