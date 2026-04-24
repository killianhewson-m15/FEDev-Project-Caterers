export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const username = data.get('username');
        const role = data.get('role');

        cookies.set('username', username, { path: '/' });
        cookies.set('role', role, { path: '/' });

        return {
            success: true,
            username,
            role
        };
    }
};