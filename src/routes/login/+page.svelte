<script>
    let { form } = $props();

    let message = '';

    if (form && form.success) {
        message = 'Login successful';
    }
</script>

<h2>Login</h2>

{#if message}
    <p>{message}</p>
{/if}

<form method="POST">
    <label>
        Username:
        <input name="username" required>
    </label>

    <br><br>

    <label>
        Role:
        <select name="role">
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
        </select>
    </label>

    <br><br>

    <button>Login</button>
</form>

<style>
    form {
        max-width: 400px;
        background-color: #f7f7f7;
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid #ccc;
    }

    label {
        font-weight: bold;
    }

    input,
    select {
        width: 100%;
        padding: 0.5rem;
        margin-top: 0.3rem;
        box-sizing: border-box;
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