import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const username = data.get('username');
        const password = data.get('password');

        const result = await db.execute({
            sql: 'SELECT id, username, password, role FROM users WHERE username = ?',
            args: [username]
        });

        if (result.rows.length === 0) {
            return fail(400, {
                error: 'No account found with that email.'
            });
        }

        const user = result.rows[0];

        if (user.password !== password) {
            return fail(400, {
                error: 'Incorrect password.'
            });
        }

        cookies.set('username', user.username, { path: '/' });
        cookies.set('role', user.role, { path: '/' });
        cookies.set('userId', String(user.id), { path: '/' });

        throw redirect(303, '/');
    }
};