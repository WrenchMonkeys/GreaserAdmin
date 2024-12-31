import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const post = await import(`../../../../../posts/${params.slug}.md`);

	return json({
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: `"${post.metadata.title}"`,
		description: `"${post.metadata.description}"`,
		image: `"${post.metadata.image}"`,
		author: {
			'@type': 'Organization',
			name: 'MobileGreaser'
		},
		publisher: {
			'@type': 'Organization',
			name: 'MobileGreaser',
			logo: {
				'@type': 'ImageObject',
				url: 'https://mobilegreaser.com/mobile_greaser_banner.jpg'
			}
		},
		datePublished: `"${post.metadata.date}"`,
		dateModified: `"${post.metadata.date}"`,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `"https://mobilegreaser.com/blog/${params.slug}"`
		}
	});
};
