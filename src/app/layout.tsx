import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#6366f1",
};

export const metadata: Metadata = {
  title: "Filosofía Total - Aprende Filosofía",
  description: "Una aplicación completa de aprendizaje de filosofía con contenido offline. Explora las ramas de la filosofía, filósofos famosos y pon a prueba tus conocimientos.",
  authors: [{ name: "Filosofía Total" }],
  keywords: ["filosofía", "aprendizaje", "educación", "filósofos", "metafísica", "ética", "epistemología", "offline"],
  manifest: "/filosofia-total/manifest.json",
  icons: {
    icon: [
      { url: "/filosofia-total/icons/icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/filosofia-total/icons/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/filosofia-total/icons/icon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/filosofia-total/icons/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/filosofia-total/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/filosofia-total/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/filosofia-total/icons/icon-384x384.png", sizes: "384x384", type: "image/png" },
      { url: "/filosofia-total/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/filosofia-total/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/filosofia-total/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Filosofía Total",
    description: "Aprende filosofía de forma interactiva y offline",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Filosofía Total",
    description: "Aprende filosofía de forma interactiva y offline",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Filosofía Total",
    "application-name": "Filosofía Total",
    "msapplication-TileColor": "#6366f1",
    "msapplication-tap-highlight": "no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/filosofia-total/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Filosofía Total" />
        <meta name="application-name" content="Filosofía Total" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="msapplication-tap-highlight" content="no" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/filosofia-total/sw.js').then(
                    function(registration) {
                      console.log('Service Worker registered with scope:', registration.scope);
                    },
                    function(err) {
                      console.log('Service Worker registration failed:', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
