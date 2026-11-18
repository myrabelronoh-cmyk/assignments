export default function PostGrid({ posts, onRead }) {
  if (posts.length === 0) {
    return (
      <p className="empty-state" role="status">
        No stories found. Try another search or topic.
      </p>
    );
  }

  return (
    <div className="post-grid">
      {posts.map((post, index) => (
        <article className={`post-card${post.featured ? " post-card-featured" : ""}`} key={post.id}>
          <button className="post-image-button" type="button" onClick={() => onRead(post)} aria-label={`Read ${post.title}`}>
            <img src={post.image} alt={post.imageAlt} loading="lazy" />
            <span className="image-arrow" aria-hidden="true">↗</span>
            <span className="image-field-label">Field note &nbsp;·&nbsp; {String(post.id).padStart(2, "0")}</span>
          </button>
          <div className="post-meta">
            <span><i aria-hidden="true" />{post.category}</span>
            <span>{post.date}</span>
          </div>
          <h3>
            <button type="button" className="post-title" onClick={() => onRead(post)}>{post.title}</button>
          </h3>
          <p className="post-excerpt">{post.excerpt}</p>
          <span className="post-number">0{index + 1}</span>
        </article>
      ))}
    </div>
  );
}
