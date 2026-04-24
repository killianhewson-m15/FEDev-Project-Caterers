<script>
    import familyPartyImage from '$lib/assets/familyParty.jpg';
</script>

<h2>Family Party Catering</h2>

<div class="event-page">
    <div>
        <p>
            Our family party catering is suitable for gatherings such as anniversaries,
            communions, confirmations, reunions and casual celebrations.
        </p>

        <p>
            Family parties often include guests of different ages, so the food needs to be
            flexible. We offer buffet-style options, hot dishes, salads, desserts and drinks
            that can suit both adults and children.
        </p>

        <p>
            This service is useful for customers who want to host a family event without
            having to prepare all the food themselves.
        </p>

        <div class="links">
            <a href="/packages">View Catering Packages</a>
            <a href="/contact">Make a Booking Enquiry</a>
        </div>
    </div>

    <img src={familyPartyImage} alt="Family party catering">
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