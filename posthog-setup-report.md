<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the DevEvent Next.js App Router project. The following changes were made:

- **`instrumentation-client.js`** (new): Initializes PostHog client-side using the Next.js 15.3+ `instrumentation-client` pattern. Configured with a reverse proxy (`/ingest`), exception capture, and debug mode in development.
- **`next.config.mjs`**: Added reverse proxy rewrites routing `/ingest/*` to PostHog's US ingestion endpoint, plus `skipTrailingSlashRedirect: true` for PostHog API compatibility.
- **`.env.local`**: Created with `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables (gitignore-covered).
- **`app/components/ExploreBtn.jsx`**: Added `posthog.capture('explore_events_clicked')` in the button's onClick handler.
- **`app/components/EventCard.jsx`**: Added `"use client"` directive and `posthog.capture('event_card_clicked', { title, slug, location, date })` on the Link's onClick.
- **`app/components/HomepageTracker.jsx`** (new): Small client component that fires `posthog.capture('homepage_viewed')` on mount via `useEffect`.
- **`app/page.js`**: Added `<HomepageTracker />` to trigger the `homepage_viewed` event when the homepage loads.

| Event Name | Description | File |
|---|---|---|
| `homepage_viewed` | User viewed the homepage (top of conversion funnel) | `app/page.js` via `app/components/HomepageTracker.jsx` |
| `explore_events_clicked` | User clicked the 'Explore Events' CTA button on the homepage | `app/components/ExploreBtn.jsx` |
| `event_card_clicked` | User clicked on an event card to view its detail page | `app/components/EventCard.jsx` |

## Next steps

You can build insights and a dashboard in your PostHog project at https://us.posthog.com to keep an eye on user behavior based on the events instrumented above. Suggested insights:

- **Homepage Views trend** — Track `homepage_viewed` over time to see traffic volume.
- **Explore Events CTR** — Track `explore_events_clicked` as a ratio of `homepage_viewed` to measure CTA effectiveness.
- **Event Card Clicks** — Track `event_card_clicked` broken down by `title` to see which events get the most interest.
- **Conversion funnel** — `homepage_viewed` → `explore_events_clicked` → `event_card_clicked` to visualize the discovery funnel.

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
