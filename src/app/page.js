export default function Home() {
  const redirectUrl =
    "https://www.jaiclub08.com/#/register?invitationCode=16571395630";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b1f] via-black to-black flex flex-col items-center justify-center px-4">

      {/* Logo */}
     <section className="mt-30 mb-8 flex justify-center">
  <img
    src="/logo.png"
    alt="JaiClub official logo - play and win platform"
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

      {/* Title */}
      <h1 className="text-white text-xl font-semibold mb-6">
        JaiClub
      </h1>

      {/* Buttons */}
      <div className="w-full max-w-sm flex flex-col gap-4">

        <a
          href={redirectUrl}
          target="_blank"
          className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-medium text-lg text-center transition"
        >
          Register Now
        </a>

        <a
          href={redirectUrl}
          target="_blank"
          className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-medium text-lg text-center transition"
        >
          Login Now
        </a>

      </div>

      {/* Description */}
      <section className="mt-8 mb-10 text-center max-w-md">
        <p className="text-white font-semibold mb-2">
          👉 Jalwaaamazing
        </p>

        <p className="text-gray-300 text-sm leading-relaxed">
          There are many different games and chances to win big. The Jalwa Game
          app is perfect for users who enjoy playing games and also want to earn
          real rewards while having fun!
        </p>
      </section>

    </main>
  );
}