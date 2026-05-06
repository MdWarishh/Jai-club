'use client';

import Link from 'next/link';
import { useState } from 'react';
import JaiClubOverlay from '../components/JaiClubOverlay';

// ─── Data ─────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: '01',
    title: 'Create Your Free Account',
    icon: '👤',
    color: '#f59e0b',
    desc: ' Visit <Link href="/jaiclub" className="text-amber-400 underline">JaiClub</Link>and click <Link href="/jaiclub-register" className="text-amber-400 underline">Register</Link>.Fill in your name, mobile number, and a secure password. Verification takes under 60 seconds — no documents needed to get started.',
    tips: ['Use a strong password with letters and numbers', 'Enter your real mobile number for OTP verification', 'Check your inbox for the welcome bonus after signup'],
  },
  {
    number: '02',
    title: 'Log In to Your Dashboard',
    icon: '🔑',
    color: '#06b6d4',
    desc: 'log in using the <Link href="/jaiclub-login" className="text-amber-400 underline">JaiClub login page</Link>. Your personal dashboard shows your balance, active games, leaderboard rank, and available bonuses.',
    tips: ['Enable two-factor authentication for extra security', 'Bookmark jaiclub.com to avoid phishing sites', 'Set a daily login reminder to claim your daily bonus'],
  },
  {
    number: '03',
    title: 'Add Funds (Optional)',
    icon: '💳',
    color: '#a855f7',
    desc: 'JaiClub offers free practice games so you can learn without spending a rupee. When ready, add funds via UPI, net banking, or any major wallet. Minimum deposit is ₹50.',
    tips: ['Start with the minimum deposit to test the platform', 'Free demo games are available — no deposit needed', 'All transactions are 256-bit SSL encrypted'],
  },
  {
    number: '04',
    title: 'Pick Your Game',
    icon: '🎮',
    color: '#10b981',
    desc: 'Head to the <Link href="/jai-club-game" className="text-amber-400 underline">Jai Club Game lobby</Link> and choose your preferred Jai Club Game mode — Classic, Speed Round, Tournament, or Team Battle. Each mode has clear rules displayed before you start.',
    tips: ['Read the game rules before your first real-money game', 'Practice mode is always available in the lobby', 'Filter games by entry fee, prize pool, or duration'],
  },
  {
    number: '05',
    title: 'Understand the Rules & Play',
    icon: '📖',
    color: '#f97316',
    desc: 'JaiClub games are skill-based — your decisions directly affect the outcome. Study the game mechanics, watch a tutorial video, and start with low-stakes games to build your skills.',
    tips: ['Watch replays of top players to learn strategy', 'Start at beginner tables to build confidence', 'Track your win/loss stats in your dashboard'],
  },
  {
    number: '06',
    title: 'Withdraw Your Winnings',
    icon: '💸',
    color: '#f59e0b',
    desc: 'Won? Withdraw your earnings instantly to your UPI ID, bank account, or wallet. Most payouts are processed within 5 minutes. There are no withdrawal fees on JaiClub.',
    tips: ['Verify your bank details once to enable fast withdrawals', 'Minimum withdrawal is ₹100', 'Your winnings history is always available in your account'],
  },
];

const faqs = [
  {
    q: 'Is JaiClub free to play?',
    a: 'Yes! JaiClub offers completely free practice games in every game mode. You only need to deposit real money when you want to play in cash tournaments or real-money tables.',
  },
  {
    q: 'How long does it take to learn how to play JaiClub?',
    a: 'Most players get comfortable with the basics within 2–3 practice sessions. The interface is beginner-friendly, and in-game tutorials guide you through every step.',
  },
  {
    q: 'Can I play JaiClub on my phone?',
    a: 'Absolutely. JaiClub works on all modern mobile browsers — Chrome, Safari, Firefox. No app download is required. Just open jaiclub.com on your phone and start playing.',
  },
  {
    q: 'What happens if I lose internet during a game?',
    a: 'JaiClub auto-saves your game state. If you disconnect, you can rejoin the same game within 60 seconds from the same device. Your account balance is always protected.',
  },
  {
    q: 'Are JaiClub games fair?',
    a: 'Yes. All Jai Club Game outcomes use a certified Random Number Generator (RNG) that is independently audited quarterly. Results are 100% fair and cannot be manipulated.',
  },
  {
    q: 'What is the minimum age to play JaiClub?',
    a: 'You must be 18 years or older to create a JaiClub account and participate in real-money games. Age verification may be required during withdrawal.',
  },
  {
    q: 'How do I contact JaiClub support?',
    a: 'Our 24/7 support team is available via live chat on the website or by emailing support@jaiclub.com. Average response time is under 5 minutes on live chat.',
  },
];

const gameRules = [
  {
    mode: 'Classic Mode',
    icon: '♠️',
    color: '#f59e0b',
    rules: [
      'Players join a table of 2–6 participants',
      'Each round lasts 3–5 minutes',
      'Highest skill score at end of round wins the pot',
      'Points are calculated based on accuracy and speed',
    ],
  },
  {
    mode: 'Speed Round',
    icon: '⚡',
    color: '#06b6d4',
    rules: [
      'Single 30-second rapid-fire rounds',
      '1-on-1 format only',
      'Winner takes 90% of the pot',
      'Perfect for quick sessions between work',
    ],
  },
  {
    mode: 'Tournament Mode',
    icon: '🏆',
    color: '#a855f7',
    rules: [
      'Multi-round elimination bracket',
      'Entry fee goes into prize pool',
      'Top 3 finishers share the winnings',
      'Daily & weekly tournaments available',
    ],
  },
  {
    mode: 'Team Battle',
    icon: '⚔️',
    color: '#ef4444',
    rules: [
      'Form a team of 2–4 players',
      'Compete against rival teams in real-time',
      'Team total score decides the winner',
      'Invite friends via referral link',
    ],
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function NavBar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        background: 'rgba(10,10,15,0.9)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(245,158,11,0.12)',
        fontFamily: 'Orbitron, sans-serif',
      }}
    >
      <Link href="/" className="text-2xl font-black tracking-tighter">
        <span style={{ color: '#f59e0b' }}>JAI</span>
        <span className="text-white">CLUB</span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {[['Games', '/games'], ['How to Play', '/how-to-play'], ['About', '/about']].map(([l, h]) => (
          <Link key={h} href={h} className="text-sm font-medium uppercase tracking-widest transition-colors"
            style={{ color: h === '/how-to-play' ? '#f59e0b' : '#71717a' }}>
            {l}
          </Link>
        ))}
      </div>
      <Link href="/games"
        className="px-5 py-2.5 rounded-full font-black text-sm text-black hover:scale-105 transition-all"
        style={{ background: 'linear-gradient(135deg,#f59e0b,#fb923c)', boxShadow: '0 4px 20px rgba(245,158,11,0.3)' }}>
        Play Now
      </Link>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(245,158,11,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,0.3) 1px,transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(245,158,11,0.1) 0%,transparent 70%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
          style={{ border: '1px solid rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.06)', color: '#f59e0b' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" style={{ animation: 'pulseDot 2s infinite' }} />
          Beginner Friendly Guide
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-tight"
          style={{ fontFamily: 'Orbitron, sans-serif' }}>
          How to Play{' '}
          <span style={{ background: 'linear-gradient(135deg,#f59e0b,#fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            JaiClub Game
          </span>
        </h1>

        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
        New to <Link href="/jaiclub" className="text-amber-400 underline">JaiClub</Link>? 
This step-by-step guide will help you understand the 
<Link href="/jai-club-game" className="text-amber-400 underline"> Jai Club Game</Link> 
and start playing instantly.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {[['⏱️', '10 min read'], ['🟢', 'Beginner friendly'], ['🔒', 'Safe & trusted']].map(([icon, text]) => (
            <span key={text} className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#a1a1aa' }}>
              {icon} {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="py-20 px-6" id="steps">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#f59e0b' }}>Step by Step</p>
          <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            6 Simple Steps to Start Playing
          </h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, #f59e0b40, transparent)' }} />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i}
                className="relative flex gap-6 p-6 rounded-2xl transition-all hover:scale-[1.01]"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>

                {/* Step number circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center font-black text-sm"
                  style={{
                    background: `${step.color}18`,
                    border: `2px solid ${step.color}40`,
                    color: step.color,
                    fontFamily: 'Orbitron, sans-serif',
                  }}>
                  {step.number}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{step.desc}</p>

                  <div className="space-y-1.5">
                    {step.tips.map((tip, j) => (
                      <div key={j} className="flex items-start gap-2 text-xs text-zinc-500">
                        <span style={{ color: step.color }} className="mt-0.5 flex-shrink-0">✓</span>
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GameRulesSection() {
  const [active, setActive] = useState(0);
  const g = gameRules[active];

  return (
    <section className="py-20 px-6" id="rules"
      style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <p className="text-zinc-400 text-sm mb-6">
  Explore all game modes on the official{" "}
  <Link href="/jai-club-official" className="text-amber-400 underline">
    Jai Club Official page
  </Link>.
</p>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#f59e0b' }}>Game Rules</p>
          <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Understand Every Game Mode
          </h2>
          <p className="text-zinc-400 mt-3 max-w-xl mx-auto text-sm">
            JaiClub offers 4 distinct game modes. Click each to read the rules before you play.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {gameRules.map((gr, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all"
              style={{
                background: active === i ? `${gr.color}20` : 'rgba(255,255,255,0.04)',
                border: `1.5px solid ${active === i ? gr.color : 'rgba(255,255,255,0.08)'}`,
                color: active === i ? gr.color : '#71717a',
                fontFamily: 'Orbitron, sans-serif',
              }}>
              {gr.icon} {gr.mode}
            </button>
          ))}
        </div>

        {/* Active rule card */}
        <div className="p-8 rounded-2xl"
          style={{
            background: `radial-gradient(ellipse at top left, ${g.color}12 0%, rgba(10,10,15,0.8) 60%)`,
            border: `1px solid ${g.color}30`,
          }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{g.icon}</span>
            <div>
              <h3 className="text-xl font-black text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>{g.mode}</h3>
              <span className="text-xs" style={{ color: g.color }}>Official Rules</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {g.rules.map((rule, j) => (
              <div key={j} className="flex items-start gap-3 p-4 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.04)' }}>
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5"
                  style={{ background: `${g.color}30`, color: g.color }}>
                  {j + 1}
                </span>
                <p className="text-zinc-300 text-sm leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SafetySection() {
  return (
    <section className="py-20 px-6" id="safety">
      <div className="max-w-4xl mx-auto">
        <div className="p-8 md:p-10 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(10,10,15,0.9) 100%)',
            border: '1.5px solid rgba(16,185,129,0.25)',
          }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}>
              🛡️
            </div>
            <div>
              <h2 className="text-2xl font-black text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Safety & Responsible Gaming
              </h2>
              <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Important Notice</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              { icon: '⏰', title: 'Set Time Limits', desc: 'Use JaiClub\'s built-in session timer to limit your daily play time. Healthy gaming means taking regular breaks.' },
              { icon: '💰', title: 'Set Deposit Limits', desc: 'Decide your monthly budget before you start. JaiClub lets you set daily/weekly deposit limits from your account settings.' },
              { icon: '🧠', title: 'Play for Fun First', desc: 'Use free practice games to learn before spending real money. Skill development takes time — there\'s no rush.' },
              { icon: '🆘', title: 'Know When to Stop', desc: 'If gaming feels stressful or compulsive, take a break. Use JaiClub\'s self-exclusion feature to pause your account anytime.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl text-sm text-zinc-400 leading-relaxed"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <strong className="text-white">Important:</strong> JaiClub is a skill-based gaming platform for players aged{' '}
            <strong className="text-emerald-400">18 and above</strong> only. Gaming should be entertainment — never chase losses.
            If you need help, contact our support team or visit{' '}
            <span style={{ color: '#10b981' }}>responsiblegambling.org</span> for free resources.
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 px-6" id="faq"
      style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#f59e0b' }}>Got Questions?</p>
          <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i}
              className="rounded-2xl overflow-hidden transition-all cursor-pointer"
              style={{
                background: open === i ? 'rgba(245,158,11,0.06)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${open === i ? 'rgba(245,158,11,0.3)' : 'rgba(255,255,255,0.07)'}`,
              }}
              onClick={() => setOpen(open === i ? null : i)}>
              <div className="flex items-center justify-between gap-4 p-5">
                <h3 className="text-white font-semibold text-sm">{faq.q}</h3>
                <span className="text-xl leading-none flex-shrink-0 transition-transform duration-300"
                  style={{ color: '#f59e0b', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </div>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.07) 0%, transparent 70%)' }} />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Ready to Play JaiClub?
        </h2>
       <p className="text-zinc-600 text-sm mt-4">
  New player?{" "}
  <Link href="/jaiclub-register" className="text-amber-400 underline">
    Create an account
  </Link>{" "}
  or{" "}
  <Link href="/jaiclub-login" className="text-amber-400 underline">
    login here
  </Link>.
</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/jaiclub"
            className="px-8 py-4 rounded-full font-black text-base text-black hover:scale-105 transition-all"
            style={{ background: 'linear-gradient(135deg,#f59e0b,#fb923c)', fontFamily: 'Orbitron, sans-serif', boxShadow: '0 12px 40px rgba(245,158,11,0.3)' }}>
            Start Playing Free →
          </Link>
          <Link href="/jai-club"
            className="px-8 py-4 rounded-full font-semibold text-base text-zinc-300 hover:text-amber-400 transition-all"
            style={{ border: '1.5px solid rgba(255,255,255,0.1)' }}>
            Learn About JaiClub
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" style={{ fontFamily: 'Orbitron, sans-serif' }} className="text-xl font-black">
          <span style={{ color: '#f59e0b' }}>JAI</span><span className="text-white">CLUB</span>
        </Link>
        <nav className="flex gap-6 text-sm text-zinc-500">
          {[
  ['JaiClub', '/jaiclub'],
  ['Jai Club Game', '/jai-club-game'],
  ['How to Play', '/how-to-play'],
  ['Blog', '/blog'],
].map(([l, h]) => (
            <Link key={h} href={h} className="hover:text-amber-400 transition-colors">{l}</Link>
          ))}
        </nav>
        <p className="text-xs text-zinc-700">© {new Date().getFullYear()} JaiClub · 18+ · Play Responsibly</p>
      </div>
    </footer>
  );
}

// ─── Page Export ──────────────────────────────────────────────────────────────
export default function HowToPlayPage() {
  return (
    <>
    <JaiClubOverlay />

      <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#fff' }}>
        <NavBar />
        <HeroSection />
        <StepsSection />
        <GameRulesSection />
        <SafetySection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}