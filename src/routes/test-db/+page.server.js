import { db } from '$lib/server/db';

export async function load() {
    const result = await db.execute("SELECT * FROM users");

    return {
        users: result.rows
    };
}