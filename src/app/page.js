export default function Home() {
  const redirectUrl =
    "https://www.jaiclub08.com/#/register?invitationCode=16571395630";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b1f] via-black to-black flex flex-col items-center justify-center px-4">

      {/* ✅ Logo */}
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

      {/* ✅ H1 - Main keyword yahan aana chahiye */}
      <h1 className="text-white text-2xl font-bold mb-2 text-center">
        JaiClub – Play Games & Win Real Rewards
      </h1>

      {/* ✅ H2 - Secondary keyword */}
      <h2 className="text-gray-400 text-base font-normal mb-6 text-center">
        India's Top Online Gaming Platform
      </h2>

      {/* ✅ CTA Buttons */}
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

      {/* ✅ Description - keyword-rich content for Google */}
      <section className="mt-8 mb-10 text-center max-w-md">
        <p className="text-white font-semibold mb-2">
          🎮 Why Play on JaiClub?
        </p>

        <p className="text-gray-300 text-sm leading-relaxed">
          JaiClub is India's most exciting online gaming platform where you can
          play multiple games and win real cash rewards. Whether you love skill
          games or chance-based games, JaiClub offers something for everyone.
          Register on JaiClub today and start earning real money while having
          fun!
        </p>
      </section>

    </main>
  );
}