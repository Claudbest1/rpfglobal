export type Editorial = {
	id: string;
	title: string;
	excerpt: string;
	date: string;
	author?: string;
	href?: string;
};

/**
 * Add editorials here. Set `href` for external links or future article pages.
 */
export const editorials: Editorial[] = [];
