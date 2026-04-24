<script>
    import weddingImage from '$lib/assets/wedding.jpg';
</script>

<h2>Wedding Catering</h2>

<div class="event-page">
    <div>
        <p>
            Our wedding catering service is designed for larger and more formal events.
            We can help provide food for receptions, evening celebrations and full wedding meals.
        </p>

        <p>
            Weddings usually require more planning than other events, so our packages focus on
            reliability, presentation and a clear menu structure. Options may include starters,
            main courses, desserts, buffet food and drinks.
        </p>

        <p>
            This service is suitable for couples who want a professional catering option that
            can be planned around their guest numbers and event style.
        </p>

        <div class="links">
            <a href="/packages">View Catering Packages</a>
            <a href="/contact">Make a Booking Enquiry</a>
        </div>
    </div>

    <img src={weddingImage} alt="Wedding catering setup">
</div>

<style>
    .event-page {
        display: flex;
        gap: 2rem;
        align-items: flex-start;
    }

    img {
        width: 350px;
        max-width: 100%;
        border-radius: 8px;
    }

    .links {
        margin-top: 1rem;
    }

    a {
        display: inline-block;
        margin-right: 1rem;
        font-weight: bold;
        color: #7b2d26;
    }
</style>