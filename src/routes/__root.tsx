import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { createSeo, localBusinessJsonLd } from "../lib/seo";
import { LenisProvider } from "../lib/lenis-provider";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl neon-red">404</h1>
        <h2 className="mt-4 font-display text-2xl">Wrong way, champ.</h2>
        <p className="mt-2 text-sm text-bone/70">This play didn't connect.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-[var(--blitz)] px-6 py-3 font-display tracking-widest text-white">
            BACK TO THE BAR
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Something fumbled.</h1>
        <p className="mt-2 text-sm text-bone/70">Try again — we got you.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-[var(--blitz)] px-4 py-2 font-display tracking-widest text-sm text-white">Try again</button>
          <a href="/" className="rounded-md border border-white/15 px-4 py-2 font-display tracking-widest text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const seo = createSeo({
      title: "Hail Mary's Sports Bar — Glendale's Best Damn Dive Bar",
      description: "Glendale sports and dive bar with NFL watch parties, karaoke, live music, bingo, poker, billiards, strong drinks, and a late-night patio.",
    });

    return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0B0B0D" },
      { name: "geo.region", content: "US-AZ" },
      { name: "geo.placename", content: "Glendale" },
      ...seo.meta,
    ],
    links: [
      ...seo.links,
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.svg" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat+Brush&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      <Scripts />
      </body>
    </html>
  );
}

export function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();
  const pathname = router.state.location.pathname;
  return (
    <QueryClientProvider client={queryClient}>
      <LenisProvider />
      <Nav />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </QueryClientProvider>
  );
}
