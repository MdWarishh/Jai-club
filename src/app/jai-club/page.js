'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import JaiClubOverlay from '../components/JaiClubOverlay';

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is JaiClub?',
    a: 'JaiClub is India\'s premier online gaming platform where you can play the Jai Club Game and dozens of other titles in a secure, fast, and fair environment.',
  },
  {
    q: 'How do I play JaiClub online?',
    a: 'Create a free account, choose your game from the lobby, and start playing instantly — no downloads needed.',
  },
  {
    q: 'Is JaiClub safe and secure?',
    a: 'Yes. JaiClub uses 256-bit SSL encryption and advanced fraud detection to ensure every session is completely safe.',
  },
  {
    q: 'Can I play Jai Club Game on mobile?',
    a: 'Absolutely. JaiClub is fully optimised for mobile browsers on Android and iOS — smooth gameplay on any device.',
  },
  {
    q: 'Are there bonuses for new players?',
    a: 'Yes! New members receive a welcome bonus upon first registration. We also run daily cashback and referral rewards.',
  },
  {
    q: 'How do I withdraw my winnings?',
    a: 'Withdrawals are instant via UPI, bank transfer, or popular digital wallets — no holds, no hidden fees.',
  },
  {
    q: 'Is JaiClub legal in India?',
    a: 'JaiClub operates skill-based gaming experiences in compliance with applicable laws. Check your local state regulations before participating.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const games = [
  { name: 'Jai Club Classic', tag: 'Most Popular', desc: 'The original Jai Club Game — pure strategy, real rewards.', icon: '♠️', glow: '#f59e0b' },
  { name: 'Speed Round', tag: 'Fast-Paced', desc: '30-second matches for players who love instant wins.', icon: '⚡', glow: '#06b6d4' },
  { name: 'Tournament Mode', tag: 'Competitive', desc: 'Climb leaderboards in daily and weekly JaiClub tournaments.', icon: '🏆', glow: '#a855f7' },
  { name: 'Team Battle', tag: 'Multiplayer', desc: 'Squad up and dominate in real-time team play.', icon: '⚔️', glow: '#ef4444' },
];

const features = [
  { icon: '🔒', title: 'Bank-Grade Security', desc: '256-bit SSL and real-time fraud detection keep your account safe 24/7.' },
  { icon: '⚡', title: 'Lightning Fast', desc: 'Loads in under 1.5s. Optimised for Core Web Vitals on every device.' },
  { icon: '📱', title: 'Play Anywhere', desc: 'Desktop, tablet, or mobile — no app needed. Any browser, any time.' },
  { icon: '💸', title: 'Instant Withdrawals', desc: 'UPI & wallet payouts processed in minutes. Zero hidden fees.' },
  { icon: '🎁', title: 'Daily Bonuses', desc: 'Log in every day for free bonuses, cashback, and exclusive offers.' },
  { icon: '🤝', title: '24/7 Support', desc: 'Round-the-clock help via live chat and email for all JaiClub members.' },
];

// ─── Auth Popup ───────────────────────────────────────────────────────────────
function AuthPopup({ onClose }) {
  const router = useRouter();

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
    >
      {/* Card */}
      <div
        className="relative w-full max-w-md rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #12121a 0%, #1a1a2e 100%)',
          border: '1px solid rgba(251,191,36,0.25)',
          boxShadow: '0 0 80px rgba(251,191,36,0.12), 0 30px 60px rgba(0,0,0,0.6)',
        }}
      >
        {/* Top glow bar */}
        <div style={{ height: 3, background: 'linear-gradient(90deg, #f59e0b, #fb923c, #f59e0b)' }} />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-zinc-500 hover:text-white hover:bg-white/10 transition-all text-lg"
        >
          ✕
        </button>

        <div className="px-8 py-10 text-center">
          {/* Logo */}
          <div className="mb-2 text-3xl font-black tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span style={{ color: '#f59e0b' }}>JAI</span>
            <span className="text-white">CLUB</span>
          </div>

          {/* Tagline */}
          <p className="text-zinc-400 text-sm mb-8">India's #1 Online Gaming Platform</p>

          {/* Animated coin icon */}
          <div
            className="mx-auto mb-8 w-20 h-20 rounded-full flex items-center justify-center text-4xl"
            style={{
              background: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(251,146,60,0.1))',
              border: '2px solid rgba(245,158,11,0.4)',
              boxShadow: '0 0 30px rgba(245,158,11,0.2)',
              animation: 'pulse 2s infinite',
            }}
          >
            🎮
          </div>

          <h2 className="text-white text-2xl font-black mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Welcome Back!
          </h2>
          <p className="text-zinc-500 text-sm mb-8">
            Login to your account or create a new one to start playing.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => router.push('/login')}
              className="w-full py-4 rounded-2xl font-black text-black text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #f59e0b, #fb923c)',
                fontFamily: 'Orbitron, sans-serif',
                boxShadow: '0 8px 30px rgba(245,158,11,0.35)',
                letterSpacing: '0.05em',
              }}
            >
              🔑 Login
            </button>

            <button
              onClick={() => router.push('/register')}
              className="w-full py-4 rounded-2xl font-bold text-white text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'transparent',
                border: '1.5px solid rgba(245,158,11,0.5)',
                fontFamily: 'Orbitron, sans-serif',
                letterSpacing: '0.05em',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,158,11,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              ✨ Create Account
            </button>
          </div>

          <p className="text-zinc-700 text-xs mt-6">18+ only · Play Responsibly</p>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap');
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 30px rgba(245,158,11,0.2); }
          50% { box-shadow: 0 0 50px rgba(245,158,11,0.4); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeInUp 0.6s ease both; }
        summary::-webkit-details-marker { display: none; }
      `}</style>
    </div>
  );
}

// ─── NavBar ───────────────────────────────────────────────────────────────────
function NavBar({ onAuthOpen }) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        background: 'rgba(10,10,15,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(245,158,11,0.12)',
      }}
    >
      <Link href="/" style={{ fontFamily: 'Orbitron, sans-serif' }} className="text-2xl font-black tracking-tighter">
        <span style={{ color: '#f59e0b' }}>JAI</span>
        <span className="text-white">CLUB</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {[['Games', '/games'], ['How to Play', '/how-to-play'], ['About', '/about']].map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="text-sm font-medium text-zinc-400 hover:text-amber-400 transition-colors uppercase tracking-widest"
          >
            {label}
          </Link>
        ))}
      </div>

      <button
        onClick={onAuthOpen}
        className="px-5 py-2.5 rounded-full font-black text-sm text-black hover:scale-105 transition-all"
        style={{
          background: 'linear-gradient(135deg, #f59e0b, #fb923c)',
          fontFamily: 'Orbitron, sans-serif',
          boxShadow: '0 4px 20px rgba(245,158,11,0.3)',
          letterSpacing: '0.05em',
        }}
      >
        Play Now
      </button>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection({ onAuthOpen }) {
  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <JaiClubOverlay />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'linear-gradient(rgba(245,158,11,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.2) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)' }} />
      <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.08) 0%, transparent 70%)' }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 fade-up"
          style={{ border: '1px solid rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.06)', color: '#f59e0b' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" style={{ animation: 'pulse 2s infinite' }} />
          India's #1 Gaming Platform
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-none fade-up"
          style={{ fontFamily: 'Orbitron, sans-serif', animationDelay: '0.1s' }}
        >
          Welcome to{' '}
          <span style={{ background: 'linear-gradient(135deg, #f59e0b, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            JaiClub
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed fade-up" style={{ animationDelay: '0.2s' }}>
    Play <Link href="/jai-club-game" className="text-amber-400 underline">Jai Club Game</Link> online with millions of players across India. Online with millions of players across India.
          Fast, secure, and endlessly exciting — your next big win starts here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={onAuthOpen}
            className="px-8 py-4 rounded-full font-black text-base text-black hover:scale-105 transition-all"
            style={{
              background: 'linear-gradient(135deg, #f59e0b, #fb923c)',
              fontFamily: 'Orbitron, sans-serif',
              boxShadow: '0 12px 40px rgba(245,158,11,0.35)',
              letterSpacing: '0.05em',
            }}
          >
            Play JaiClub Online →
          </button>
          <Link
            href="/how-to-play"
            className="px-8 py-4 rounded-full font-semibold text-base text-zinc-300 hover:text-amber-400 transition-all"
            style={{ border: '1.5px solid rgba(255,255,255,0.1)' }}
          >
            How to Play
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto fade-up" style={{ animationDelay: '0.4s' }}>
          {[['5M+', 'Active Players'], ['99.9%', 'Uptime SLA'], ['₹10Cr+', 'Paid Out']].map(([stat, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl md:text-3xl font-black" style={{ color: '#f59e0b', fontFamily: 'Orbitron, sans-serif' }}>{stat}</div>
              <div className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Games ────────────────────────────────────────────────────────────────────
function GamesSection() {
  return (
    <section className="py-28 px-6" id="games">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#f59e0b' }}>Game Library</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Play Every Jai Club Game Mode
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            From quick casual rounds to high-stakes competitive tournaments — JaiClub has a game for every kind of player.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {games.map((g) => (
            <Link href="/games" key={g.name}>
              <div
                className="h-full p-6 rounded-2xl transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                style={{
                  background: `radial-gradient(ellipse at top left, ${g.glow}18 0%, rgba(10,10,15,0.8) 70%)`,
                  border: `1px solid ${g.glow}35`,
                }}
              >
                <div className="text-4xl mb-4">{g.icon}</div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: g.glow }}>{g.tag}</span>
                <h3 className="text-lg font-black text-white mt-1 mb-2 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>{g.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{g.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/games" className="font-semibold hover:text-amber-300 transition-colors" style={{ color: '#f59e0b' }}>
            Browse All Games →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
function FeaturesSection() {
  return (
    <section
      className="py-28 px-6"
      id="features"
      style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#f59e0b' }}>Why JaiClub</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Built for Serious Players
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            JaiClub is engineered to deliver the fastest, safest, and most rewarding gaming experience in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl transition-all group hover:scale-[1.02]"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(245,158,11,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trust ────────────────────────────────────────────────────────────────────
function TrustSection() {
  return (
    <section className="py-28 px-6" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#f59e0b' }}>Trusted by Millions</p>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          JaiClub — India's Most Trusted Gaming Destination
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
          Since launch, JaiClub has served over 5 million players across India with a commitment to fairness,
          transparency, and excitement. Every Jai Club Game outcome is certified random and independently audited.
        </p>
        <p className="text-zinc-500 leading-relaxed mb-10">
          Whether you're casual or competitive, JaiClub gives you the tools and rewards to make every session count.
          Explore our{' '}
<Link href="/jai-club-official" className="text-amber-400 underline">official JaiClub page</Link>
{' '}or learn{' '}
<Link href="/how-to-play" className="text-amber-400 underline">how to play</Link>
{' '}or jump into the{' '}
<Link href="/games" className="text-amber-400 underline">game lobby</Link>.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-zinc-500">
          {['🔐 SSL Secured', '✅ Fair Play Certified', '🇮🇳 Made in India', '⚖️ Responsible Gaming'].map((b) => (
            <span
              key={b}
              className="px-4 py-2 rounded-full"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQSection() {
  return (
    <section
      className="py-28 px-6"
      id="faq"
      style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#f59e0b' }}>FAQ</p>
          <h2 className="text-4xl font-black text-white tracking-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl p-6 transition-all"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <summary className="flex items-center justify-between gap-4 text-white font-semibold cursor-pointer list-none">
                <span>{faq.q}</span>
                <span className="text-zinc-500 text-xl leading-none flex-shrink-0 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>

        <p className="text-center text-zinc-600 text-sm mt-10">
          Still have questions?{' '}
          <Link href="/about" style={{ color: '#f59e0b' }} className="hover:underline">Visit our Help Centre →</Link>
        </p>
      </div>
    </section>
  );
}

<div className="mt-10 text-center text-sm text-zinc-500">
  Learn more about{' '}
  <Link href="/jaiclub" className="text-amber-400 underline">JaiClub</Link>,{' '}
  <Link href="/jai-club-game" className="text-amber-400 underline">game modes</Link>, or{' '}
  <Link href="/blog" className="text-amber-400 underline">read our guides</Link>.
</div>
// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTASection({ onAuthOpen }) {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)' }} />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Ready to Play JaiClub Online?
        </h2>
        <p className="text-zinc-400 text-lg mb-10">
          Join over 5 million players. Create your free JaiClub account in under 60 seconds.
        </p>
        <button
          onClick={onAuthOpen}
          className="inline-block px-10 py-5 rounded-full font-black text-lg text-black hover:scale-105 transition-all"
          style={{
            background: 'linear-gradient(135deg, #f59e0b, #fb923c)',
            fontFamily: 'Orbitron, sans-serif',
            boxShadow: '0 20px 60px rgba(245,158,11,0.35)',
            letterSpacing: '0.05em',
          }}
        >
          Start Playing Now — It's Free
        </button>
        <p className="text-zinc-600 text-sm mt-4">
  New here? Read our{' '}
  <Link href="/jaiclub-register" className="text-amber-400 underline">registration guide</Link>{' '}
  or{' '}
  <Link href="/jaiclub-login" className="text-amber-400 underline">login help</Link>.
</p>
        <p className="text-zinc-700 text-xs mt-5">No credit card required · Instant access · 18+ only</p>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-xl font-black tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          <span style={{ color: '#f59e0b' }}>JAI</span>
          <span className="text-white">CLUB</span>
        </span>
        <nav className="flex flex-wrap gap-6 text-sm text-zinc-500">
          {[
  ['JaiClub', '/jaiclub'],
  ['Jai Club Game', '/jai-club-game'],
  ['How to Play', '/how-to-play'],
  ['Blog', '/blog'],
].map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-amber-400 transition-colors">{label}</Link>
          ))}
        </nav>
        <p className="text-xs text-zinc-700 text-center md:text-right">
          © {new Date().getFullYear()} JaiClub. All rights reserved.<br />
          Play responsibly. 18+ only.
        </p>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup after a tiny delay so page paints first (better CWV)
  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {showPopup && <AuthPopup onClose={() => setShowPopup(false)} />}

      <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#fff' }}>
        <NavBar onAuthOpen={() => setShowPopup(true)} />
        <HeroSection onAuthOpen={() => setShowPopup(true)} />
        <GamesSection />
        <FeaturesSection />
        <TrustSection />
        <FAQSection />
        <CTASection onAuthOpen={() => setShowPopup(true)} />
        <Footer />
      </main>
    </>
  );
}