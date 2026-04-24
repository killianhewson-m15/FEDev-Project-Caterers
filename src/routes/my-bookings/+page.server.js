export function load({ cookies }) {
    const username = cookies.get('username');
    const savedBookings = cookies.get('bookings');

    let bookings = [];

    if (savedBookings) {
        bookings = JSON.parse(savedBookings);
    }

    const myBookings = bookings.filter((booking) => booking.user === username);

    return {
        username,
        myBookings
    };
}