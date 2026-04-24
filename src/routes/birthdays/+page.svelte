<script>
    import birthdayImage from '$lib/assets/birthday.webp';
</script>

<h2>Birthday Catering</h2>

<div class="event-page">
    <div>
        <p>
            Our birthday catering service is designed for children, teenagers and adults.
            We can provide simple party food, buffet-style meals, desserts and drinks.
        </p>

        <p>
            Birthday events are usually more relaxed than formal events, so the food should
            be easy to serve and easy for guests to enjoy. Popular options include sandwiches,
            finger food, hot snacks, cupcakes and soft drinks.
        </p>

        <p>
            This type of catering is suitable for small home parties, larger venue bookings
            and milestone birthdays.
        </p>

        <div class="links">
            <a href="/packages">View Catering Packages</a>
            <a href="/contact">Make a Booking Enquiry</a>
        </div>
    </div>

    <img src={birthdayImage} alt="Birthday catering table">
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