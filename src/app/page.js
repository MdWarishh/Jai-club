export default function Home() {
  const redirectUrl =
    "https://www.jaiclub08.com/#/register?invitationCode=16571395630";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b1f] via-black to-black flex flex-col items-center justify-center px-4 text-center">

      {/* ✅ Logo - Wahi original UI */}
      <section className="mt-30 mb-8 flex justify-center">
        <img
          src="/logo.png"
          alt="JaiClub official logo - India's top online gaming platform"
          width={240}
          height={240}
          className="
            w-60 sm:w-92 md:w-99 lg:w-112
            h-auto
            rounded-[3.1rem]
            shadow-2xl
            object-contain
            transition-transform duration-300
            hover:scale-105
          "
        />
      </section>

      {/* ✅ H1 - Main keyword */}
      <h1 className="text-white text-2xl font-bold mb-2">
        JaiClub – Play Games & Win Real Rewards
      </h1>

      {/* ✅ H2 - Secondary keyword */}
      <h2 className="text-gray-400 text-base font-normal mb-6">
        Official JaiClub Login & Registration Portal
      </h2>

      {/* ✅ CTA Buttons[cite: 6] */}
      <div className="w-full max-w-sm flex flex-col gap-4">
        <a
          href={redirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Register on JaiClub and start winning real rewards"
          className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-medium text-lg text-center transition"
        >
          Register Now – JaiClub
        </a>

        <a
          href={redirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Login to your JaiClub account"
          className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-medium text-lg text-center transition"
        >
          Login to JaiClub
        </a>
      </div>

      {/* ✅ SEO Description - Extra content added here for ranking[cite: 5, 6] */}
      <section className="mt-8 mb-6 max-w-md">
        <p className="text-white font-semibold mb-2">
          🎮 Why Play on JaiClub?
        </p>
        <p className="text-gray-300 text-sm leading-relaxed">
          JaiClub is India's most exciting online gaming platform where you can play multiple games and win real cash rewards[cite: 6]. 
          Whether you love skill games or chance-based games, JaiClub offers something for everyone[cite: 6]. 
          The **JaiClub login** process is secure, and **JaiClub registration** is free for all Indian players. 
          Join the official **jaiclub.house** to experience the best online earning game today.
        </p>
      </section>

      {/* ✅ Extra SEO Guide - Chote font mein taaki UI clean rahe[cite: 5] */}
      <div className="max-w-md text-gray-500 text-[10px] space-y-2 mb-8 uppercase tracking-widest opacity-50">
        <p>JaiClub Login • JaiClub Register • Online Earning Game India • Real Cash Rewards • Jai Club Official</p>
      </div>

      {/* ✅ Footer - SEO Links[cite: 6] */}
      <footer className="mt-4 mb-10 text-center text-xs text-black">
        <div className="flex justify-center gap-4">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
        </div>
        <p className="mt-2">© 2026 JaiClub (jaiclub.house). All rights reserved.</p>
      </footer>

    </main>
  );
}