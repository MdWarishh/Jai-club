// app/privacy-policy/page.js

export const metadata = {
  title: "Privacy Policy | JaiClub",
  description: "Read the privacy policy of JaiClub to understand how we manage and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Welcome to JaiClub (https://jaiclub.house). We value your privacy and are committed to protecting your personal data.</p>
      
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">We collect information that you provide directly to us when you register or use our platform, including your mobile number and account details.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To provide and maintain our Service.</li>
        <li>To notify you about changes to our Service.</li>
        <li>To provide customer support.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies</h2>
      <p className="mb-4">We use cookies to track activity on our platform and hold certain information to improve your user experience.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Security of Data</h2>
      <p className="mb-4">The security of your data is important to us, and we strive to use commercially acceptable means to protect your personal information.</p>

      <footer className="mt-10 pt-6 border-t">
        <p>Last updated: May 2026</p>
      </footer>
    </main>
  );
}