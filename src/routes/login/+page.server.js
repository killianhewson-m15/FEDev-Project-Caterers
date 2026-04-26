import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const username = data.get('username');
        const role = data.get('role');

        // Insert user if not exists
        await db.execute({
            sql: `
				INSERT INTO users (username, role)
				VALUES (?, ?)
				ON CONFLICT(username) DO UPDATE SET role = excluded.role
			`,
            args: [username, role]
        });

        // Get user ID
        const result = await db.execute({
            sql: 'SELECT id FROM users WHERE username = ?',
            args: [username]
        });

        const userId = result.rows[0].id;

        // Store in cookies
        cookies.set('username', username, { path: '/' });
        cookies.set('role', role, { path: '/' });
        cookies.set('userId', String(userId), { path: '/' });

        throw redirect(303, '/');
    }
};