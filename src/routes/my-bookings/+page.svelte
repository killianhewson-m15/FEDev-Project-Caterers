<script>
    let { data } = $props();

    let username = data.username;
    let myBookings = data.myBookings;
</script>

<h2>My Bookings</h2>

{#if username}
    <p>Bookings for: <strong>{username}</strong></p>

    {#if myBookings.length > 0}
        {#each myBookings as booking}
            <div class="card">
                <h3>{booking.event}</h3>
                <p><strong>Name:</strong> {booking.name}</p>
                <p><strong>Message:</strong> {booking.message}</p>
            </div>
        {/each}
    {:else}
        <p>You have not submitted any booking enquiries yet.</p>
    {/if}
{:else}
    <p>Please log in to view your bookings.</p>
{/if}

<style>
    .card {
        border: 1px solid #ccc;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 8px;
    }
</style>