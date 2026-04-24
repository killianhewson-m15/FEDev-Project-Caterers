import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
    cookies.delete('username', { path: '/' });
    cookies.delete('role', { path: '/' });

    throw redirect(303, '/?loggedOut=true');
}