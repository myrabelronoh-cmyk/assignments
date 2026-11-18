import { describe, expect, it } from "vitest";
import { categories, posts } from "./posts.js";

describe("journal data", () => {
  it("contains uniquely identified stories", () => {
    expect(posts.length).toBeGreaterThan(0);
    expect(new Set(posts.map((post) => post.id)).size).toBe(posts.length);
  });

  it("provides the content required by the journal for every story", () => {
    for (const post of posts) {
      expect(post.title.trim()).toBeTruthy();
      expect(post.excerpt.trim()).toBeTruthy();
      expect(post.category.trim()).toBeTruthy();
      expect(post.date.trim()).toBeTruthy();
      expect(post.image.trim()).toBeTruthy();
      expect(post.imageAlt.trim()).toBeTruthy();
      expect(post.body.length).toBeGreaterThan(0);
    }
  });

  it("lists every story topic after the all-stories filter", () => {
    expect(categories[0]).toBe("All stories");
    expect(
      new Set(categories.slice(1)),
    ).toEqual(new Set(posts.map((post) => post.category)));
  });
});
