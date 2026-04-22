import "./globals.css";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: "JaiClub - Play & Win Rewards",
  description:
    "JaiClub is a fun gaming platform where you can play and win rewards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}