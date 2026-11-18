import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="The Almost Atlas home">
        <span className="brand-mark" aria-hidden="true"><span>AA</span></span>
        <span>The Almost Atlas</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
        <a href="#journal" onClick={closeMenu}>Journal</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#newsletter" onClick={closeMenu}>Newsletter</a>
      </nav>
      <a className="header-note" href="#newsletter">Field letters <span aria-hidden="true">↗</span></a>
    </header>
  );
}
