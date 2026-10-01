import { fail, redirect } from '@sveltejs/kit';
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

        const name = String(data.get('name') ?? '').trim();
        const packageName = String(data.get('packageName') ?? '').trim();
        const message = String(data.get('message') ?? '').trim();

        if (!name || name.length > 100) {
            return fail(400, { error: 'Enter a name of no more than 100 characters.' });
        }

        if (message.length > 1000) {
            return fail(400, { error: 'Message must be no more than 1,000 characters.' });
        }

        const selectedPackage = packages.find((pkg) => pkg.name === packageName);

        if (!selectedPackage) {
            return fail(400, { error: 'Select a valid catering package.' });
        }

        await db.execute({
            sql: `
				INSERT INTO bookings (user_id, name, event, package_name, message)
				VALUES (?, ?, ?, ?, ?)
			`,
            args: [userId, name, selectedPackage.event, packageName, message]
        });

        return {
            success: true,
            name,
            packageName,
            message,
            username
        };
    }
};
