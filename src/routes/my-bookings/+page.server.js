import { db } from '$lib/server/db';

export async function load({ cookies }) {
    const userId = cookies.get('userId');

    let myBookings = [];

    if (userId) {
        const result = await db.execute({
            sql: `
				SELECT name, event, package_name AS packageName, message
				FROM bookings
				WHERE user_id = ?
				ORDER BY id DESC
			`,
            args: [userId]
        });

        myBookings = result.rows;
    }

    return {
        myBookings
    };
}