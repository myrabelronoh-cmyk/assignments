export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> Personal field journal <span className="issue-mark">№ 04 / 26</span></p>
        <h1 id="hero-title">A field guide<br />to being <em>here.</em></h1>
        <p className="hero-description">
          Notes from the familiar world. Side streets, borrowed light, and other things easy to walk past.
        </p>
        <a className="round-link" href="#journal">
          <span>Open the field notes</span><span className="round-link-icon" aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1500&q=90"
          alt="A still mountain lake and winding shoreline, seen as a place to explore"
        />
        <span className="image-index">Fig. 01 — Somewhere between here and there</span>
        <span className="image-caption">North, give or take &nbsp; / &nbsp; 06:18 PM</span>
        <span className="map-stamp" aria-hidden="true"><span>N</span><b>✳</b><i>S</i></span>
        <span className="photo-crosshair photo-crosshair-a" aria-hidden="true">+</span>
        <span className="photo-crosshair photo-crosshair-b" aria-hidden="true">+</span>
      </div>
      <div className="hero-side-note" aria-hidden="true"><span>37° 33′ N</span><span>Take the long way</span></div>
    </section>
  );
}
