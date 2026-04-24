<script>
    import packages from '$lib/data/packages.json';

    let { params } = $props();

    let packageId = params.id;

    let selectedPackage = packages.find((pkg) => pkg.id === packageId);
</script>

{#if selectedPackage}
    <h2>{selectedPackage.name}</h2>

    <p>{selectedPackage.description}</p>

    <p><strong>Event type:</strong> {selectedPackage.event}</p>
    <p><strong>Price:</strong> €{selectedPackage.price}</p>

    <a href="/packages">Back to packages</a>
{:else}
    <h2>Package not found</h2>

    <p>The selected catering package could not be found.</p>

    <a href="/packages">Back to packages</a>
{/if}