<script>
    let { id, name, description, price, event } = $props();
</script>

<div class="card">
    <p class="tag">{event}</p>
    <h3>{name}</h3>
    <p>{description}</p>
    <p><strong>Price:</strong> €{price}</p>
    <a href={"/packages/" + id}>View details</a>
</div>

<style>
    .card {
        background: white;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 1rem;
        margin-bottom: 1rem;
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

    a {
        color: #7b2d26;
        font-weight: bold;
    }
</style>