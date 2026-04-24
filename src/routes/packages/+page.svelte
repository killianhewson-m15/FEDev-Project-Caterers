<script>
    import packages from '$lib/data/packages.json';
</script>

<h2>Catering Packages</h2>

{#each packages as pkg}
    <div class="card">
        <h3>{pkg.name}</h3>
        <p>{pkg.description}</p>
        <p><strong>Price:</strong> €{pkg.price}</p>
        <a href="/packages/{pkg.id}">View details</a>
    </div>
{/each}

<style>
    .card {
        border: 1px solid #ccc;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 8px;
    }
</style>