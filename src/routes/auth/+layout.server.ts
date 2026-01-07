import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (locals.user?.id) {
		//if id exists, redirect to home page
		throw redirect(302, '/');
	}
};
