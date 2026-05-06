export const metadata = {
  title: "JaiClub – Play Games & Win Real Rewards | Official Login & Register",
  description:
    "JaiClub is India's top online gaming platform. Register free, login securely, and win real cash rewards. Play skill & chance games on the official JaiClub portal.",
  keywords:
    "JaiClub, JaiClub login, JaiClub register, JaiClub APK download, jaiclub.house, online earning game India, real cash rewards, Jai Club official",
  openGraph: {
    title: "JaiClub – Play Games & Win Real Rewards",
    description:
      "India's most exciting online gaming platform. Free registration, secure login, real cash rewards.",
    url: "https://jaiclub.house",
    siteName: "JaiClub",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "JaiClub Official Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JaiClub – Play Games & Win Real Rewards",
    description:
      "Official JaiClub Login & Registration Portal. Win real cash rewards in India.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://jaiclub.house",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const redirectUrl =
    "https://www.jaiclub08.com/#/register?invitationCode=16571395630";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b1f] via-black to-black flex flex-col items-center justify-center px-4 text-center">

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "JaiClub",
            url: "https://jaiclub.house",
            description:
              "India's top online gaming platform – play games and win real cash rewards.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://jaiclub.house/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Logo */}
      <section className="mt-16 sm:mt-20 mb-8 flex justify-center">
        <img
          src="/logo.png"
          alt="JaiClub official logo - India's top online gaming platform"
          width={480}
          height={480}
          className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto rounded-[3rem] shadow-2xl object-contain transition-transform duration-300 hover:scale-105"
        />
      </section>

      {/* H1 */}
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 px-2">
        JaiClub – Play Games & Win Real Rewards
      </h1>

      {/* H2 */}
      <h2 className="text-gray-400 text-sm sm:text-base font-normal mb-6">
        Official JaiClub Login & Registration Portal
      </h2>

      {/* CTA Buttons */}
      <div className="w-full max-w-xs sm:max-w-sm flex flex-col gap-4 px-2">
        <a
          href={redirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Register on JaiClub and start winning real rewards"
          className="bg-red-600 hover:bg-red-700 text-white py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg text-center transition"
        >
          Register Now – JaiClub
        </a>

        <a
          href={redirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Login to your JaiClub account"
          className="bg-red-600 hover:bg-red-700 text-white py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg text-center transition"
        >
          Login to JaiClub
        </a>
      </div>

      {/* SEO Description */}
      <section className="mt-8 mb-6 max-w-md px-2">
        <p className="text-white font-semibold mb-2">🎮 Why Play on JaiClub?</p>
        <p className="text-gray-300 text-sm leading-relaxed">
          JaiClub is India's most exciting online gaming platform where you can
          play multiple games and win real cash rewards. Whether you love skill
          games or chance-based games, JaiClub offers something for everyone.
          The JaiClub login process is secure, and JaiClub registration is free
          for all Indian players. Join the official jaiclub.house to experience
          the best online earning game today.
        </p>
      </section>

      {/* SEO keyword strip */}
      <div className="max-w-md text-gray-500 text-[10px] space-y-2 mb-8 uppercase tracking-widest opacity-50 px-2">
        <p>
          JaiClub Login • JaiClub Register • Online Earning Game India • Real
          Cash Rewards • Jai Club Official
        </p>
      </div>

      {/* Hidden internal links - visible to crawlers, not users */}
      <nav aria-label="Site navigation" className="sr-only">
        <a href="/blog">JaiClub Blog – Gaming Guides & Tips</a>
        <a href="/how-to-play">How to Play JaiClub – Step by Step Guide</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms & Conditions</a>
      </nav>

      {/* Footer */}
      <footer className="mt-4 mb-10 text-center text-xs text-black">
        <div className="flex justify-center gap-4">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
        <p className="mt-2">© 2026 JaiClub (jaiclub.house). All rights reserved.</p>
      </footer>

    </main>
  );
}