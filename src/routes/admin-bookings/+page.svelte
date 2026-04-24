<script>
    let { data } = $props();

    let role = data.role;
    let bookings = data.bookings;
</script>

<h2>Admin Bookings</h2>

{#if role === 'admin'}
    {#if bookings.length > 0}
        {#each bookings as booking}
            <div class="card">
                <h3>{booking.event}</h3>
                <p><strong>Name:</strong> {booking.name}</p>
                <p><strong>User:</strong> {booking.user}</p>
                <p><strong>Message:</strong> {booking.message}</p>
            </div>
        {/each}
    {:else}
        <p>No booking enquiries have been submitted yet.</p>
    {/if}
{:else}
    <p>You must be logged in as admin to view this page.</p>
{/if}

<style>
    .card {
        border: 1px solid #ccc;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 8px;
    }
</style>