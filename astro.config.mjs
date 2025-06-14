// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

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
            { label: 'Quickstart', slug: 'quickstart' },
            { label: 'Configuring Sentry', slug: 'configure-sentry' },
            {
              label: 'Debugging Issues',
              items: [
                { label: 'Introduction', slug: 'debugging-issues' },
                {
                  label: 'Issue 1: Why...So...Slow?',
                  slug: 'debugging-issues/issue-1-why-so-slow',
                },
                {
                  label: 'Issue 2: Flaky Add to Cart Button',
                  slug: 'debugging-issues/issue-2-flaky-add-to-cart-button',
                },
                {
                  label: "Issue 3: Can't Check Out!!!",
                  slug: 'debugging-issues/issue-3-cant-check-out',
                },
              ],
            },
            { label: 'Wrapping Up!', slug: 'wrapping-up' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'Sentry Documentation', link: 'https://docs.sentry.io/' },
            {
              label: 'Next.js SDK',
              link: 'https://docs.sentry.io/platforms/javascript/guides/nextjs/',
            },
          ],
        },
      ],
    }),
  ],

  // Configure Vercel adapter with specific options for assets
  adapter: vercel({
    includeFiles: [
      './src/assets/**/*',
      './src/assets/img/**/*',
      './src/assets/img/**/*.gif',
      './src/assets/sentry-glyph-light-400x367.png',
    ],
  }),
});
