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
        {/* ✅ Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "JaiClub",
              url: "https://jaiclub.house",
              description:
                "JaiClub is India's top online gaming platform where you play games and win real cash rewards.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://jaiclub.house/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* ✅ FAQ Schema — Google pe special FAQ box dikhayega */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is JaiClub?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "JaiClub is an online gaming platform where players can play exciting games and win real cash rewards.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to register on JaiClub?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Click Register Now on jaiclub.house, fill your details and start playing on JaiClub instantly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to login to JaiClub?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Visit jaiclub.house and click the Login button, then enter your registered mobile number and password.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is JaiClub safe?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, JaiClub is a trusted gaming platform with lakhs of active players winning real rewards daily.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}