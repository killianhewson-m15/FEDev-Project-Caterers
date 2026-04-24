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