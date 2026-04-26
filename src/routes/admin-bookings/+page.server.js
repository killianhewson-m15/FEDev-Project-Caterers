import { db } from '$lib/server/db';

export async function load({ cookies }) {
    const role = cookies.get('role');

    let bookings = [];

    if (role === 'admin') {
        const result = await db.execute(`
			SELECT 
				bookings.name,
				bookings.event,
				bookings.package_name AS packageName,
				bookings.message,
				users.username AS user
			FROM bookings
			JOIN users ON bookings.user_id = users.id
			ORDER BY bookings.id DESC
		`);

        bookings = result.rows;
    }

    return {
        role,
        bookings
    };
}