// app/terms/page.js

export const metadata = {
  title: "Terms and Conditions | JaiClub",
  description: "Terms and conditions for using the JaiClub platform.",
};

export default function Terms() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="mb-4">By accessing https://jaiclub.house, you agree to comply with these terms and conditions.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Eligibility</h2>
      <p className="mb-4">Users must be 18 years or older to participate in any games on JaiClub. It is your responsibility to ensure online gaming is legal in your jurisdiction.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. User Accounts</h2>
      <p className="mb-4">When you create an account, you must provide accurate information. You are responsible for maintaining the confidentiality of your login credentials.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Fair Play</h2>
      <p className="mb-4">Any attempt to manipulate or cheat on the platform will result in an immediate ban and forfeiture of rewards.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
      <p className="mb-4">JaiClub shall not be held liable for any financial losses incurred while playing games on the platform.</p>
    </main>
  );
}