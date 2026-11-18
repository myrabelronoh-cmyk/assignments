import assert from "node:assert/strict";
import test from "node:test";
import { categories, posts } from "./posts.js";

test("the journal contains uniquely identified stories", () => {
  assert.ok(posts.length > 0);
  assert.equal(new Set(posts.map((post) => post.id)).size, posts.length);
});

test("every story has the content required by the journal", () => {
  for (const post of posts) {
    assert.ok(post.title.trim());
    assert.ok(post.excerpt.trim());
    assert.ok(post.category.trim());
    assert.ok(post.date.trim());
    assert.ok(post.image.trim());
    assert.ok(post.imageAlt.trim());
    assert.ok(post.body.length > 0);
  }
});

test("categories include all story topics and start with the all-stories filter", () => {
  assert.equal(categories[0], "All stories");
  assert.deepEqual(
    new Set(categories.slice(1)),
    new Set(posts.map((post) => post.category)),
  );
});
