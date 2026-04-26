import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';

const adminUsername = 'admin@celebratecatering.ie';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const username = data.get('username');
        const password = data.get('password');

        const existing = await db.execute({
            sql: 'SELECT id FROM users WHERE username = ?',
            args: [username]
        });

        if (existing.rows.length > 0) {
            return fail(400, {
                error: 'An account with this email already exists.'
            });
        }

        const role = username === adminUsername ? 'admin' : 'customer';

        await db.execute({
            sql: `
				INSERT INTO users (username, password, role)
				VALUES (?, ?, ?)
			`,
            args: [username, password, role]
        });

        const result = await db.execute({
            sql: 'SELECT id FROM users WHERE username = ?',
            args: [username]
        });

        const userId = result.rows[0].id;

        cookies.set('username', username, { path: '/' });
        cookies.set('role', role, { path: '/' });
        cookies.set('userId', String(userId), { path: '/' });

        throw redirect(303, '/');
    }
};