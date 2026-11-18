import { useEffect } from "react";

export default function ArticleReader({ post, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("dialog-open");
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("dialog-open");
    };
  }, [onClose]);

  return (
    <div className="reader-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <article className="reader" role="dialog" aria-modal="true" aria-labelledby="reader-title">
        <button className="reader-close" type="button" onClick={onClose} aria-label="Close article">×</button>
        <p className="eyebrow">{post.category} <span className="reader-separator">/</span> {post.date} <span className="reader-separator">/</span> {post.readTime}</p>
        <h2 id="reader-title">{post.title}</h2>
        <p className="reader-deck">{post.excerpt}</p>
        <img className="reader-image" src={post.image} alt={post.imageAlt} />
        <div className="reader-body">
          {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <button className="reader-finish" type="button" onClick={onClose}>Back to the journal <span aria-hidden="true">↗</span></button>
        </div>
      </article>
    </div>
  );
}
