<script>
    let { form } = $props();

    let message = "(waiting for submission...)";

    if (form && form.success) {
        message = "Thank you " + form.name +
            ", your " + form.event + " enquiry has been received!";
    }
</script>

<h2>Booking Enquiry</h2>

<p>{message}</p>

<form method="POST">
    <label>
        Name:
        <input name="name" required>
    </label>

    <br><br>

    <label>
        Event Type:
        <select name="event">
            <option value="birthday">Birthday</option>
            <option value="family">Family Party</option>
            <option value="wedding">Wedding</option>
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