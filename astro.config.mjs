// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Sentry Build',
			logo: {
				src: './src/assets/placeholder.svg',
				replacesTitle: true,
			},
			components: {
				// Use our custom logo component
				SiteTitle: './src/components/SentryLogo.astro',
			},
			social: {
				github: 'https://github.com/getsentry/sentry-build-workshop',
			},
			customCss: [
				// Add our custom Sentry theme
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Workshop',
					items: [
						{ label: 'Code Breaks... So What Now', slug: 'code-breaks' },
						{ label: 'Fix it faster!', slug: 'fix-it-faster' },
						{ label: 'Instrumenting Errors', slug: 'instrumenting-errors' },
						{ label: 'Replaying the Problem', slug: 'session-replay' },
						{ label: 'Tracing Performance', slug: 'tracing-performance' },
						{ label: 'AI Autofix Robots Arrive to Fix Bugs', slug: 'ai-autofix' },
					],
				},
				{
					label: 'Resources',
					items: [
						{ label: 'Sentry Documentation', link: 'https://docs.sentry.io/' },
						{ label: 'Next.js SDK', link: 'https://docs.sentry.io/platforms/javascript/guides/nextjs/' },
					],
				},
			],
		}),
	],
});
