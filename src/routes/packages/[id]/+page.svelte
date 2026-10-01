<script>
    let { data } = $props();
</script>

<h2>{data.selectedPackage.name}</h2>

<p>{data.selectedPackage.description}</p>

<p><strong>Event type:</strong> {data.selectedPackage.event}</p>
<p><strong>Price:</strong> €{data.selectedPackage.price}</p>

<a href="/packages">Back to packages</a>
