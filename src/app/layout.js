import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://jaiclub.house"),

  title: {
    default: "JaiClub – Play Games & Win Real Rewards Online",
    template: "%s | JaiClub",
  },

  description:
    "JaiClub is India's top online gaming platform. Register now to play exciting games and win real cash rewards. Join lakhs of players on JaiClub today!",

  keywords: [
    "JaiClub",
    "Jai Club",
    "JaiClub login",
    "JaiClub register",
    "JaiClub game",
    "online earning game India",
    "play and win real money India",
    "jaiclub08",
    "real cash game app",
    "online game earn money",
  ],

  icons: {
    icon: "/logo.png",     
    shortcut: "/logo.png",
    apple: "/logo.png",     
  },

  alternates: {
    canonical: "https://jaiclub.house",
  },

  openGraph: {
    title: "JaiClub – Play Games & Win Real Rewards Online",
    description:
      "Join JaiClub and play exciting online games to win real cash rewards. Register now and start earning today!",
    url: "https://jaiclub.house",
    siteName: "JaiClub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JaiClub - Play and Win Real Rewards",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "JaiClub – Play Games & Win Real Rewards Online",
    description:
      "India's top gaming platform. Register on JaiClub and win real cash rewards today!",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ Google Search Console Verification — ADD HO GAYA
  verification: {
    google: "3mgo4-Wrje8YSRigmAZHahCks9KL3h68UtsC3v6Xkz4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 🔥 WEBSITE + BRAND SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "JaiClub",
              url: "https://jaiclub.house",
              logo: "https://jaiclub.house/logo.png",
              sameAs: [
                "https://twitter.com/",
                "https://www.instagram.com/",
              ],
            }),
          }}
        />

        {/* 🔥 WEBSITE SEARCH SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "JaiClub",
              url: "https://jaiclub.house",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://jaiclub.house/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}