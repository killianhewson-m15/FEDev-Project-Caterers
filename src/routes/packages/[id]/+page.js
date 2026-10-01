import { error } from '@sveltejs/kit';
import packages from '$lib/data/packages.json';

export function load({ params }) {
    const selectedPackage = packages.find((pkg) => pkg.id === params.id);

    if (!selectedPackage) {
        throw error(404, 'Catering package not found.');
    }

    return { selectedPackage };
}
