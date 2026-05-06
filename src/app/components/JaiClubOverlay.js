"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function JaiClubOverlay() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <img
        src="/logo.png" // apni logo image yahan daal — ya jo bhi path hai
        alt="JaiClub Logo"
        style={{
          width: "min(500px, 85vw)",
          borderRadius: "32px",
          marginBottom: "32px",
        }}
      />

      <h1 style={{ color: "white", fontWeight: 800, fontSize: "clamp(20px, 4vw, 36px)", textAlign: "center", marginBottom: "8px" }}>
        JaiClub – Play Games & Win Real Rewards
      </h1>
      <p style={{ color: "#aaa", fontSize: "16px", textAlign: "center", marginBottom: "40px" }}>
        Official JaiClub Login & Registration Portal
      </p>

      <button
        style={{
          backgroundColor: "#e00",
          color: "white",
          border: "none",
          borderRadius: "12px",
          padding: "18px 0",
          width: "min(460px, 80vw)",
          fontSize: "18px",
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: "16px",
        }}
        onClick={(e) => { e.stopPropagation(); router.push("/"); }}
      >
        Register Now – JaiClub
      </button>

      <button
        style={{
          backgroundColor: "#e00",
          color: "white",
          border: "none",
          borderRadius: "12px",
          padding: "18px 0",
          width: "min(460px, 80vw)",
          fontSize: "18px",
          fontWeight: 600,
          cursor: "pointer",
        }}
        onClick={(e) => { e.stopPropagation(); router.push("/"); }}
      >
        Login to JaiClub
      </button>
    </div>
  );
}