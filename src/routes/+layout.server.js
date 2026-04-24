export function load({ cookies }) {
    const username = cookies.get('username');
    const role = cookies.get('role');

    let isLoggedIn = false;

    if (username) {
        isLoggedIn = true;
    }

    return {
        username,
        role,
        isLoggedIn
    };
}