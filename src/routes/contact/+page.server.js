let bookings = []; // simple in-memory storage

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const name = data.get('name');
        const event = data.get('event');
        const message = data.get('message');

        const username = cookies.get('username');

        let booking = {
            name,
            event,
            message,
            user: username
        };

        bookings.push(booking);

        return {
            success: true,
            name,
            event,
            message,
            username
        };
    }
};