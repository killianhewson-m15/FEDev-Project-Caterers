export function load({ cookies }) {
    const role = cookies.get('role');
    const savedBookings = cookies.get('bookings');

    let bookings = [];

    if (savedBookings) {
        bookings = JSON.parse(savedBookings);
    }

    return {
        role,
        bookings
    };
}