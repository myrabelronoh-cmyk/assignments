import { useMemo, useState } from "react";
import ArticleReader from "./components/ArticleReader.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Newsletter from "./components/Newsletter.jsx";
import PostGrid from "./components/PostGrid.jsx";
import { categories, posts } from "./data/posts.js";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All stories");
  const [query, setQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  const visiblePosts = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = activeCategory === "All stories" || post.category === activeCategory;
      const matchesSearch = !searchTerm || [post.title, post.excerpt, post.category].some((value) =>
        value.toLowerCase().includes(searchTerm),
      );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="journal section-wrap" id="journal" aria-labelledby="journal-title">
          <div className="journal-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" /> Index of small discoveries</p>
              <h2 id="journal-title">Places to <em>linger.</em></h2>
            </div>
            <p className="journal-intro">A growing collection of things found by taking the less direct route.</p>
          </div>
          <div className="journal-tools">
            <div className="category-list" aria-label="Filter stories by topic">
              {categories.map((category) => (
                <button
                  type="button"
                  className={activeCategory === category ? "category-button is-active" : "category-button"}
                  key={category}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <label className="search-box">
              <span className="sr-only">Search stories</span>
              <input type="search" placeholder="Find a story..." value={query} onChange={(event) => setQuery(event.target.value)} />
              <span aria-hidden="true">⌕</span>
            </label>
          </div>
          <PostGrid posts={visiblePosts} onRead={setSelectedPost} />
          <p className="story-count" aria-live="polite">{visiblePosts.length} {visiblePosts.length === 1 ? "story" : "stories"} in the journal</p>
        </section>
        <section className="about" id="about">
          <div className="about-inner">
            <div className="about-photo">
              <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=85" alt="A quiet cafe corner with afternoon light" loading="lazy" />
              <span>Plate 05 · A place to pause</span>
            </div>
            <div className="about-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> About this little atlas</p>
              <h2>Not far away.<br /><em>Just looked at.</em></h2>
              <p className="about-description">I’m Rowan: a writer, occasional wanderer, and enthusiastic noter-down of things that might otherwise disappear between one errand and the next.</p>
              <p className="about-description">This atlas doesn’t chart countries. It maps the overlooked: the light in a café at closing time, the long route home, the story behind a chipped cup.</p>
              <a className="about-link" href="#newsletter">Get the next field letter <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
      {selectedPost && <ArticleReader post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </>
  );
}
