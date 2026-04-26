<script>
    let { form } = $props();
</script>

<h2>Register</h2>

{#if form?.error}
    <p class="error">{form.error}</p>
{/if}

<form method="POST">
    <label>
        Email:
        <input type="email" name="username" required>
    </label>

    <br><br>

    <label>
        Password:
        <input type="password" name="password" required>
    </label>

    <br><br>

    <button>Register</button>
</form>

<p>Already have an account? <a href="/login">Login</a></p>

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

    input {
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

    .error {
        color: #b00020;
        font-weight: bold;
        background-color: #ffecec;
        border: 1px solid #f5a5a5;
        padding: 0.6rem;
        border-radius: 5px;
    }
</style>