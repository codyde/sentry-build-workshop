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
                      { label: 'Code Breaks... So What Now', slug: 'code-breaks' },
                      { label: 'Configuring Sentry', slug: 'configure-sentry' },
                      {
                          label: 'Debugging Issues',
                          items: [
                              { label: 'Introduction', slug: 'debugging-issues' },
                              { label: 'Issue 1: Shattered APIs', slug: 'debugging-issues/issue-1-products-api' },
                              { label: 'Issue 2: Fix me is broken', slug: 'debugging-issues/issue-2-fix-me-button' },
                              { label: 'Issue 3: Auth who?', slug: 'debugging-issues/issue-3-auth-header' },
                              { label: 'Issue 4: Pay me, pay not', slug: 'debugging-issues/issue-4-payment-processing' }
                          ]
                      },
                      { label: 'Wrapping Up!', slug: 'wrapping-up' },
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

  // Configure Vercel adapter with specific options for assets
  adapter: vercel({
    includeFiles: [
      './src/assets/**/*', 
      './src/assets/img/**/*',
      './src/assets/img/**/*.gif',
      './src/assets/sentry-glyph-light-400x367.png'
    ],
  }),
});