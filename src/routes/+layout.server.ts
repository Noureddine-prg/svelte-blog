import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
	//can do db stuff here
	console.log(locals);

	return {
		name: 'Nour'
	};
};
