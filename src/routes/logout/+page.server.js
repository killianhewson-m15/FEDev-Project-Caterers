export function load({ cookies }) {
    cookies.delete('username', { path: '/' });
    cookies.delete('role', { path: '/' });

    return {};
}