import packages from '$lib/data/packages.json';
import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const name = data.get('name');
        const packageName = data.get('packageName');
        const selectedPackage = packages.find((pkg) => pkg.name === packageName);
        const event = selectedPackage.event;
        const message = data.get('message');
        const username = cookies.get('username');

        if (!username) {
            throw redirect(303, '/login');
        }

        let bookings = [];

        const savedBookings = cookies.get('bookings');

        if (savedBookings) {
            bookings = JSON.parse(savedBookings);
        }

        const booking = {
            id: Date.now(),
            name,
            event,
            packageName,
            message,
            user: username
        };

        bookings.push(booking);

        cookies.set('bookings', JSON.stringify(bookings), { path: '/' });

        return {
            success: true,
            name,
            event,
            packageName,
            message,
            username
        };
    }
};