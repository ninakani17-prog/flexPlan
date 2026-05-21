import React from "react";

export function IgoeLogoHeader() {
  return (
    <header
      style={{
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}
    >
      {/* Left: Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/fplak.jpg"
          alt="Flexplan"
          style={{ height: 40, width: "auto", display: "block" }}
        />
      </div>

      {/* Center: Contact Info */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        <div style={{ fontSize: 14, fontWeight: 500, color: "#1f2937" }}>
          918-524-6350
        </div>
        <div style={{ fontSize: 12, color: "#6b7280" }}>
          jennifer@flexplanadmin.com
        </div>
      </div>

      {/* Right: Login Link */}
      <div>
        <a
          href="#login"
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "#1f2937",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Login
        </a>
      </div>
    </header>
  );
}
