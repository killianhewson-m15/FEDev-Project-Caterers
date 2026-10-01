<script>
    import packages from '$lib/data/packages.json';
    let { form } = $props();
</script>

<h2>Booking Enquiry</h2>

{#if form?.success}
    <p>Thank you {form.name}. Your enquiry for {form.packageName} has been received and saved.</p>
{:else}
    <p>(waiting for submission...)</p>
{/if}

<form method="POST">
    <label>
        Name:
        <input name="name" required>
    </label>

    <br><br>

    <label>
        Package:
        <select name="packageName" required>
            {#each packages as pkg}
                <option value={pkg.name}>{pkg.name} - €{pkg.price}</option>
            {/each}
        </select>
    </label>

    <br><br>

    <label>
        Message:
        <textarea name="message"></textarea>
    </label>

    <br><br>

    <button>Submit Enquiry</button>
</form>

<style>
    form {
        max-width: 500px;
        background-color: #f7f7f7;
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid #ccc;
    }

    label {
        font-weight: bold;
    }

    input,
    select,
    textarea {
        width: 100%;
        padding: 0.5rem;
        margin-top: 0.3rem;
        box-sizing: border-box;
    }

    textarea {
        min-height: 100px;
    }

    button {
        background-color: #7b2d26;
        color: white;
        padding: 0.6rem 1rem;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
    }

    button:hover {
        background-color: #a03a32;
    }
</style>
