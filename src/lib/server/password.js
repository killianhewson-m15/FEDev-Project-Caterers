import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';

const scrypt = promisify(scryptCallback);
const keyLength = 64;

export function isPasswordHash(value) {
    return typeof value === 'string' && value.startsWith('scrypt$');
}

export async function hashPassword(password) {
    const salt = randomBytes(16).toString('hex');
    const key = await scrypt(password, salt, keyLength);

    return `scrypt$${salt}$${Buffer.from(key).toString('hex')}`;
}

export async function verifyPassword(password, storedHash) {
    const [, salt, hash] = storedHash.split('$');

    if (!salt || !hash) {
        return false;
    }

    const storedKey = Buffer.from(hash, 'hex');

    if (storedKey.length !== keyLength) {
        return false;
    }

    const suppliedKey = Buffer.from(await scrypt(password, salt, keyLength));
    return timingSafeEqual(storedKey, suppliedKey);
}
