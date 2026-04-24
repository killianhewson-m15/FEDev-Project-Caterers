<script>
    import packages from '$lib/data/packages.json';

    let birthdayPackages = packages.filter((pkg) => pkg.event === 'Birthday');
    let familyPackages = packages.filter((pkg) => pkg.event === 'Family Party');
    let weddingPackages = packages.filter((pkg) => pkg.event === 'Wedding');
</script>

<h2>Catering Packages</h2>

<p>
    Choose a catering package based on the type of event you are planning.
    Each package has its own detail page with more information.
</p>

<section>
    <h3>Birthday Packages</h3>
    <div class="package-grid">
        {#each birthdayPackages as pkg}
            <div class="card birthday">
                <p class="tag">{pkg.event}</p>
                <h4>{pkg.name}</h4>
                <p>{pkg.description}</p>
                <p><strong>Price:</strong> €{pkg.price}</p>
                <a href="/packages/{pkg.id}">View details</a>
            </div>
        {/each}
    </div>
</section>

<section>
    <h3>Family Party Packages</h3>
    <div class="package-grid">
        {#each familyPackages as pkg}
            <div class="card family">
                <p class="tag">{pkg.event}</p>
                <h4>{pkg.name}</h4>
                <p>{pkg.description}</p>
                <p><strong>Price:</strong> €{pkg.price}</p>
                <a href="/packages/{pkg.id}">View details</a>
            </div>
        {/each}
    </div>
</section>

<section>
    <h3>Wedding Packages</h3>
    <div class="package-grid">
        {#each weddingPackages as pkg}
            <div class="card wedding">
                <p class="tag">{pkg.event}</p>
                <h4>{pkg.name}</h4>
                <p>{pkg.description}</p>
                <p><strong>Price:</strong> €{pkg.price}</p>
                <a href="/packages/{pkg.id}">View details</a>
            </div>
        {/each}
    </div>
</section>

<style>
    section {
        margin-top: 2rem;
    }

    .package-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
        gap: 1rem;
    }

    .card {
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 1rem;
        background-color: #fff;
        border-top: 6px solid #7b2d26;
    }

    .card:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    }

    .tag {
        display: inline-block;
        background-color: #f3d7d2;
        color: #7b2d26;
        padding: 0.2rem 0.5rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: bold;
    }

    h4 {
        margin-bottom: 0.5rem;
    }

    a {
        color: #7b2d26;
        font-weight: bold;
    }
</style>