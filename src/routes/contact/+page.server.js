import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import packages from '$lib/data/packages.json';

export const actions = {
    default: async ({ request, cookies }) => {
        const username = cookies.get('username');
        const userId = cookies.get('userId');

        if (!username || !userId) {
            throw redirect(303, '/login');
        }

        const data = await request.formData();

        const name = data.get('name');
        const packageName = data.get('packageName');
        const message = data.get('message');

        const selectedPackage = packages.find(p => p.name === packageName);
        const event = selectedPackage.event;

        await db.execute({
            sql: `
				INSERT INTO bookings (user_id, name, event, package_name, message)
				VALUES (?, ?, ?, ?, ?)
			`,
            args: [userId, name, event, packageName, message]
        });

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