export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const name = data.get('name');
        const event = data.get('event');
        const message = data.get('message');
        const username = cookies.get('username');

        let bookings = [];

        const savedBookings = cookies.get('bookings');

        if (savedBookings) {
            bookings = JSON.parse(savedBookings);
        }

        const booking = {
            id: Date.now(),
            name,
            event,
            message,
            user: username
        };

        bookings.push(booking);

        cookies.set('bookings', JSON.stringify(bookings), { path: '/' });

        return {
            success: true,
            name,
            event,
            message,
            username
        };
    }
};