<script>
    import PackageCard from '$lib/components/PackageCard.svelte';
    import packages from '$lib/data/packages.json';

    let birthdayPackages = packages.filter((pkg) => pkg.event === 'Birthday');
    let familyPackages = packages.filter((pkg) => pkg.event === 'Family Party');
    let weddingPackages = packages.filter((pkg) => pkg.event === 'Wedding');
</script>

<h2>Catering Packages</h2>

<!-- Birthday -->
<h3>Birthday Packages</h3>
{#if birthdayPackages.length > 0}
    {#each birthdayPackages as pkg}
        <PackageCard
                id={pkg.id}
                name={pkg.name}
                event={pkg.event}
                description={pkg.description}
                price={pkg.price}
        />
    {/each}
{:else}
    <p>No birthday packages available.</p>
{/if}

<!-- Family -->
<h3>Family Party Packages</h3>
{#if familyPackages.length > 0}
    {#each familyPackages as pkg}
        <PackageCard
                id={pkg.id}
                name={pkg.name}
                event={pkg.event}
                description={pkg.description}
                price={pkg.price}
        />
    {/each}
{:else}
    <p>No family packages available.</p>
{/if}

<!-- Weddings -->
<h3>Wedding Packages</h3>
{#if weddingPackages.length > 0}
    {#each weddingPackages as pkg}
        <PackageCard
                id={pkg.id}
                name={pkg.name}
                event={pkg.event}
                description={pkg.description}
                price={pkg.price}
        />
    {/each}
{:else}
    <p>No wedding packages available.</p>
{/if}

<style>
    h2 {
        margin-bottom: 1rem;
    }

    h3 {
        margin-top: 2rem;
        color: #7b2d26;
    }
</style>