import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://2ed4fdfbc3b25cf27d7ab3ed9566918c@o4509383280754688.ingest.de.sentry.io/4509685559328848",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      disableServerWebpackPlugin: true,
      disableClientWebpackPlugin: true,
    }),
  ],
});