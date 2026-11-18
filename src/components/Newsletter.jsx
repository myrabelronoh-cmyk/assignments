import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> Postcards from nearby</p>
        <h2>Leave room<br />for the <em>unmarked.</em></h2>
        <p>A short field letter, sent when there’s something worth pointing out. No dispatch schedule.</p>
      </div>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <label htmlFor="newsletter-email">Coordinates for the next letter</label>
        <div className="input-row">
          <input
            id="newsletter-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            disabled={submitted}
          />
          <button type="submit" disabled={submitted}>{submitted ? "Joined ✓" : "Count me in ↗"}</button>
        </div>
        <p className="form-note" aria-live="polite">
          {submitted ? "Coordinates received. Watch this space." : "One small letter at a time. Leave whenever you like."}
        </p>
      </form>
    </section>
  );
}
