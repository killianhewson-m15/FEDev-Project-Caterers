export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const name = data.get('name');
        const event = data.get('event');
        const message = data.get('message');

        return {
            name,
            event,
            message
        };
    }
};