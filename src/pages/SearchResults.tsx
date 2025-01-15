import React from "react";
import { FeaturedPost } from "../components/FeaturedPost";
import { useSearchParams } from "react-router-dom";
import { useBlog } from "../contexts/BlogContext";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { posts } = useBlog();

  const searchResults = posts.filter((post) =>
    post.title.toLowerCase().includes(query?.toLowerCase() || "")
  );

  return (
    <main className="container mx-auto max-w-7xl py-12 search-results-page">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
      <section className="mt-12 grid grid-cols-1 gap-6">
        {searchResults.length === 0 ? (
          <p>No results found for "{query}"</p>
        ) : (
          searchResults.map((post) => (
            <FeaturedPost
              key={post.id}
              {...post}
              className="search-result-card"
            />
          ))
        )}
      </section>
    </main>
  );
};

export default SearchResults;
