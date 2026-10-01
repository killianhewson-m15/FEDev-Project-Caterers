import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { hashPassword, isPasswordHash, verifyPassword } from '$lib/server/password';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const username = String(data.get('username') ?? '').trim().toLowerCase();
        const password = String(data.get('password') ?? '');

        const result = await db.execute({
            sql: 'SELECT id, username, password, role FROM users WHERE username = ?',
            args: [username]
        });

        if (result.rows.length === 0) {
            return fail(400, { error: 'Incorrect email or password.' });
        }

        const user = result.rows[0];
        const storedPassword = String(user.password);
        const passwordIsValid = isPasswordHash(storedPassword)
            ? await verifyPassword(password, storedPassword)
            : storedPassword === password;

        if (!passwordIsValid) {
            return fail(400, { error: 'Incorrect email or password.' });
        }

        if (!isPasswordHash(storedPassword)) {
            await db.execute({
                sql: 'UPDATE users SET password = ? WHERE id = ?',
                args: [await hashPassword(password), user.id]
            });
        }

        cookies.set('username', user.username, { path: '/' });
        cookies.set('role', user.role, { path: '/' });
        cookies.set('userId', String(user.id), { path: '/' });

        throw redirect(303, '/');
    }
};
